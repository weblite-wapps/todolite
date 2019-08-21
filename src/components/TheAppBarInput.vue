<template>
  <textarea
    ref="textarea"
    v-model.trim="value"
    @input="textareaResize"
    class="input"
    dir="auto"
    placeholder="TYPE HERE ..."
    rows="1"
    type="text"
    @keydown.enter.exact="submit"
  />
</template>

<script>
// modules
import { mapMutations } from 'vuex'

export default {
  name: 'TheAppBarInput',

  data: () => ({
    value: '',
  }), 

  mounted() {
    this.$el.focus()
    const scrollHeight = this.$refs.textarea.scrollHeight + 'px'
    this.$refs.textarea.style.height = scrollHeight;
    this.changeScrollHeight(scrollHeight)
  },

  methods: {
    ...mapMutations(['changeScrollHeight']),

    textareaResize(event) {
      event.target.style.height = 'auto'
      const scrollHeight = event.target.scrollHeight + 'px'
      event.target.style.height = scrollHeight
      this.changeScrollHeight(scrollHeight)
    },

    submit(event) {
      if (!this.value) return
      event.preventDefault()
      this.$emit('submit', this.value)
      this.value = ''
      event.target.style.height = 'auto'
      this.changeScrollHeight('48px')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../helper/style/_variable.scss';
@import '../helper/style/_mixin.scss';

.input {
  @include reset;
  width: 100%;
  padding: 15px 20px 15px 20px;
  box-sizing: border-box;
  font-size: 16px;
  color: $font-color-dark-primary;
  background: $color-primary;
  resize: none;
  height: auto;
  overflow: hidden;
}

.input::placeholder {
  color: $font-color-light-secondary;
}
</style>