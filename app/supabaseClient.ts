import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://wzlpsrikbtfumaqpgflr.supabase.co';
const SUPABASE_ANON_KEY = '<sua-chave-anonima>';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
