<template>
  <p :contenteditable="editable" @keydown.enter.prevent="submit" />
</template>

<script>
export default {
  props: {
    editable: { type: Boolean, default: false },
    content: { type: String, default: '' },
  },

  mounted: function() {
    this.$el.innerText = this.content
  },

  watch: {
    content: function() {
      this.$el.innerText = this.content
    },
  },

  updated() {
    this.$el.focus()

    if (
      typeof window.getSelection != 'undefined' &&
      typeof document.createRange != 'undefined'
    ) {
      const range = document.createRange()
      range.selectNodeContents(this.$el)
      range.collapse(false)
      const sel = window.getSelection()
      sel.removeAllRanges()
      sel.addRange(range)
    } else if (typeof document.body.createTextRange != 'undefined') {
      const textRange = document.body.createTextRange()
      textRange.moveToElementText(this.$el)
      textRange.collapse(false)
      textRange.select()
    }
  },

  methods: {
    submit({ target: { innerText } }) {
      this.$emit('submit', innerText)
    },
  },
}
</script>
