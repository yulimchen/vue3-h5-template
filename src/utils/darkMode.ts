const STORAGE_KEY = "__dark_mode__";

export function isDarkMode() {
  const darkMode = window.localStorage.getItem(STORAGE_KEY);
  if (darkMode) {
    return darkMode === "true";
  } else {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
}

export function updateDarkMode(darkMode: boolean) {
  document.documentElement.classList.toggle("dark", darkMode);
  window.localStorage.setItem(STORAGE_KEY, darkMode ? "true" : "false");
}

export function initializeDarkMode() {
  const darkMode = isDarkMode();
  updateDarkMode(darkMode);
}
