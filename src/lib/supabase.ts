import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

// Initialize Supabase tables
const initializeDatabase = async () => {
  const { error: profilesError } = await supabase.from('profiles').select().limit(1);
  
  if (profilesError?.code === '42P01') { // Table doesn't exist
    await supabase.from('profiles').insert([]).select();
  }

  const { error: interviewsError } = await supabase.from('interviews').select().limit(1);
  
  if (interviewsError?.code === '42P01') {
    await supabase.from('interviews').insert([]).select();
  }
};

initializeDatabase().catch(console.error);