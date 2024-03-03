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
import { getTimeFormatPlayer } from "@/app/lib/utils";


export function PlayerControllers(
  { audioRef }: { audioRef: RefObject<HTMLAudioElement> }
) {
  const [playing, setPlaying] = useState(false);
  const [currenTime, setCurrentTime] = useState('00:00');
  const [duration, setDuration] = useState('00:00');

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.ontimeupdate = handleTimeline;
    setDuration(getTimeFormatPlayer(audioRef.current.duration));
  }, [audioRef]);

  const handlePlay = () => {
    if (!audioRef.current) return;

    setPlaying(!playing);
    playing ? audioRef.current.pause() : audioRef.current.play();
  }

  const handleTimeline = (e: any) => {
    if (!audioRef.current) return;

    const audioTarget = e.target as HTMLAudioElement;
    setCurrentTime(getTimeFormatPlayer(audioTarget.currentTime));
  }

  return (
    <>
      <div className="flex gap-x-4">
        <span>{currenTime}</span>
        <Slider aria-label="playtime slider" />
        <span>{duration}</span>
      </div>

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

        <VolumeController />
      </div>

    </>
  );
}