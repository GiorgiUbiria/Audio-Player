import { redirect } from "@sveltejs/kit"
import type { PageServerLoad } from "../$types"

export const load: PageServerLoad = async ({ locals: { supabase } }: any) => {
    const { error } = await supabase.auth.signOut()
    if (error) {
        console.log(error)
    }

    redirect(303, "/")
}
