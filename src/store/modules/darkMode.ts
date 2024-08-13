import { defineStore } from "pinia";
import { store } from "@/store";
import { nextTick } from "vue";

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
    toggleDarkMode(event?: TouchEvent | MouseEvent) {
      const isAppearanceTransition =
        "startViewTransition" in document &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const toggle = () => {
        this.darkMode = !this.darkMode;
        if (this.darkMode) {
          document.documentElement.classList.add("dark");
          window.localStorage.setItem(darkModeKey, "true");
        } else {
          document.documentElement.classList.remove("dark");
          window.localStorage.setItem(darkModeKey, "false");
        }
      };

      if (!isAppearanceTransition) {
        toggle();
        return;
      }

      let x: number, y: number;
      if (event instanceof TouchEvent) {
        x = event.touches[0].clientX;
        y = event.touches[0].clientY;
      } else if (event instanceof MouseEvent) {
        x = event.clientX;
        y = event.clientY;
      } else {
        // 如果没有事件对象，使用屏幕右上角作为默认位置
        x = window.innerWidth;
        y = 0;
      }
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const transition = (document as any).startViewTransition(async () => {
        toggle();
        await nextTick();
      });

      transition.ready.then(() => {
        const clipPath = [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`
        ];
        document.documentElement.animate(
          {
            clipPath: this.darkMode ? [...clipPath].reverse() : clipPath
          },
          {
            duration: 400,
            easing: "ease-out",
            pseudoElement: this.darkMode
              ? "::view-transition-old(root)"
              : "::view-transition-new(root)"
          }
        );
      });
    }
  }
});

export function useDarkModeStoreHook() {
  return useDarkModeStore(store);
}
