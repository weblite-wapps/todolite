<template>
  <div>
    <TheAppBar class="app-bar" />

    <VuePerfectScrollbar class="todolist-scroll-area">
      <TheTodoList />
    </VuePerfectScrollbar>
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

.todolist-scroll-area {
  position: fixed;
  top: 105px;
  width: 100%;
  height: calc(100% - 105px);
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
