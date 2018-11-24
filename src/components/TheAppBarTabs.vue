<template>
  <BaseTab class="tab" :items="tabItems" :value="page" @change="changePage" />
</template>

<script>
// modules
import { mapState, mapMutations } from 'vuex'
// components
import BaseTab from '../helper/component/BaseTab'

export default {
  name: 'TheAppBarTabs',

  components: {
    BaseTab,
  },

  data: () => ({
    tabItems: [
      { value: 'VIT', color: '#FFAD00', icon: 'star' },
      { value: 'LIST', color: '#DA4445', icon: 'list' },
      { value: 'DONE', color: '#60C102', icon: 'done' },
    ],
  }),

  computed: mapState(['page']),

  methods: mapMutations(['changePage']),
}
</script>

<style module>
.tab {
  border-radius: 10px 10px 0 0;
}
</style>
