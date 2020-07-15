<template>
  <div id="app" class="container">
    <div class="cover"></div>
    <m-header></m-header>
    <todo></todo>
    <m-footer></m-footer>
  </div>
</template>

<script>
import MHeader from './todo/header.vue'
import MFooter from './todo/footer.jsx'
import Todo from './todo/todo.vue'
export default {
  data() {
    return {
      text: '1343883'
    }
  },
  components: {
    MHeader,
    MFooter,
    Todo
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
    background: rgba(#000, 0.5); 
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
  }
</style>