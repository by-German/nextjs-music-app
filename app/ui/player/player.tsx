'use client'

import { useRef } from "react";
import { PlayerControllers } from "./player-controllers";

export function Player() {
  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <div className="flex">
      <img
        alt="song album image"
        src="https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2Fe303074d8d8ca88d5dfc9fb2c1368cb0.1000x1000x1.png"
        width={300}
        height={300}
      />

      <div className="flex flex-col w-full pl-4">

        <div className="grow flex flex-col justify-end mb-4 border-2 border-red-600">
          <h2 className="text-2xl">Nothing's Alright is okay</h2>
          <h3 className="text-lg">witchgang</h3>
        </div>

        <audio ref={audioRef} src="audio/sample.mp3"></audio>
        <PlayerControllers audioRef={audioRef}/>
      </div>
    </div>
  );
}