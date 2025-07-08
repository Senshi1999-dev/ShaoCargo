/*
  # Fix RLS policy for contact form submissions

  1. Security Updates
    - Drop existing INSERT policy for contact_requests
    - Create new INSERT policy that explicitly allows anonymous submissions
    - Ensure the policy works correctly for both anon and authenticated users

  2. Policy Details
    - Allow INSERT operations for both 'anon' and 'authenticated' roles
    - No restrictions on insertion (true condition)
    - Ensures contact form works for all users
*/

-- Drop existing INSERT policy if it exists
DROP POLICY IF EXISTS "Allow anonymous contact form submissions" ON contact_requests;

-- Create new INSERT policy that explicitly allows anonymous submissions
CREATE POLICY "Enable insert for anonymous users" ON contact_requests
  FOR INSERT 
  TO anon, authenticated
  WITH CHECK (true);

-- Ensure RLS is enabled (should already be enabled based on schema)
ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;