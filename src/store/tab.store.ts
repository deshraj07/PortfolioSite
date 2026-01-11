import { create } from "zustand"

interface TabState {
  activeTab: string
  changeTab: (tab: string) => void
}

export const useTabChangeStore = create<TabState>((set) => ({
  activeTab: "#home",
  changeTab: (tab) =>
    set({
      activeTab: tab
    })
}))
