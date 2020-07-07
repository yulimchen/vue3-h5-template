<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Dialogue />
    <div>
      <svg-icon icon-class="checkin" style="font-size: 50px; margin-top: 30px;" />
      <div>SVG</div>
    </div>
  </div>
</template>

<script>
import Dialogue from './components/Dialogue'

export default {
  name: 'App',
  components: {
    Dialogue
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
