'use client'

import { Button } from "@nextui-org/react";

import { PlayIcon } from "../../icons/play.icon"
import { PauseIcon } from "@/app/icons/pause.icon";
import { SkipBackIcon } from "@/app/icons/skip-back.icon";
import { SkipNextIcon } from "@/app/icons/skip-next.icon";
import { VolumeController } from "./volume-controller";
import { RefObject, useState } from "react";

import { TimelineController } from "./timeline-controller";
import { UploadIcon } from "@/app/icons/upload.icon";

export function PlayerControllers({
  audioRef, setFile
}: {
  audioRef: RefObject<HTMLAudioElement>,
  setFile: (file: File) => void
}
) {
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (!audioRef.current) return;

    setPlaying(!playing);
    playing ? audioRef.current.pause() : audioRef.current.play();
  }

  const handleUpdateFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;

    const file = e.target.files![0];
    audioRef.current.src = URL.createObjectURL(file);

    if (playing) {
      audioRef.current.play();
    }

    setFile(file);
  }

  return (
    <>
      <TimelineController audioRef={audioRef} />

      <div className="flex justify-evenly items-center mb-4 mt-2">

        <div>
          <label htmlFor="file-upload"
            className="cursor-pointer inline-flex items-center justify-center px-2 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-transparent hover:bg-slate-600 active:bg-slate-400 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition duration-150 ease-in-out">
            <UploadIcon filled /> 
          </label>
          <input id="file-upload" type="file" className="hidden" onChange={handleUpdateFile} />
        </div>

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