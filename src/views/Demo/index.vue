<template>
  <div class="demo-content">
    <img alt="Vue logo" src="~@/assets/logo.png">
    <Dialogue />
    <div class="demo-content">
      <svg-icon icon-class="check-in" />
      <div>SVG</div>
    </div>
  </div>
</template>

<script>
import Dialogue from './Dialogue'

export default {
  name: 'Demo',
  components: {
    Dialogue
  }
}
</script>

<style lang="less" scoped>
.demo-content {
  text-align: center;

  .svg-icon {
    font-size: 50px;
  }
}
</style>
