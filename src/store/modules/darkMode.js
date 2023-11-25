import { defineStore } from "pinia";
import { store } from "@/store";

const darkModeKey = "__dark_mode__";
const isDarkMode = () => {
  const darkMode = window.localStorage.getItem(darkModeKey);
  if (darkMode) {
    return darkMode === "true";
  } else {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
};

export const useDarkModeStore = defineStore({
  id: "dark-mode",
  state: () => ({
    darkMode: isDarkMode()
  }),
  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      if (this.darkMode) {
        document.documentElement.classList.add("dark");
        window.localStorage.setItem(darkModeKey, "true");
      } else {
        document.documentElement.classList.remove("dark");
        window.localStorage.setItem(darkModeKey, "false");
      }
    }
  }
});

export function useDarkModeStoreHook() {
  return useDarkModeStore(store);
}
