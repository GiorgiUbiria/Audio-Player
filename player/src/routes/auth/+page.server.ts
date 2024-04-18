import { redirect } from '@sveltejs/kit'
import type { Actions } from './$types'

export const actions: Actions = {
    default: async (event: any) => {
        const { locals: { supabase } } = event

        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'github',
            options: {
                redirectTo: 'http://example.com/auth/callback',
            },
        })

        if (data.url) {
            redirect(303, data.url)
        }
    },
    email: async (event: any) => {
        const { locals: { supabase } } = event

        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'github',
            options: {
                redirectTo: 'http://example.com/auth/callback',
            },
        })

        if (data.url) {
            redirect(303, data.url)
        }
    }
}
