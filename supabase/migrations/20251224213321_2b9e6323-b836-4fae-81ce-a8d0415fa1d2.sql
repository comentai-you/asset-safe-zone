-- Create landing_pages table for TrustPage
CREATE TABLE public.landing_pages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  slug TEXT NOT NULL UNIQUE,
  template_id INTEGER NOT NULL DEFAULT 1,
  
  -- Identity
  page_name TEXT,
  profile_image_url TEXT,
  
  -- Offer
  headline TEXT,
  subheadline TEXT,
  video_url TEXT,
  description TEXT,
  image_url TEXT,
  
  -- Conversion
  cta_text TEXT DEFAULT 'Comprar Agora',
  cta_url TEXT,
  whatsapp_number TEXT,
  pix_pixel_id TEXT,
  
  -- Styling
  colors JSONB DEFAULT '{"primary": "#8B5CF6", "background": "#FFFFFF", "text": "#1F2937"}'::jsonb,
  
  -- Metadata
  is_published BOOLEAN DEFAULT false,
  views INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.landing_pages ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Users can view own landing pages"
ON public.landing_pages
FOR SELECT
USING (user_id = auth.uid());

CREATE POLICY "Users can create own landing pages"
ON public.landing_pages
FOR INSERT
WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update own landing pages"
ON public.landing_pages
FOR UPDATE
USING (user_id = auth.uid());

CREATE POLICY "Users can delete own landing pages"
ON public.landing_pages
FOR DELETE
USING (user_id = auth.uid());

-- Public can view published pages by slug
CREATE POLICY "Public can view published pages"
ON public.landing_pages
FOR SELECT
USING (is_published = true);

-- Create index for slug lookups
CREATE INDEX idx_landing_pages_slug ON public.landing_pages(slug);
CREATE INDEX idx_landing_pages_user_id ON public.landing_pages(user_id);

-- Trigger for updated_at
CREATE TRIGGER update_landing_pages_updated_at
BEFORE UPDATE ON public.landing_pages
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();