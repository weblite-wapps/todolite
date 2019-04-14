<template>
  <textarea
    class="input"
    v-model="value"
    type="text"
    placeholder="TYPE HERE ..."
    dir="auto"
    @keydown.enter.exact="submit"
  ></textarea>
</template>

<script>
export default {
  name: 'TheAppBarInput',

  data: () => ({
    value: '',
  }),

  methods: {
    submit(event) {
      if (!this.value) return
      event.preventDefault()
      this.$emit('submit', this.value)
      this.value = ''
    },
  },

  mounted() {
    this.$el.focus()
  },
}
</script>

<style lang="scss" scoped>
@import '../helper/style/_variable.scss';
@import '../helper/style/_mixin.scss';

.input {
  @include reset();
  width: 100%;
  padding: 15px 20px 0px 20px;
  font-size: $font-size-small; 
  color: $font-color-light-primary;
}

.input::placeholder {
  opacity: 0.4;
  color: $font-color-light-primary;
}

textarea {
  resize: none;
}
</style>
