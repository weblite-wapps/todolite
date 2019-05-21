<template>
  <div>
    <TheAppBar/>
    <TheTodoList/>
    <BaseLoading v-if="isLoading"/>
  </div>
</template>

<script>
// components
import BaseLoading from './helper/component/BaseLoading'
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
    BaseLoading,
  },

  computed: {
    isCustomize() {
      return this.$store.state.mode === 'customize'
    },

    isLoading() {
      return this.$store.state.isLoading
    },
  },

  created() {
    W && webliteHandler(this)
  },
}
</script>