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
      <TheAppBarInput
        @submit="onSubmit"
        v-show="mode === 'add'"
      />
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
        if (this.mode === 'normal') this.mode = 'progress'
        else if (this.mode === 'progress') this.mode = 'normal'
      },

      onSubmit(value) {
        this.mode = 'normal'
        console.log(value)
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
