<template>
  <div>
    <h3>
      <button @click="count++">+</button>
      Adjust the data
      <button @click="count--">-</button>
    </h3>
    <h2>This is the app data: <span class="num">{{ count }}</span></h2>
    <a2_children :text="count"></a2_children>
    <p class="test1" :class="{test: cur ? 'cur':''}">test1</p>
    <p class="test2">test2</p>
  </div>
</template>

<script>
  import a2_children from './a2_children'

  export default{
    data(){
      return{
        msg: 'Hello,Mr.Magoo',
        count: 0,
        cur: false,
      }
    },
    components: {
      a2_children,
    }
  }
</script>

<style>
.test{
  color: red;
}
</style>
