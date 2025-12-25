-- Update the can_create_page function with new limits: Essential = 3, PRO = 10
CREATE OR REPLACE FUNCTION public.can_create_page(check_user_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT 
    CASE
      -- Not active subscription = cannot create
      WHEN NOT public.is_subscription_active(check_user_id) THEN false
      -- Active paid subscription = check limits based on plan
      ELSE
        CASE (SELECT plan_type FROM public.profiles WHERE id = check_user_id)
          WHEN 'pro' THEN (SELECT COUNT(*) FROM public.landing_pages WHERE user_id = check_user_id) < 10
          WHEN 'elite' THEN (SELECT COUNT(*) FROM public.landing_pages WHERE user_id = check_user_id) < 10
          ELSE (SELECT COUNT(*) FROM public.landing_pages WHERE user_id = check_user_id) < 3 -- essential
        END
    END;
$$;