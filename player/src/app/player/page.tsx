import AudioPlayer from "@/components/audio-player";
import { getSongs } from "./actions";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Page() {
  const songs = await getSongs();
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/auth");
  }

  return (
    <div className="w-full flex justify-center">
      <AudioPlayer songs={songs} />
    </div>
  );
}
