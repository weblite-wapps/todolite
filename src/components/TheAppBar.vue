<template>
  <div class="root">
    <div
      class="main"
      @mouseover="toggleMode"
      @mouseout="toggleMode"
    >
      <!-- Title -->
      <div
        class="title"
        v-if="mode === 'normal'"
      >
        {{ title }}
      </div>

      <!-- Progress -->
      <TheAppBarProgress
        :percentage="60"
        v-else-if="mode === 'progress'"
      />

      <!-- Input -->
      <input
        type="text"
        v-else
      />
    </div>

    <BaseRotativeButton
      :mode="baseRotativeButtonMode"
      @click="changeMode(mode === 'add' ? 'normal' : 'add')"
    />
  </div>
</template>


<script>
  import TheAppBarProgress from './TheAppBarProgress'
  import BaseRotativeButton from '../helper/component/BaseRotativeButton'
  
  export default {
    name: 'TheAppBar',

    components: {
      BaseRotativeButton,
      TheAppBarProgress,
    },

    props:{
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
      }
    },

    methods: {
      changeMode(mode) { this.mode = mode },

      toggleMode() {
        if (this.mode === 'normal')  this.mode = 'progress'
        else if (this.mode === 'progress')  this.mode = 'normal'
      }
    }
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
