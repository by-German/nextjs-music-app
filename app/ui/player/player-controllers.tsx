'use client'

import { Button } from "@nextui-org/react";
import { Slider } from "@nextui-org/react";

import { PlayIcon } from "../../icons/play.icon"
import { PauseIcon } from "@/app/icons/pause.icon";
import { SkipBackIcon } from "@/app/icons/skip-back.icon";
import { SkipNextIcon } from "@/app/icons/skip-next.icon";
import { FavoriteIcon } from "@/app/icons/favorite.icon";
import { VolumeController } from "./volume-controller";
import { RefObject, useEffect, useState } from "react";

import { TimelineController } from "./timeline-controller";

export function PlayerControllers(
  { audioRef }: { audioRef: RefObject<HTMLAudioElement> }
) {
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (!audioRef.current) return;

    setPlaying(!playing);
    playing ? audioRef.current.pause() : audioRef.current.play();
  }

  return (
    <>
      <TimelineController audioRef={audioRef} />

      <div className="flex justify-evenly items-center mb-4 mt-2">

        <Button isIconOnly aria-label="favorite" size="sm" >
          <FavoriteIcon filled />
        </Button>

        <div className="w-96 flex justify-center items-center gap-x-4">
          <Button isIconOnly aria-label="skip-back">
            <SkipBackIcon filled />
          </Button>

          <Button isIconOnly color="primary" aria-label="play/pause" size="lg"
            onClick={handlePlay}
          >
            {playing ? <PauseIcon filled size={30} /> : <PlayIcon filled size={30} />}
          </Button>

          <Button isIconOnly aria-label="skip-next">
            <SkipNextIcon filled />
          </Button>
        </div>

        <VolumeController audioRef={audioRef} />
      </div>

    </>
  );
}