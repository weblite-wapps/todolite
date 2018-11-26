<template>
  <div>
    <TheAppBar class="app-bar" />
    <TheTodoList class="todo-list" />
  </div>
</template>

<script>
// modules
// components
import TheAppBar from './components/TheAppBar'
import TheTodoList from './components/TheTodoList'
// helper
import webliteHandler from './helper/function/weblite.api'
// store
import store from './store'
// R && W
const { W } = window

export default {
  name: 'App',

  store,

  components: {
    TheAppBar,
    TheTodoList,
  },

  computed: {
    isCustomize() {
      return this.$store.state.mode === 'customize'
    },
  },

  created() {
    W && webliteHandler(this)
  },
}
</script>

<style scoped>
.app-bar {
  height: 105px;
  width: 100%;
  position: fixed;
  overflow: hidden;
}

.todo-list {
  height: calc(100% - 105px);
  top: 105px;
  width: 100%;
  position: fixed;
  overflow: scroll;
}
</style>
