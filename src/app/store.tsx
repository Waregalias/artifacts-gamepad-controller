import {create} from 'zustand'
import {persist} from "zustand/middleware";
import {ArtifactCharacter} from "@/app/controller/models/artifact.model";

export const useStore: any = create(
  persist(
    (set) => ({
      apiKey: '',
      character: '',
      updateArtifactCharacter: (apiKey: string, character: ArtifactCharacter) => set({apiKey, character}),
    }),
    {
      name: 'store',
      partialize: (state: {
        apiKey: string,
        character: ArtifactCharacter,
      }) => ({apiKey: state.apiKey, character: state.character}),
    }
  )
);
