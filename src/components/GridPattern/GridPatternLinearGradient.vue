<script setup lang="ts">
import { cn } from "@/utils/class-names";
import GridPattern from "./index.vue";

defineOptions({
  name: "GridPatternLinearGradient"
});
</script>

<template>
  <div
    class="absolute flex size-full items-center justify-center overflow-hidden bg-background p-20 md:shadow-xl"
  >
    <GridPattern
      :width="18"
      :height="18"
      :x="-1"
      :y="-1"
      :class="
        cn(
          '[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]'
        )
      "
    />
  </div>
</template>
