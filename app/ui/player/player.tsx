'use client'

import { useState, useRef, useEffect } from "react";
import { PlayerControllers } from "./player-controllers";
// temp
import { IAudioMetadata, parseBlob } from 'music-metadata-browser';

export function Player() {
  const audioRef = useRef<HTMLAudioElement>(new Audio('audio/sample.mp3'));
  const [file, setFile] = useState<File | null>(null);
  const [metadata, setMetadada] = useState<IAudioMetadata>();

  useEffect(() => {
    if (!file) return;

    onUpdateMetadata(file);
  }, [file]);

  const onUpdateMetadata = (file: File) => {
    parseBlob(file).then((metadata: IAudioMetadata) => {
      setMetadada(metadata)
    })
  }

  return (
    <div className="flex">
      <img
        alt="song album image"
        src={metadata?.common.picture ?
          `data:${metadata.common.picture[0].format};base64,${metadata.common.picture[0].data.toString('base64')}`
          : 'images/default-album.png'
        }
        width={300}
        height={300}
      />

      <div className="flex flex-col w-full pl-4">

        <div className="grow flex flex-col justify-end mb-4 border-2 border-red-600">
          <h2 className="text-2xl">{metadata?.common.title ?? 'Title'}</h2>
          <h3 className="text-lg">{metadata?.common.artist ?? 'Artist'}</h3>
          <h3 className="text-lg">{metadata?.common.album ?? 'Album'}</h3>
        </div>

        <PlayerControllers audioRef={audioRef} setFile={setFile} />
      </div>
    </div>
  );
}