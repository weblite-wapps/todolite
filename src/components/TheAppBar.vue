<template>
  <div>
    <div class="header">
      <div
        class="main"
        @mouseover="toggleMode('over')"
        @mouseout="toggleMode('out')"
      >
        <!-- Title -->
        <div v-if="mode === 'normal'" key="title" class="title">
          {{ title }}
        </div>

        <!-- Progress -->
        <TheAppBarProgress
          v-else-if="mode === 'progress'"
          key="progress"
          :percentage="60"
        />

        <!-- Input -->
        <TheAppBarInput v-else-if="mode === 'add'" @submit="submit" />
      </div>

      <BaseRotativeButton
        :mode="baseRotativeButtonMode"
        @click="changeMode(mode === 'add' ? 'normal' : 'add')"
      />
    </div>

    <TheAppBarTabs />
  </div>
</template>

<script>
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
      this.$store.dispatch('addTodo', value)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../helper/style/_variable.scss';
@import '../helper/style/_mixin.scss';

.header {
  width: 100%;
  height: 60px;
  display: flex;
  background-color: $color-secondary;
}

.main {
  @include flex-center();

  width: calc(100% - 60px);
}

.title {
  font-size: $font-size-large;
  font-weight: $font-weight-heavy;
  color: $font-color-light-primary;
}
</style>