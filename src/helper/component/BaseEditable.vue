<template>
  <textarea
    ref="textarea"
    :value="content"
    @input="textareaResize"
    class="textarea"
    dir="auto"
    :disabled="!editable"
    rows="1"
    @keydown.enter.exact.prevent="submit" 
  />
</template> 

<script>
// modules
import { mapMutations } from 'vuex'

export default {
  props: {
    editable: { type: Boolean, default: false },
    content: { type: String, default: '' },
  },

  mounted: function() {
    this.$refs.textarea.style.height = this.$refs.textarea.scrollHeight + 'px';
  },

  updated() {
    this.$el.focus()
    this.changeEditableText(this.content)
  },

  methods: {
    ...mapMutations(['changeEditableText']),

    textareaResize(event) {
      event.target.style.height = 'auto'
      const scrollHeight = event.target.scrollHeight + 'px'
      event.target.style.height = scrollHeight
      this.changeEditableText(event.target.value)
    },

    submit() {
      this.$emit('submit', false)
    },
  },
}
</script>

<style lang="scss" scoped>
.textarea {
  resize: none;
  height: auto;
  overflow: hidden;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
