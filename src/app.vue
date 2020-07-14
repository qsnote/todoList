<template>
  <div id="app" class="container">
    <div class="cover"></div>
    <m-header></m-header>
  </div>
</template>

<script>
import MHeader from './todo/header.vue'
export default {
  data() {
    return {
      text: '1343883'
    }
  },
  components: {
    MHeader
  }
}
</script>

<style lang="scss" scoped>
  .container{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
  .cover {
    background: rgba(230, 187, 230, 0.7); 
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
</style>