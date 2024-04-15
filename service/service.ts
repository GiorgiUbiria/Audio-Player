import { $ } from "bun";

export default async function callWelcome(url: string) {
    await $`yt-dlp -f best -o "video.mp4" ${url}`.text();
    const welcome = await $`ffmpeg -i video.mp4 output.mp3`
    return welcome
}
