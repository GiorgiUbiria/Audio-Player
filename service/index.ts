import callWelcome from "./service";
import { unlink } from "node:fs/promises";
import uploadFile from "./init";

const server = Bun.serve({
    port: 8080,
    async fetch(req) {
        const body = await JSON.parse(await Bun.readableStreamToText(req.body!));

        console.log(body.url)
        await callWelcome(body.url);

        const { supaData, error } = await uploadFile(body.name);

        if (error) {
            console.log(error)
        }

        const videoPath = "./video.mp4";
        await unlink(videoPath);

        server.stop();

        return new Response(JSON.stringify(supaData));
    },
});

