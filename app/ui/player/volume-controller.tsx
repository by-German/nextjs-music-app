'use client'

import { useRef, useState, RefObject } from "react";

import { Button } from "@nextui-org/react";
import { Slider } from "@nextui-org/react";
import { VolumeIcon } from "@/app/icons/volume.icon";
import { MuteIcon } from "@/app/icons/mute.icon";

export function VolumeController(
  { audioRef }: { audioRef: RefObject<HTMLAudioElement> }
) {
  const [volume, setVolume] = useState(0.5);
  const muted = useRef(false);
  const prevVolume = useRef(volume);

  const handleVolumeChange = (volume: any) => {
    setVolume(volume);
    audioRef.current!.volume = volume;
  }

  const handleMute = () => {
    muted.current = !muted.current;
    if (muted.current) {
      prevVolume.current = volume;
    }
    setVolume(muted.current ? 0 : prevVolume.current);
    audioRef.current!.volume = muted.current ? 0 : prevVolume.current;
  }

  return (
    <div className="flex items-center  gap-x-4 w-48">
      <Button isIconOnly aria-label="volume-down" size="sm"
        onClick={handleMute}
      >
        {volume > 0
          ? <VolumeIcon filled />
          : <MuteIcon filled />}
      </Button>

      <Slider aria-label="volume slider"
        size="sm"
        minValue={0}
        maxValue={1}
        step={0.01}
        value={volume}
        onChange={handleVolumeChange}
      />
    </div>
  );
}