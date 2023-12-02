<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import '@/assets/style.css';
export default {
  components: {},
};
</script>

<style>
#app {
  font-family: "Inter", Helvetica, Arial, sans-serif;
  font-weight: 400;
  line-height: 1.5;
  color: #000;
  background-color: #fff;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}
</style>
