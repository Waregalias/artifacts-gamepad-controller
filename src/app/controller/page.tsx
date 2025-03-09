'use client'

import Gamepad from "@/app/controller/components/gamepad/Gamepad";
import {useState} from "react";
import {useStore} from "@/app/store";
import {
  ArtifactActionMoveX,
  ArtifactActionMoveY,
  ArtifactCharacter,
  ArtifactResponse
} from "@/app/controller/models/artifact.model";
import {getCharacter, move} from "@/app/controller/services/api.service";
import {toast} from "@/components/ui/use-toast";
import {Button} from "@/components/ui/button";
import * as React from "react";

function ControllerPage() {
  const [loading, setLoading] = useState<boolean>(false)
  const apiKey = useStore((state: { apiKey: string }) => state.apiKey);
  const currentCharacter = useStore((state: { character: ArtifactCharacter }) => state.character);
  const updateArtifactCharacter = useStore((state: {
    updateArtifactCharacter: { apiKey: string, name: string }
  }) => state.updateArtifactCharacter);


  function refreshCharacter() {
    setLoading(true);
    getCharacter(
      apiKey,
      currentCharacter.name,
    ).then((character: ArtifactCharacter) => {
      updateArtifactCharacter(apiKey, character);
      setLoading(false);
    }).catch(() => {
      toast({
        title: "Error during refresh character, select character again",
      });
    });
  }

  function handleGamePadEvent(newAction: { [key: string]: boolean }) {
    if (loading) {
      return;
    }
    const actions = Object.fromEntries(Object.entries(newAction).filter(([, value]) => value));
    const newActions = Object.keys(actions);
    if (newActions.length > 0) {
      newActions.forEach((key: string) => {
        setLoading(true);
        move(
          apiKey,
          currentCharacter.name,
          currentCharacter.x,
          currentCharacter.y,
          ArtifactActionMoveX[key] ?? 0,
          ArtifactActionMoveY[key] ?? 0)
          .then((res: ArtifactResponse) => {
            updateArtifactCharacter(apiKey, res.character);
            setLoading(false);
          })
          .catch((error: Error) => {
            toast({
              title: "Error while moving",
              description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <span className="text-white">{JSON.stringify(error, null, 2)}</span>
        </pre>
              ),
            });
          });
      });
    }
  }

  return (
    <>
      <div className="w-full flex justify-end items-center">
        <span className={"mr-5"}>Your position: x-{currentCharacter.x} ; y-{currentCharacter.y}</span>
        <Button className={"mr-5"} type={"button"} onClick={refreshCharacter}>
          Refresh
        </Button>
      </div>
      <Gamepad gamePadEvent={handleGamePadEvent}></Gamepad>
    </>
  )
}

export default ControllerPage
