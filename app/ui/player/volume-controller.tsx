'use client'

import { useRef, useState } from "react";

import { Button } from "@nextui-org/react";
import { Slider } from "@nextui-org/react";
import { VolumeIcon } from "@/app/icons/volume.icon";
import { MuteIcon } from "@/app/icons/mute.icon";

export function VolumeController() {
  const [volume, setVolume] = useState(50);
  const muted = useRef(false);
  const prevVolume = useRef(volume);

  const handleVolumeChange = (volume: any) => {
    setVolume(volume);
  }

  const handleMute = () => {
    muted.current = !muted.current;
    if (muted.current) {
      prevVolume.current = volume;
    }
    setVolume(muted.current ? 0 : prevVolume.current);
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

      <Slider size="sm" value={volume} onChange={handleVolumeChange} aria-label="volume slider"/>
    </div>
  );
}