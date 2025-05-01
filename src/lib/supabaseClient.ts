import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  throw new Error("Missing env.NEXT_PUBLIC_SUPABASE_URL");
}

if (!supabaseAnonKey) {
  throw new Error("Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY");
}

// Client-side client (uses anon key)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Server-side client (uses service role key for admin actions)
// Note: Only use this on the server-side (e.g., Server Components, API routes)
export const getSupabaseAdmin = () => {
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseServiceRoleKey) {
    throw new Error("Missing env.SUPABASE_SERVICE_ROLE_KEY");
  }
  // Important: Create a new client instance for server-side use with the service role key
  // to avoid accidentally exposing the service key on the client.
  // We are not creating a singleton here to prevent potential issues with different user contexts if auth were added.
  return createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      // In a real app with Supabase Auth, you might configure autoRefreshToken and persistSession
      // but for service_role usage, they are typically not needed.
      autoRefreshToken: false,
      persistSession: false,
    },
  });
};
