/*
  # Grant INSERT permission to anon role for contact_requests table

  1. Permissions
    - Grant INSERT permission to `anon` role on `contact_requests` table
    - This allows anonymous users to insert contact form submissions
  
  2. Security
    - RLS policies are already in place to control access
    - This only grants the base INSERT permission that RLS policies require
*/

-- Grant INSERT permission to anon role for contact_requests table
GRANT INSERT ON public.contact_requests TO anon;

-- Verify the permission was granted (optional, for debugging)
-- You can check permissions with: \dp contact_requests in psql