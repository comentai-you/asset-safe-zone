import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";
import LandingPageView from "./LandingPageView";
import NotFound from "./NotFound";

interface ResolvedDomain {
  found: boolean;
  type?: 'page' | 'homepage' | 'no_pages';
  userId?: string;
  pageId?: string;
  slug?: string;
  defaultPage?: {
    id: string;
    slug: string;
    templateType: string;
    pageName: string;
  };
  pages?: Array<{
    id: string;
    slug: string;
    templateType: string;
    pageName: string;
  }>;
  planType?: string;
  error?: string;
}

const CustomDomainPage = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [resolvedSlug, setResolvedSlug] = useState<string | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const resolveDomain = async () => {
      const hostname = window.location.hostname;
      const path = location.pathname;

      console.log(`[CustomDomain] Starting resolution for: ${hostname}${path}`);

      // Extract slug directly from path - handle /p/ prefix for legacy support
      let pathSlug = path || '';
      if (pathSlug.startsWith('/p/')) {
        pathSlug = pathSlug.substring(3);
      }
      pathSlug = pathSlug.replace(/^\/+/, '').split('/')[0] || '';
      
      try {
        console.log('[CustomDomain] Calling edge function...');
        const response = await supabase.functions.invoke<ResolvedDomain>('resolve-custom-domain', {
          body: { hostname, path }
        });

        console.log('[CustomDomain] Edge function response:', response);

        // Check for network/invoke errors
        if (response.error) {
          console.error('[CustomDomain] Edge function error:', response.error);
          // Fallback: try direct slug lookup
          if (pathSlug) {
            console.log('[CustomDomain] Fallback to direct slug:', pathSlug);
            setResolvedSlug(pathSlug);
          } else {
            setNotFound(true);
          }
          setLoading(false);
          return;
        }

        const data = response.data;
        console.log('[CustomDomain] Parsed data:', JSON.stringify(data));

        // Domain not found/verified
        if (!data?.found) {
          console.log('[CustomDomain] Domain not found, trying direct slug');
          if (pathSlug) {
            setResolvedSlug(pathSlug);
          } else {
            setNotFound(true);
          }
          setLoading(false);
          return;
        }

        // Handle response types
        if (data.type === 'page' && data.slug) {
          console.log('[CustomDomain] Page found, slug:', data.slug);
          setResolvedSlug(data.slug);
        } else if (data.type === 'homepage' && data.defaultPage?.slug) {
          console.log('[CustomDomain] Homepage, default slug:', data.defaultPage.slug);
          setResolvedSlug(data.defaultPage.slug);
        } else if (data.type === 'no_pages') {
          console.log('[CustomDomain] No published pages');
          setNotFound(true);
        } else {
          // Unexpected response - try path slug as fallback
          console.log('[CustomDomain] Unexpected response, using path slug:', pathSlug);
          if (pathSlug) {
            setResolvedSlug(pathSlug);
          } else {
            setNotFound(true);
          }
        }
      } catch (err) {
        console.error('[CustomDomain] Exception:', err);
        // Final fallback
        if (pathSlug) {
          setResolvedSlug(pathSlug);
        } else {
          setNotFound(true);
        }
      } finally {
        setLoading(false);
      }
    };

    resolveDomain();
  }, [location.pathname]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (notFound || !resolvedSlug) {
    return <NotFound />;
  }

  // Render the landing page with the resolved slug
  return <LandingPageView slugOverride={resolvedSlug} />;
};

export default CustomDomainPage;
