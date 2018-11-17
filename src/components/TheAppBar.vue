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
      <div
        type="text"
        v-else-if="mode === 'progress'"
      >
        98%
      </div>

      <!-- Input -->
      <input
        type="text"
        v-else
      />
    </div>

    <button
      class="button"
      @click="changeMode(mode === 'add' ? 'normal' : 'add')"
    >
      {{ mode === 'add' ? 'X' : '+' }}
    </button>
  </div>
</template>


<script>
  export default {
    name: 'TheAppBar',

    props:{
      title: { type: String, required: true },
    },

    data() {
      return {
        mode: 'normal', // normal | progress | add
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
  }

  .title {
    font-size: 22px;
    color: white;
  }

  .button {
    width: 50px;
    height: 50px;
    border: none;
    background-color: #616161;
    outline: none;
  }
</style>
