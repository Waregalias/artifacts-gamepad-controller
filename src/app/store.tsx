import {create} from 'zustand'
import {persist} from "zustand/middleware";

export const useStore: any = create(
  persist(
    (set) => ({
      apiKey: '',
      actionsPad: [],
      updateApiKey: (key: string) => set({apiKey: key}),
      updateActions: (actions: []) => set({actionsPad: actions}),
    }),
    {
      name: 'store',
      partialize: (state) => ({apiKey: state.apiKey}),
    }
  )
);
