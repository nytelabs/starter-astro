// Modules
import { createClient } from "@supabase/supabase-js";

// Global Types
import type { SupabaseClient } from "@/types/app.types";

// Instance
export const supabase: SupabaseClient = createClient(
  process.env.ASTRO_PUBLIC_SUPABASE_URL as string,
  process.env.ASTRO_PUBLIC_SUPABASE_KEY as string
);
