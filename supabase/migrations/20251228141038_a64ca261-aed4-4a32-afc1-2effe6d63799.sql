-- =====================================================
-- MIGRATION: Freemium Model - Remove Trial, Add FREE Plan
-- =====================================================

-- 1. Drop existing plan_type constraint and recreate with new values
ALTER TABLE public.profiles DROP CONSTRAINT IF EXISTS profiles_plan_type_check;
ALTER TABLE public.profiles ADD CONSTRAINT profiles_plan_type_check 
  CHECK (plan_type = ANY (ARRAY['free'::text, 'essential'::text, 'pro'::text, 'elite'::text]));

-- 2. Update is_subscription_active function
-- FREE plan is always active (no expiration), paid plans check status
CREATE OR REPLACE FUNCTION public.is_subscription_active(check_user_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT 
    COALESCE(
      -- Active paid subscription
      subscription_status = 'active' OR
      -- Free plan is always active
      subscription_status = 'free',
      false
    )
  FROM public.profiles
  WHERE id = check_user_id;
$$;

-- 3. Update can_create_page function with FREE plan limits
-- FREE: 1 page (only bio type - enforced in frontend)
-- Essential: 3 pages
-- PRO: 10 pages
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
      -- Check limits based on plan
      ELSE
        CASE (SELECT plan_type FROM public.profiles WHERE id = check_user_id)
          WHEN 'pro' THEN (SELECT COUNT(*) FROM public.landing_pages WHERE user_id = check_user_id) < 10
          WHEN 'elite' THEN (SELECT COUNT(*) FROM public.landing_pages WHERE user_id = check_user_id) < 10
          WHEN 'essential' THEN (SELECT COUNT(*) FROM public.landing_pages WHERE user_id = check_user_id) < 3
          ELSE (SELECT COUNT(*) FROM public.landing_pages WHERE user_id = check_user_id) < 1 -- FREE plan: 1 page only
        END
    END;
$$;

-- 4. Update get_page_owner_plan to handle FREE plan
CREATE OR REPLACE FUNCTION public.get_page_owner_plan(page_id uuid)
RETURNS TABLE(plan_type text, is_trial boolean)
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path = public
AS $$
  SELECT 
    p.plan_type,
    (p.plan_type = 'free' OR p.plan_type = 'essential') as is_trial -- show watermark for free/essential
  FROM public.profiles p
  INNER JOIN public.landing_pages lp ON lp.user_id = p.id
  WHERE lp.id = page_id
    AND lp.is_published = true
    AND public.is_subscription_active(lp.user_id);
$$;

-- 5. Update existing trial users to free
UPDATE public.profiles 
SET subscription_status = 'free', plan_type = 'free'
WHERE subscription_status = 'trial';

-- 6. Update default for new users
ALTER TABLE public.profiles 
ALTER COLUMN subscription_status SET DEFAULT 'free';

ALTER TABLE public.profiles 
ALTER COLUMN plan_type SET DEFAULT 'free';

-- 7. Update handle_new_user to set free plan
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, username, subscription_status, plan_type)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data ->> 'full_name', ''),
    COALESCE(NEW.raw_user_meta_data ->> 'username', 'user_' || LEFT(NEW.id::TEXT, 8)),
    'free',
    'free'
  );
  
  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'user');
  
  RETURN NEW;
END;
$$;

-- 8. Add facebook_pixel_id column to landing_pages if not exists (for FREE pixel feature)
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'landing_pages' 
    AND column_name = 'facebook_pixel_id'
  ) THEN
    ALTER TABLE public.landing_pages ADD COLUMN facebook_pixel_id text;
  END IF;
END $$;