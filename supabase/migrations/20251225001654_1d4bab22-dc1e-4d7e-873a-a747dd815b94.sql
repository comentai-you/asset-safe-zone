-- Add unique constraint on slug column to prevent duplicate slugs
ALTER TABLE public.landing_pages 
ADD CONSTRAINT landing_pages_slug_unique UNIQUE (slug);