import {create} from 'zustand'
import {persist} from "zustand/middleware";

export const useStore: any = create(
  persist(
    (set) => ({
      apiKey: '',
      character: '',
      skin: '',
      actionsPad: [],
      updateApiKeyAndCharacters: (apiKey: string, character: string, skin: string) => set({apiKey, character, skin}),
      updateActions: (actions: []) => set({actionsPad: actions}),
    }),
    {
      name: 'store',
      partialize: (state: {
        apiKey: string,
        character: string,
        skin: string,
        actionsPad: string[]
      }) => ({apiKey: state.apiKey, character: state.character, skin: state.skin, actionsPad: state.actionsPad}),
    }
  )
);
