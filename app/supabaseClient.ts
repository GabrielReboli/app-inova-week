import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://wzlpsrikbtfumaqpgflr.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6bHBzcmlrYnRmdW1hcXBnZmxyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE1MjQ3MTIsImV4cCI6MjA0NzEwMDcxMn0.up6-wDOOWYw-ebInbbV_ByuFqu0aIS5meKbFJvnJXyY';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
