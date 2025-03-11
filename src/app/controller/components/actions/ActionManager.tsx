import {move} from "@/app/controller/services/api.service";
import {
  ArtifactActionMoveX,
  ArtifactActionMoveY,
  ArtifactCharacter,
  ArtifactResponse
} from "@/app/controller/models/artifact.model";
import {toast} from "@/components/ui/use-toast";
import * as React from "react";

export function actionManager(apiKey: string, currentCharacter: ArtifactCharacter, key: string) {
  return new Promise((resolve) => {
    if (ArtifactActionMoveX[key] || ArtifactActionMoveY[key]) {
      move(
        apiKey,
        currentCharacter.name,
        currentCharacter.x,
        currentCharacter.y,
        ArtifactActionMoveX[key] ?? 0,
        ArtifactActionMoveY[key] ?? 0)
        .then((res: ArtifactResponse) => {
          resolve(res.character);
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
    }
  });
}
