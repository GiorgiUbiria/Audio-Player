import { createClient } from '@supabase/supabase-js'
import { unlink } from "node:fs/promises";
import compressAudio from "./compress";

export const supabase = createClient('https://gbkiubwovexlkqwdxysg.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdia2l1YndvdmV4bGtxd2R4eXNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgwMTczODUsImV4cCI6MjAyMzU5MzM4NX0.6soMFXQr_i8PdKkl0XldAJ3TJupX48Txs0x9PKMKzy4')

export default async function uploadFile(name: string) {
    const inputFilePath = "./output.mp3";
    const compressedOutputFilePath = "./compressed-output.mp3";

    await compressAudio(inputFilePath, compressedOutputFilePath);

    const audioFile = Bun.file(compressedOutputFilePath);

    const { data, error } = await supabase
        .storage
        .from('audio')
        .upload('playlist/' + name + '.mp3', audioFile, {
            cacheControl: '3600',
            upsert: false
        })

    await unlink(inputFilePath);
    await unlink(compressedOutputFilePath);

    return {
        supaData: data,
        error: error,
    }
}
