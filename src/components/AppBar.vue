<template>
  <div class="root">
    <!-- Title -->
    <span
      class="title"
      v-if="!searchTextboxShowCondition"
    >
      {{ title }}
    </span>

    <button class="button">
      {{ mode === 'add' ? 'X' : '+' }}
    </button>
  </div>
</template>


<script>
  export default {
    name: 'AppBar',

    props:{
      title: { type: String, required: true },
    },

    data() {
      return {
        mode: 'add', // normal | add | progress
      }
    },

    methods: {
     
    }
  }
</script>


<style scoped>
  .root {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #0096e3;
  }

  .title {
    margin-left: 20px;
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
