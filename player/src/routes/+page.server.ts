import { supabase } from "$lib/supabase";

export async function load() {
    let arr: string[] = [];
    const { data: list, error } = await supabase
        .storage
        .from('audio')
        .list('playlist', {
            limit: 100,
            offset: 0,
        })

    list?.forEach(async (item) => {
        const { data } = await supabase
            .storage
            .from('audio')
            .getPublicUrl(`playlist/${item.name}`)

        arr.push(data.publicUrl)
    })

    return {
        data: arr,
    };
}

