<template>
  <div :class="$style.root">
    <TheAppBar />
    <TheTodoList />
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

  created() {
    W && webliteHandler(this)
  },
}
</script>

<style module>
.root {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
