import callWelcome from "./service";
import { unlink } from "node:fs/promises";
import uploadFile from "./init";

Bun.serve({
    port: 8080,
    async fetch(req) {
        const url = await Bun.readableStreamToText(req.body!);

        console.log(url)
        await callWelcome(url);

        const { supaData, error } = await uploadFile();

        if (error) {
            console.log(error)
        }

        const videoPath = "./video.mp4";
        await unlink(videoPath);
        const audioPath = "./output.mp3"
        await unlink(audioPath);

        return new Response(JSON.stringify(supaData));
    },
});
