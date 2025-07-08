/*
  # Fix RLS policy for contact requests

  1. Security Updates
    - Drop existing restrictive INSERT policy
    - Create new INSERT policy that allows anonymous users to submit contact requests
    - Ensure the policy properly handles both anonymous and authenticated users

  This migration fixes the RLS policy violation that was preventing contact form submissions.
*/

-- Drop the existing INSERT policy that might be too restrictive
DROP POLICY IF EXISTS "contact_requests_insert_policy" ON contact_requests;

-- Create a new INSERT policy that allows both anonymous and authenticated users to insert
CREATE POLICY "Allow anonymous contact submissions"
  ON contact_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Ensure RLS is enabled (should already be enabled based on schema)
ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;