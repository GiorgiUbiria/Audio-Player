import { z } from "zod";

export const formSchema = z.object({
    video_url: z.string().min(2).max(50),
    audio_name: z.string().min(2).max(50),
});

export type FormSchema = typeof formSchema;
