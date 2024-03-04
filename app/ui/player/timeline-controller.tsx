'use client'

import { Slider } from "@nextui-org/react";

import { RefObject, useEffect, useRef, useState } from "react";
import { getTimeFormatPlayer } from "@/app/lib/utils";


export function TimelineController({
  audioRef,
}: {
  audioRef: RefObject<HTMLAudioElement>
}) {

  const [currenTime, setCurrentTime] = useState('00:00');
  const [duration, setDuration] = useState('00:00');
  const useDuration = useRef(0);
  const useCurrentTime = useRef(0);

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.ontimeupdate = handleTimeUpdate;
    setDuration(getTimeFormatPlayer(audioRef.current.duration));
    useDuration.current = audioRef.current.duration;
  }, [audioRef])

  const handleTimeUpdate = (e: any) => {
    const audioTarget = e.target as HTMLAudioElement;

    // TODO: only change when slider is not being used
    console.log("playing")
    setCurrentTime(getTimeFormatPlayer(audioTarget.currentTime));
    useCurrentTime.current = audioTarget.currentTime;
  }

  const handleTimelineChange = (value: any) => {
    audioRef.current!.currentTime = value;
    setCurrentTime(getTimeFormatPlayer(value));
  }

  return (
    <div className="flex gap-x-4">
      <span>{currenTime}</span>
      <Slider aria-label="playtime slider"
        minValue={0}
        maxValue={useDuration.current}
        value={useCurrentTime.current}
        step={0.001}
        showTooltip={true}
        onChangeEnd={handleTimelineChange}
      />
      <span>{duration}</span>
    </div >
  );
}