import { Button } from "@nextui-org/react";
import { PlayIcon } from "../../icons/play.icon"
import { SkipNextIcon } from "@/app/icons/skip-next.icon";
import { SkipBackIcon } from "@/app/icons/skip-back.icon";


export function Player() {
  return (
    <div className="flex">
      <img
        alt="song album image"
        src="https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2Fe303074d8d8ca88d5dfc9fb2c1368cb0.1000x1000x1.png"
        width={300}
        height={300}
      />

      <div className="flex flex-col w-full pl-4">

        <div className="grow flex flex-col justify-end border-2 border-red-600">
          <h2 className="text-2xl">Nothing's Alright is okay</h2>
          <h3 className="text-lg">witchgang</h3>
        </div>

        <div className="flex flex-col border-2 border-green-600">
          <div>
            Time line
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
        </div>
      </div>
    </div>
  );
}