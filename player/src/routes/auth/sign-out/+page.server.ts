import { redirect } from "@sveltejs/kit"
import type { PageServerLoad } from "../$types"

export const load: PageServerLoad = async ({ locals: { supabase } }: any) => {
    const { error } = await supabase.auth.signOut()
    if (error) {
        console.log(error)
        return { success: false, error: error.message, message: error.message }
    }

    return { success: true, error: null, message: "Signed out" }
}
