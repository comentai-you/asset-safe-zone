-- Create a secure view for public landing page access that excludes user_id
CREATE OR REPLACE VIEW public.public_landing_pages AS
SELECT 
  id,
  slug,
  template_id,
  template_type,
  page_name,
  profile_image_url,
  headline,
  subheadline,
  video_url,
  video_storage_path,
  description,
  image_url,
  cover_image_url,
  cta_text,
  cta_url,
  cta_delay_enabled,
  cta_delay_percentage,
  whatsapp_number,
  pix_pixel_id,
  colors,
  primary_color,
  content,
  views,
  is_published,
  created_at,
  updated_at
  -- Note: user_id is intentionally excluded to prevent user identity exposure
FROM public.landing_pages
WHERE is_published = true 
  AND public.is_subscription_active(user_id);

-- Grant SELECT on the view to anon and authenticated roles
GRANT SELECT ON public.public_landing_pages TO anon;
GRANT SELECT ON public.public_landing_pages TO authenticated;

-- Create a secure function to get owner's plan type without exposing user_id
-- This function takes a page_id and returns just the plan info needed
CREATE OR REPLACE FUNCTION public.get_page_owner_plan(page_id uuid)
RETURNS TABLE (
  plan_type text,
  is_trial boolean
)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT 
    p.plan_type,
    (p.subscription_status = 'trial') as is_trial
  FROM public.profiles p
  INNER JOIN public.landing_pages lp ON lp.user_id = p.id
  WHERE lp.id = page_id
    AND lp.is_published = true
    AND public.is_subscription_active(lp.user_id);
$$;