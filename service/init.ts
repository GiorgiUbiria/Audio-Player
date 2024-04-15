import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://gbkiubwovexlkqwdxysg.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdia2l1YndvdmV4bGtxd2R4eXNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgwMTczODUsImV4cCI6MjAyMzU5MzM4NX0.6soMFXQr_i8PdKkl0XldAJ3TJupX48Txs0x9PKMKzy4')

export default async function uploadFile() {
    const audioFile = Bun.file("./output.mp3");

    const { data, error } = await supabase
        .storage
        .from('audio')
        .upload('playlist/something3.mp3', audioFile, {
            cacheControl: '3600',
            upsert: false
        })

    return {
        supaData: data,
        error: error,
    }
}
