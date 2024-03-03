'use client'

import { useState } from "react";

import { Button } from "@nextui-org/react";
import { Slider } from "@nextui-org/react";
import { VolumeIcon } from "@/app/icons/volume.icon";
import { MuteIcon } from "@/app/icons/mute.icon";

export function VolumeController() {
  const [volume, setVolume] = useState(50);

  const handleVolumeChange = (e: any) => {
    const [currentVolume] = e;
    setVolume(currentVolume);
  }

  return (
    <div className="flex items-center  gap-x-4 w-48">
      <Button isIconOnly aria-label="volume-down">
        {volume > 0
          ? <VolumeIcon filled />
          : <MuteIcon filled />}
      </Button>

      <Slider size="sm" onChange={handleVolumeChange} aria-label="volume slider"/>
    </div>
  );
}