<template>
  <div v-if="isExternalIcon" :style="styleExternalIcon" class="svg-external-icon svg-icon" v-bind="$attrs" />
  <svg v-else :class="svgClass" aria-hidden="true" v-bind="$attrs">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
import { isExternal } from '@/utils/validate'
import { computed } from 'vue'

export default {
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const { iconClass, className } = props
    const isExternalIcon = computed(() => isExternal(iconClass))
    const iconName = computed(() => `#icon-${iconClass}`)
    const svgClass = computed(() => {
      if (className) {
        return 'svg-icon ' + className
      } else {
        return 'svg-icon'
      }
    })
    const styleExternalIcon = computed(() => {
      return {
        mask: `url(${iconClass}) no-repeat 50% 50%`,
        '-webkit-mask': `url(${iconClass}) no-repeat 50% 50%`
      }
    })

    return {
      isExternalIcon,
      iconName,
      svgClass,
      styleExternalIcon
    }
  }
}
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover!important;
  display: inline-block;
}
</style>
