import AudioPlayer from "@/components/audio-player";
import getSongs from "./actions";

export default async function Page() {
  const songs = await getSongs();

  return (
    <div className="w-full flex justify-center">
      <AudioPlayer songs={songs} />
    </div>
  )
}
