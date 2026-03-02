import { create } from 'zustand'

export const useUiStore = create((set, get) => ({
  mobileNavOpen: false,
  setMobileNavOpen: (v) => set({ mobileNavOpen: v }),
  toggleMobileNav: () => set({ mobileNavOpen: !get().mobileNavOpen }),
  closeMobileNav: () => set({ mobileNavOpen: false }),
}))
