<template>
  <div id="app">
    <img src="./assets/logo.png">
    <TodoInput msg="1000-0-0-"/>
  </div>
</template>


<script>
import TodoInput from './components/TodoInput.vue'

export default {
  name: 'app',
  components: {
    TodoInput,
  }
}
</script>


<style>
</style>
