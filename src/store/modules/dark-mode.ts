import { isDarkMode, updateDarkMode } from '@/utils/dark-mode'

export const useDarkModeStore = defineStore('dark-mode', () => {
  const darkMode = ref(isDarkMode())

  const isDark = computed(() => darkMode.value)
  const theme = computed(() => darkMode.value ? 'dark' : 'light')

  function toggleDarkMode(event?: TouchEvent | MouseEvent) {
    const isAppearanceTransition
      = 'startViewTransition' in document
        && !window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const toggle = () => {
      darkMode.value = !darkMode.value
      updateDarkMode(darkMode.value)
    }

    if (!isAppearanceTransition) {
      toggle()
      return
    }

    let x: number, y: number
    if (event instanceof TouchEvent) {
      x = event.touches[0].clientX
      y = event.touches[0].clientY
    }
    else if (event instanceof MouseEvent) {
      x = event.clientX
      y = event.clientY
    }
    else {
      // 如果没有事件对象，使用屏幕右上角作为默认位置
      x = window.innerWidth
      y = 0
    }
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    )

    const transition = (document as any).startViewTransition(async () => {
      toggle()
      await nextTick()
    })

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ]
      document.documentElement.animate(
        {
          clipPath: darkMode.value ? [...clipPath].reverse() : clipPath,
        },
        {
          duration: 400,
          easing: 'ease-out',
          pseudoElement: darkMode.value
            ? '::view-transition-old(root)'
            : '::view-transition-new(root)',
        },
      )
    })
  }

  return {
    darkMode,
    isDark,
    theme,
    toggleDarkMode,
  }
})
