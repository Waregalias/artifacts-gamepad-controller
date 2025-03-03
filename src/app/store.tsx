import { create } from 'zustand'

const useStore = create((set) => ({
  actionsPad: [],
  updateActions: (actions: []) => set({ actionsPad: actions }),
}))
