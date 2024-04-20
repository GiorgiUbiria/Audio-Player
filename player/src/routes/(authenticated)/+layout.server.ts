import { redirect } from '@sveltejs/kit'

export const load = async ({ locals: { supabase } }) => {
  const result = await supabase.auth.getUser()

  if (!result.data.user) redirect(307, '/auth')
}
