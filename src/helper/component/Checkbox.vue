<template>
<div
  @click="click"
  :class="[value ? $style.checked : $style.checkbox, 'noselect']"
>
  <i v-show="!value">no</i>
  <transition name="fade">
    <IconButton
      icon="check"
      v-show="value"
    />
  </transition>
</div>
</template>


<script>
import IconButton from './IconButton'

export default {
  name: 'Checkbox',

  components: { IconButton },

  props: ['default'],

  data: () => ({ value: null }),

  created() { this.value = this.default },

  methods: {
    click() {
      this.value = !this.value
      this.$emit('click', this.value)
    },
  },
}
</script>


<style module>
.checkbox {
  width: 24px;
  height: 24px;
  cursor: pointer;
  font-family: serif;
  font-size: 24px;
  font-weight: bold;
  border: 1px #9CCC65 solid;
  border-radius: 100px;
  padding: 3px;
  margin-right: 10px;
  color: white;
}

.checked {
  composes: checkbox;
  background: #9CCC65;
}
</style>
