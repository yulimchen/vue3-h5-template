import { useDarkModeStoreHook } from "@/store/modules/darkMode";
import { storeToRefs } from "pinia";

export function useDarkMode() {
  return storeToRefs(useDarkModeStoreHook()).darkMode;
}

export function useToggleDarkMode(event?: TouchEvent | MouseEvent) {
  useDarkModeStoreHook().toggleDarkMode(event);
}
