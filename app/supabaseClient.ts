import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = '<sua-url-supabase>';
const SUPABASE_ANON_KEY = '<sua-chave-anonima>';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
