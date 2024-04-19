export const load: PageLoad = async ({ locals: { supabase } }) => {
    const { error } = await supabase.auth.signOut()
    if (error) {
        console.log(error)
    }
}
