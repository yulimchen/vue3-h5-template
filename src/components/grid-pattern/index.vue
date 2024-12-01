<script setup lang="ts">
import { useId } from "@/composables/useId";

defineOptions({
  name: "GridPattern"
});

interface GridPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  squares?: Array<[x: number, y: number]> | null;
  strokeDasharray?: string;
}
const props = withDefaults(defineProps<GridPatternProps>(), {
  width: 40,
  height: 40,
  x: -1,
  y: -1,
  squares: null,
  strokeDasharray: "0"
});

const id = `pattern-${useId()}`;
</script>

<template>
  <svg
    aria-hidden="true"
    class="pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30"
    v-bind="$attrs"
  >
    <defs>
      <pattern
        :id="id"
        :width="props.width"
        :height="props.height"
        patternUnits="userSpaceOnUse"
        :x="props.x"
        :y="props.y"
      >
        <path
          :d="`M.5 ${props.height}V.5H${props.width}`"
          fill="none"
          :stroke-dasharray="props.strokeDasharray"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" :stroke-width="0" :fill="`url(#${id})`" />
    <svg
      v-if="props.squares"
      :x="props.x"
      :y="props.y"
      class="overflow-visible"
    >
      <rect
        v-for="[squareX, squareY] in props.squares"
        :key="`${squareX}-${squareY}`"
        :stroke-width="0"
        :width="props.width - 1"
        :height="props.height - 1"
        :x="squareX * props.width + 1"
        :y="squareY * props.height + 1"
      />
    </svg>
  </svg>
</template>
