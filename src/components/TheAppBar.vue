<template>
  <div class="root">
    <div
      class="main"
      @mouseover="toggleMode('over')"
      @mouseout="toggleMode('out')"
    >
      <!-- Title -->
      <div v-if="mode === 'normal'" key="title" class="title">{{ title }}</div>

      <!-- Progress -->
      <TheAppBarProgress
        v-else-if="mode === 'progress'"
        key="progress"
        :percentage="60"
      />

      <!-- Input -->
      <TheAppBarInput v-show="mode === 'add'" @submit="submit" />
    </div>

    <BaseRotativeButton
      :mode="baseRotativeButtonMode"
      @click="changeMode(mode === 'add' ? 'normal' : 'add')"
    />
  </div>
</template>

<script>
import BaseRotativeButton from '../helper/component/BaseRotativeButton'
import TheAppBarProgress from './TheAppBarProgress'
import TheAppBarInput from './TheAppBarInput'

export default {
  name: 'TheAppBar',

  components: {
    BaseRotativeButton,
    TheAppBarProgress,
    TheAppBarInput,
  },

  props: {
    title: { type: String, required: true },
  },

  data() {
    return {
      mode: 'normal', // normal | progress | add
    }
  },

  computed: {
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
      this.mode = 'normal'
      this.$emit('submit', value)
    },
  },
}
</script>

<style scoped>
.root {
  width: 100%;
  height: 50px;
  display: flex;
  background-color: #0096e3;
}

.main {
  width: calc(100% - 50px);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: 22px;
  color: #ffffff;
}
</style>
