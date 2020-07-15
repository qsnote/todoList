<template>
  <div>
    <!-- 使用 scoped 后，父组件的样式将不会渗透到子组件中。不过一个子组件的根节点会同时受其父组件的 scoped CSS 和子组件的 scoped CSS 的影响。这样设计是为了让父组件可以从布局的角度出发，调整其子组件根元素的样式-->
    <div class="container">
      <input type="text" autofocus="autofocus" placeholder="接下来要做什么?" @keyup.enter="addTodo" class="input">
      <item :todo="todo"></item>
    </div>
  </div>
</template>

<script>
import Item from './item.vue'
export default {
  data(){
    return {
      todo: {
        id: 0,
        content: 'thissss',
        completed: false
      }
    }
  },
  methods: {
    addTodo() {

    }
  },
  components: {
    Item
  }
}
</script>

<style lang="scss" scoped>
 .container {
   width: 600px;
   margin: 0 auto;
   box-shadow: 0 0 5px #666;

   .input {
     position: relative;
     font-size: 24px;
     width: 100%;
     line-height: 1.4em;
     border: 0;
     outline: none;
     padding: 6px;
     border: 1px solid #999;
     box-shadow: inset 0 -1px 5px rgba(0,0,0,0.7);
     box-sizing: border-box;
     padding: 16px 16px 16px 60px;
   }
 }
  
</style>