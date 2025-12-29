import { createClient } from 'jsr:@supabase/supabase-js@2'
import 'dotenv/config'

export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY)


