<template>
<div
  @click="click"
  :class="[value ? $style.checked : $style.checkbox, 'noselect']"
>
  <i v-show="!value">no</i>
  <transition name="fade">
    <i v-show="value">check</i>
  </transition>
</div>
</template>


<script>
export default {
  name: 'Checkbox',

  props: ['value'],

  methods: {
    click() { this.$emit('click', !this.value) },
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
