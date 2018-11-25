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
      if (!this.value) return

      this.$emit('submit', this.value)
      this.value = ''
    },
  },

  mounted() {
    this.$el.focus()
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
  color: #1db3ff;
}
</style>
