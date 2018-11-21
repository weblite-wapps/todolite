<template>
  <div :contenteditable="editable" @keydown.enter.prevent="submit" />
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

  methods: {
    submit({ target: { innerText } }) {
      this.$emit('submit', innerText)
    },
  },
}
</script>
