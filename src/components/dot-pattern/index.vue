<script setup lang="ts">
import { useId } from "@/composables/useId";

defineOptions({
  name: "DotPattern"
});

interface DotPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  cx?: number;
  cy?: number;
  cr?: number;
  userSpaceOnUse?: string;
}
const props = withDefaults(defineProps<DotPatternProps>(), {
  width: 16,
  height: 16,
  x: 0,
  y: 0,
  cx: 1,
  cy: 1,
  cr: 1,
  userSpaceOnUse: "userSpaceOnUse"
});
const id = `pattern-${useId()}`;
</script>

<template>
  <svg
    aria-hidden="true"
    class="pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/80"
    v-bind="$attrs"
  >
    <defs>
      <pattern
        :id="id"
        :width="props.width"
        :height="props.height"
        :patternUnits="props.userSpaceOnUse"
        :patternContentUnits="props.userSpaceOnUse"
        :x="props.x"
        :y="props.y"
      >
        <circle
          id="pattern-circle"
          :cx="props.cx"
          :cy="props.cy"
          :r="props.cr"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" strokeWidth="0" :fill="`url(#${id})`" />
  </svg>
</template>
