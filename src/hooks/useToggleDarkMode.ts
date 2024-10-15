import { useDarkModeStoreHook } from "@/store/modules/darkMode";
import { toRefs } from "vue";

export function useDarkMode() {
  return toRefs(useDarkModeStoreHook()).darkMode;
}

export function useToggleDarkMode(event?: TouchEvent | MouseEvent) {
  useDarkModeStoreHook().toggleDarkMode(event);
}
