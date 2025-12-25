-- Add new columns for Sales Page template support
ALTER TABLE public.landing_pages
ADD COLUMN IF NOT EXISTS template_type text NOT NULL DEFAULT 'vsl',
ADD COLUMN IF NOT EXISTS content jsonb DEFAULT '{}',
ADD COLUMN IF NOT EXISTS primary_color text DEFAULT '#8B5CF6';

-- Add comment for documentation
COMMENT ON COLUMN public.landing_pages.template_type IS 'Template type: vsl or sales';
COMMENT ON COLUMN public.landing_pages.content IS 'Flexible JSONB storage for template-specific data (benefits, testimonials, pricing, etc.)';
COMMENT ON COLUMN public.landing_pages.primary_color IS 'Primary brand color for the page';