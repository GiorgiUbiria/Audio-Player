import AudioPlayer from "@/components/audio-player";
import { getSongs } from "./actions";
import { createClient } from "@/utils/supabase/server";

export default async function Page() {
  const supabase = createClient();

  const { data } = await supabase.auth.getUser();

  async function getRandomSongs() {
    const songs = await getSongs();

    for (let i = songs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [songs[i], songs[j]] = [songs[j], songs[i]];
    }

    return songs.slice(0, Math.min(songs.length, 5));
  }

  const songData = data.user ? await getSongs() : await getRandomSongs();

  return (
    <div className="w-full flex justify-center">
      <AudioPlayer songs={songData} />
    </div>
  );
}
