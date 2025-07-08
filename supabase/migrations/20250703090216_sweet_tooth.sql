/*
  # Fix RLS policy for anonymous contact form submissions

  1. Problem Analysis
    - Current policy is for 'public' role but Supabase uses 'anon' role
    - Anonymous users cannot insert contact requests
    - RLS is blocking all insert operations

  2. Solution
    - Drop existing policies that might conflict
    - Create new policy specifically for 'anon' role
    - Ensure anonymous users can submit contact forms
    - Keep read access for authenticated users only

  3. Security
    - Anonymous users: INSERT only
    - Authenticated users: SELECT, UPDATE
    - No DELETE permissions for security
*/

-- Drop all existing policies to start fresh
DROP POLICY IF EXISTS "Allow public insert" ON contact_requests;


-- Ensure RLS is enabled
ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;

-- Create INSERT policy for anonymous users (this is the key fix)
CREATE POLICY "anon_can_insert_contact_requests"
  ON contact_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create INSERT policy for authenticated users as well
CREATE POLICY "authenticated_can_insert_contact_requests"
  ON contact_requests
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Create SELECT policy for authenticated users only
CREATE POLICY "authenticated_can_read_contact_requests"
  ON contact_requests
  FOR SELECT
  TO authenticated
  USING (true);

-- Create UPDATE policy for authenticated users only
CREATE POLICY "authenticated_can_update_contact_requests"
  ON contact_requests
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);