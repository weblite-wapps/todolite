<template>
  <textarea
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
  height: auto;
  overflow: hidden;
}
</style>


export default {
    methods: {
        resizeTextarea (event) {
            event.target.style.height = 'auto'
            event.target.style.height = (event.target.scrollHeight) + 'px'
        },
    },
    mounted () {
        this.$nextTick(() => {
            this.$el.setAttribute('style', 'height:' + (this.$el.scrollHeight) + 'px;overflow-y:hidden;')
        })

        this.$el.addEventListener('input', this.resizeTextarea)
    },
    beforeDestroy () {
        this.$el.removeEventListener('input', this.resizeTextarea)
    },
    render () {
        return this.$slots.default[0]
    },
}