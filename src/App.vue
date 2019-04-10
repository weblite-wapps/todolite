<template>
  <div>
    <TheAppBar class="app-bar" />
    <TheTodoList /> 
  </div>
</template>

<script>
// modules
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
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
    VuePerfectScrollbar,
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
  width: 100%;
  height: 105px;
  position: fixed;
  overflow: hidden;
}
</style>
