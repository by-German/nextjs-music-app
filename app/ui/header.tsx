'use client'

import { Switch } from "@nextui-org/react";
import { SfxOption } from "./shared/sfx-option";

export function Header() {
  return (
    <header className="flex justify-between items-center mx-8 my-4">
      <h1>Music App</h1>

      <div className="flex gap-x-8">
        <SfxOption></SfxOption>
        <Switch
          defaultSelected
          color="default"
          size="sm"
        >
          Sound
        </Switch>
      </div>
    </header>
  );
}