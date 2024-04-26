"use server";

import { revalidatePath } from "next/cache";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function getSongs() {
  const supabase = createClient();
  const arr: string[] = [];
  const { data: list, error } = await supabase.storage
    .from("audio")
    .list("playlist", {
      limit: 100,
      offset: 0,
    });

  if (error) {
    console.log(error.message);
  }

  list?.forEach((item) => {
    const { data } = supabase.storage
      .from("audio")
      .getPublicUrl(`playlist/${item.name}`);

    arr.push(data.publicUrl);
  });

  revalidatePath("/player", "layout");

  return arr;
}

export async function convertYtVideo(formData: FormData) {
  const data = {
    url: formData.get("video_url") as string,
    name: formData.get("file_name") as string,
  };

  await fetch("http://localhost:8080/", {
    method: "POST",
    body: JSON.stringify(data),
  });

  revalidatePath("/player", "layout")
  redirect("/player")
}
