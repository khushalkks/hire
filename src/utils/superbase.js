import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const superbaseclient = async (superbaseAcessToken) => {
  const superbase = createClient(supabaseUrl, supabaseKey, {
    global: {
      headers: {
        Authorization: `Bearer ${superbaseAcessToken}`,
      },
    },
  });

  return superbase;
};
export default superbaseclient;
