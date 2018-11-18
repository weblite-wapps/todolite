<template>
  <input
    class="input"
    v-model="value"
    type="text"
    placeholder="TYPE HERE ..."
    @keyup.enter="submit"
  />
</template>


<script>
  export default {
    name: 'TheAppBarInput',

    data: () => ({
      value: '',
    }),

    methods: {
      submit() {
        this.$emit('submit', this.value)
        this.value = ''
      }
    },
  }
</script>


<style scoped>
  .input {
    color: #ffffff;
    padding: 20px;
    font-size: 18px;
    width: 100%;
    background: none;
    border: none;
    outline: none;
  }

  .input::placeholder {
    color: #1DB3FF;
  }
</style>
