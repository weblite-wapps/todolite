<template>
<IconButton
  :class="this.value ? $style.checked : $style['not-checked']"
  icon="check"
  @click="click"
/>
</template>


<script>
import IconButton from './IconButton'

export default {
  name: 'Checkbox',

  components: {
    IconButton,
  },

  props: ['default'],

  data: () => ({
    value: this.default,
  }),

  methods: {
    click: function() {
      this.value = !this.value
      this.$emit('click', this.value)
    },
  },
}
</script>


<style module>
.checked {
  cursor: pointer;
  font-size: 20px;
  padding: 3px;
  font-weight: bold;
  border-radius: 100px;
  background: #9CCC65;
  border: 1px #9CCC65 solid;
  margin-right: 10px;
  color: white;
}

.not-checked {
  cursor: pointer;
  font-size: 20px;
  padding: 3px;
  font-weight: bold;
  border-radius: 100px;
  border: 1px #E0E0E0 solid;
  background: white;
  margin-right: 10px;
  color: white
}
</style>
