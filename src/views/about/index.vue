<script setup lang="ts">
import pkg from '../../../package.json'

defineOptions({
  name: 'About',
})

const version = pkg.version
</script>

<template>
  <div>about</div>
  <div class="text-sm text-gray-500">
    Version: {{ version }}
  </div>
</template>
