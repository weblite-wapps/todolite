<template>
  <textarea
    transition="expand"
    class="input"
    rows="1"
    ref="textarea"
    v-model.trim="value"
    @input="textareaResize"
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

  mounted: function() {
    this.$refs.textarea.style.minHeight = this.$refs.textarea.scrollHeight + 'px';
    this.$el.focus()
  },

  methods: {
    textareaResize(event) {
      this.$refs.textarea.style.minHeight = this.$refs.textarea.scrollHeight + 'px';
    },

    submit(event) {
      if (!this.value) return
      event.preventDefault()
      this.$emit('submit', this.value)
      this.value = ''
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../helper/style/_variable.scss';
@import '../helper/style/_mixin.scss';

.input {
  @include reset();
  width: 100%;
  padding: 15px 20px 15px 20px;
  box-sizing: border-box;
  font-size: $font-size-small; 
  color: $font-color-dark-primary;
  background: $color-primary;
}

.input::placeholder {
  color: $font-color-light-secondary;
}

textarea {
  resize: none;
  // height: auto;
  overflow: hidden;
}

/* TRANSITION */
/* always present */
.expand-transition {
  transition: all 0.5s ease;
}
/* .expand-enter defines the starting state for entering */
/* .expand-leave defines the ending state for leaving */
.expand-enter, .expand-leave {
  height: 0;
  opacity: 0;
}
</style>
