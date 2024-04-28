import AudioPlayer from "@/components/audio-player";
import { getSongs } from "./actions";

export default async function Page() {
  const songData = await getSongs()

  return (
    <div className="w-full flex justify-center">
      <AudioPlayer songs={songData} />
    </div>
  );
}
