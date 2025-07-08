/*
  # Fix RLS policies for contact_requests table

  1. Security Updates
    - Drop existing policies that may be conflicting
    - Create new, properly configured policies for anonymous and authenticated users
    - Ensure anonymous users can insert contact requests
    - Ensure authenticated users can read, insert, and update contact requests

  2. Policy Details
    - `anon_insert_contact_requests`: Allows anonymous users to insert contact requests
    - `authenticated_full_access_contact_requests`: Allows authenticated users full access
*/

-- Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "anon_can_insert_contact_requests" ON contact_requests;
DROP POLICY IF EXISTS "authenticated_can_insert_contact_requests" ON contact_requests;
DROP POLICY IF EXISTS "authenticated_can_read_contact_requests" ON contact_requests;
DROP POLICY IF EXISTS "authenticated_can_update_contact_requests" ON contact_requests;

-- Create new policy for anonymous users to insert contact requests
CREATE POLICY "anon_insert_contact_requests"
  ON contact_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create comprehensive policy for authenticated users
CREATE POLICY "authenticated_full_access_contact_requests"
  ON contact_requests
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Ensure RLS is enabled
ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;