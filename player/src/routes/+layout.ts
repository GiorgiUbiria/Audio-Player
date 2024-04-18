import { env } from '$env/dynamic/private';
import type { LayoutLoad } from './$types'
import { createBrowserClient, isBrowser, parse } from '@supabase/ssr'

export const load: LayoutLoad = async ({ fetch, data, depends }) => {
    depends('supabase:auth')

    const supabase = createBrowserClient(env.SUPABASE_URL!, env.SUPABASE_ANON_KEY!, {
        global: {
            fetch,
        },
        cookies: {
            get(key) {
                if (!isBrowser()) {
                    return JSON.stringify(data.session)
                }

                const cookie = parse(document.cookie)
                return cookie[key]
            },
        },
    })

    const {
        data: { session },
    } = await supabase.auth.getSession()

    return { supabase, session }
}
