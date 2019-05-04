<template>
  <div>
    <TheAppBar />
    <TheTodoList />
  </div>
</template>

<script>
// components
const TheAppBar = () => import('./components/TheAppBar')
const TheTodoList = () => import('./components/TheTodoList')
// helpers
import webliteHandler from './helper/function/weblite.api'
// store
import store from './store'
// W
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