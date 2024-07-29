import process from 'node:process'
import { $ } from 'bun'

await $`supabase gen types --lang=typescript --project-id ${process.env.SUPABASE_PROJECT_ID} --schema public > src/lib/types.ts`
