/*
  # Fix RLS policies for contact_requests table

  1. Security Updates
    - Drop existing policies that might be causing conflicts
    - Create new, more permissive policies for contact form submissions
    - Ensure anonymous users can insert contact requests
    - Maintain read access for authenticated users

  2. Changes
    - Remove restrictive INSERT policy
    - Add new INSERT policy that allows all anonymous and authenticated users
    - Keep existing SELECT policy for authenticated users
*/

-- Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Anyone can create contact requests" ON contact_requests;
DROP POLICY IF EXISTS "Authenticated users can read contact requests" ON contact_requests;

-- Create new INSERT policy that allows anonymous users to submit contact forms
CREATE POLICY "Allow anonymous contact form submissions"
  ON contact_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create SELECT policy for authenticated users to read contact requests
CREATE POLICY "Authenticated users can read contact requests"
  ON contact_requests
  FOR SELECT
  TO authenticated
  USING (true);

-- Ensure RLS is enabled (should already be enabled based on schema)
ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;