<template>
  <textarea
    rows="1"
    :value="content"
    @input="textareaResize"
    ref="textarea"
    dir="auto"
    :disabled="!editable"
    @keydown.enter.exact.prevent="submit"
  />
</template>

<script>
export default {
  props: {
    editable: { type: Boolean, default: false },
    content: { type: String, default: '' },
  },

  mounted: function() {
    this.$refs.textarea.style.minHeight = this.$refs.textarea.scrollHeight + 'px';
  },

  updated() {
    this.$el.focus()
    this.$store.commit("changeEditableText", this.content)
  },

  methods: {
    textareaResize(event) {
      this.$refs.textarea.style.minHeight = this.$refs.textarea.scrollHeight + 'px';
      this.$store.commit("changeEditableText", event.target.value)
    },

    submit() {
      this.$emit('submit')
    },
  },
}
</script>

<style lang="scss" scoped>
textarea {
  resize: none;
  height: auto;
  overflow: hidden;
}
</style>
