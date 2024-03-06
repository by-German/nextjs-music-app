'use client'

import { Slider } from "@nextui-org/react";

import { RefObject, useEffect, useRef, useState } from "react";
import { getTimeFormatPlayer } from "@/app/lib/utils";


export function TimelineController({
  audioRef,
}: {
  audioRef: RefObject<HTMLAudioElement>
}) {

  const [currentTime, setCurrentTime] = useState('00:00');
  const [duration, setDuration] = useState('00:00');
  const useDuration = useRef(0);

  const [currentTimeline, setCurrentTimeline] = useState(0);

  const isTimelineBeingUsed = useRef(false);
  const timeLine = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.ontimeupdate = handleTimeUpdate;

    audioRef.current.onloadeddata = () => {
      setDuration(getTimeFormatPlayer(audioRef.current!.duration));
      useDuration.current = audioRef.current!.duration;
    }

  }, [audioRef])

  const handleTimeUpdate = (e: any) => {
    const audioTarget = e.target as HTMLAudioElement;

    // only change when slider is not being used
    if (isTimelineBeingUsed.current) return;

    setCurrentTime(getTimeFormatPlayer(audioTarget.currentTime));
    setCurrentTimeline(audioTarget.currentTime);
  }

  const handleTimelineChange = (value: any) => {
    audioRef.current!.currentTime = value;
    setCurrentTime(getTimeFormatPlayer(value));

    isTimelineBeingUsed.current = false;
  }

  const handleSlider = (value: any) => {
    isTimelineBeingUsed.current = true;
    setCurrentTimeline(value);
  }

  return (
    <div className="flex gap-x-4">
      <span>{currentTime}</span>
      <Slider aria-label="playtime slider"
        ref={timeLine}
        minValue={0}
        maxValue={useDuration.current}
        value={currentTimeline}
        step={0.001}
        showTooltip={true}
        onChangeEnd={handleTimelineChange}
        onChange={handleSlider}
      />
      <span>{duration}</span>
    </div >
  );
}