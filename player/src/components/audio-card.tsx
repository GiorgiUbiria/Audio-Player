import * as React from "react";

interface Props {
  song: string;
  index: number;
  currentSongIndex: number;
  playSong: (index: number) => void;
}

const AudioCard: React.FC<Props> = ({
  song,
  index,
  currentSongIndex,
  playSong,
}) => {
  const name = song.split("/")[song.split("/").length - 1];

  return (
    <div
      className={`border rounded-md p-2 cursor-pointer bg-white ${index === currentSongIndex ? "selected" : ""}`}
      onClick={() => playSong(index)}
    >
      <p className="text-sm text-gray-700 dark:text-black">{name}</p>
    </div>
  );
};

export default AudioCard;
