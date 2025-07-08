import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xcyneiliunkeuggcmmax.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhjeW5laWxpdW5rZXVnZ2NtbWF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0NDMwMzAsImV4cCI6MjA2NzAxOTAzMH0.SrDFGVpuKRaPCVuCaiHlOWpZLE_KcwwNAiUmEccdAFE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
