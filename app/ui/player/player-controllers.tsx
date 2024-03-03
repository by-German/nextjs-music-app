import { Button } from "@nextui-org/react";
import { Slider } from "@nextui-org/react";

import { PlayIcon } from "../../icons/play.icon"
import { SkipBackIcon } from "@/app/icons/skip-back.icon";
import { SkipNextIcon } from "@/app/icons/skip-next.icon";


export function PlayerControllers() {
  return (
    <>
      <div className="flex gap-x-4">
        <Slider />
        <span>0:00</span>
      </div>

      <div className="flex justify-center items-center gap-x-3 mb-4">
        <Button isIconOnly aria-label="skip-back">
          <SkipBackIcon filled />
        </Button>

        <Button isIconOnly color="primary" aria-label="play" size="lg">
          <PlayIcon filled size={30} />
        </Button>

        <Button isIconOnly aria-label="skip-next">
          <SkipNextIcon filled />
        </Button>
      </div>
    </>
  );
}