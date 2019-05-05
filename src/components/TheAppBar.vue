<template>
  <div class="app-bar">
    <div class="header">
      <div
        class="main"
        @mouseover="toggleMode('over')"
        @mouseout="toggleMode('out')"
      >
        <!-- Title -->
        <div key="title" class="title">
          {{ mode === 'normal' ? title : null }}
          {{ mode === 'add' ? 'ADD TODO' : null }}
        </div>

        <!-- Progress -->
        <TheAppBarProgress
          v-if="mode === 'progress'"
          key="progress"
          :percentage="60"
        />
      </div>

      <BaseRotativeButton
        :mode="baseRotativeButtonMode"
        @click="changeMode(mode === 'add' ? 'normal' : 'add')"
      />
    </div>

    <!-- Input -->
    <slide-up-down :active="mode === 'add'" :duration="300">
      <TheAppBarInput v-if="mode === 'add'" @submit="submit" />
    </slide-up-down>

    <TheAppBarTabs /> 
  </div>
</template>

<script>

import SlideUpDown from 'vue-slide-up-down'
// components
import BaseRotativeButton from '../helper/component/BaseRotativeButton'
import TheAppBarProgress from './TheAppBarProgress'
import TheAppBarInput from './TheAppBarInput'
import TheAppBarTabs from './TheAppBarTabs'

export default {
  name: 'TheAppBar',

  components: {
    BaseRotativeButton,
    TheAppBarProgress,
    TheAppBarInput,
    TheAppBarTabs,
    'slide-up-down': SlideUpDown,
  },

  data() {
    return {
      mode: 'normal', // normal | progress | add
    }
  },

  computed: {
    title() {
      return this.$store.state.title
    },

    baseRotativeButtonMode() {
      return this.mode === 'add' ? 'close' : 'add'
    },
  },

  methods: {
    changeMode(mode) {
      this.mode = mode
    },

    toggleMode(mouse) {
      if (this.mode === 'normal' && mouse === 'over') this.mode = 'progress'
      else if (this.mode === 'progress' && mouse === 'out') this.mode = 'normal'
    },

    submit(value) {
      this.mode = "normal"
      this.$store.dispatch('addTodo', value)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../helper/style/_variable.scss';
@import '../helper/style/_mixin.scss';

.app-bar {
  width: 100%;
  position: fixed;
  overflow: hidden;
  z-index: 1;
  display: flex;
  flex-direction: column;
  background-color: white;
}

.header {
  width: 100%;
  height: 50px;
  display: flex;
  background-color: $color-secondary;
}

.main {
  @include flex-center();

  width: calc(100% - 50px);
}

.title {
  font-size: $font-size-large;
  font-weight: $font-weight-heavy;
  color: $font-color-light-primary;
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
