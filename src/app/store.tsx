import {create} from 'zustand'

export const useStore: any = create((set) => ({
  apiKey: undefined,
  actionsPad: [],
  updateApiKey: (key: string) => set({ apiKey: key }),
  updateActions: (actions: []) => set({ actionsPad: actions }),
}))
