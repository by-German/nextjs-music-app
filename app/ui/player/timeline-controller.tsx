'use client'

import { Slider } from "@nextui-org/react";

import { RefObject, useEffect, useState } from "react";
import { getTimeFormatPlayer } from "@/app/lib/utils";


export function TimelineController({
  audioRef,
}: {
  audioRef: RefObject<HTMLAudioElement>
}) {

  const [currenTime, setCurrentTime] = useState('00:00');
  const [duration, setDuration] = useState('00:00');

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.ontimeupdate = handleTimeline;
    setDuration(getTimeFormatPlayer(audioRef.current.duration));
  }, [audioRef])

  const handleTimeline = (e: any) => {
    const audioTarget = e.target as HTMLAudioElement;
    setCurrentTime(getTimeFormatPlayer(audioTarget.currentTime));
  }

  return (
    <div className="flex gap-x-4">
      <span>{currenTime}</span>
      {/* // TODO: Add Slider functionality to control the audio timeline */}
      <Slider aria-label="playtime slider" />
      <span>{duration}</span>
    </div >
  );
}