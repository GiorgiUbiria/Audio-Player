"use client";

import * as React from "react";
import AudioCard from "./audio-card";

const AudioPlayer: React.FC<{ songs: string[] }> = ({ songs }) => {
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const [currentSongIndex, setCurrentSongIndex] = React.useState(0);
  const [playbackState, setPlaybackState] = React.useState<
    "playing" | "paused" | "stopped"
  >("stopped");

  const playSong = (index: number) => {
    setCurrentSongIndex(index);
    if (audioRef.current) {
      audioRef.current.src = songs[index];
      audioRef.current
        .play()
        .then(() => {
          setPlaybackState("playing");
        })
        .catch((error) => {
          console.error("Failed to play:", error);
        });
    }
  };

  const play = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setPlaybackState("playing");
        })
        .catch((error) => {
          console.error("Failed to play:", error);
        });
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setPlaybackState("paused");
    }
  };

  const stop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setPlaybackState("stopped");
    }
  };

  const nextSong = () => {
    if (
      playbackState === "stopped" ||
      currentSongIndex < songs.length - 1
    ) {
      setCurrentSongIndex((prevIndex) => prevIndex + 1);
      if (audioRef.current) {
        audioRef.current.src = songs[currentSongIndex + 1];
        play();
      }
    }
  };

  const prevSong = () => {
    if (playbackState === "stopped" || currentSongIndex > 0) {
      setCurrentSongIndex((prevIndex) => prevIndex - 1);
      if (audioRef.current) {
        audioRef.current.src = songs[currentSongIndex - 1];
        play();
      }
    }
  };

  return (
    <div className="w-1/2">
      <audio src={songs[currentSongIndex]} ref={audioRef}></audio>
      <div className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 px-4 py-2">
        <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
          Music Player
        </h2>
        <div className="flex space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-900 dark:text-gray-100"
          >
            <path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8"></path>
            <path d="M3 16.2V21m0 0h4.8M3 21l6-6"></path>
            <path d="M21 7.8V3m0 0h-4.8M21 3l-6 6"></path>
            <path d="M3 7.8V3m0 0h4.8M3 3l6 6"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-900 dark:text-gray-100"
          >
            <rect x="2" y="6" width="20" height="8" rx="1"></rect>
            <path d="M17 14v7"></path>
            <path d="M7 14v7"></path>
            <path d="M17 3v3"></path>
            <path d="M7 3v3"></path>
            <path d="M10 14 2.3 6.3"></path>
            <path d="m14 6 7.7 7.7"></path>
            <path d="m8 6 8 8"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-900 dark:text-gray-100"
          >
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        </div>
      </div>
      <div className="flex flex-col space-y-4 p-4">
        <div className="flex items-center justify-between">
          <button onClick={prevSong}>Previous</button>
          <button onClick={playbackState === "playing" ? pause : play}>
            {playbackState === "playing" ? "Pause" : "Play"}
          </button>
          <button onClick={nextSong}>Next</button>
        </div>
        <hr />
        <div className="p-4 align-baseline flex flex-col gap-2">
          {songs.map((song, index) => (
            <AudioCard
              key={index}
              song={song}
              index={index}
              currentSongIndex={currentSongIndex}
              playSong={playSong}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
