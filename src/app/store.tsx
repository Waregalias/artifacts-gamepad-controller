import {create} from 'zustand'
import {persist} from "zustand/middleware";

export const useStore: any = create(
  persist(
    (set) => ({
      apiKey: '',
      character: '',
      actionsPad: [],
      updateApiKeyAndCharacters: (apiKey: string, character: string) => set({apiKey, character}),
      updateActions: (actions: []) => set({actionsPad: actions}),
    }),
    {
      name: 'store',
      partialize: (state: {apiKey: string, character: string, actionsPad: string[]}) => ({apiKey: state.apiKey, character: state.character}),
    }
  )
);
