<template>
<i
  @click="click"
  class="material-icons"
>
  {{ icon }}
</i>
</template>


<script>
export default {
  name: 'IconButton',

  props: ['icon'],

  methods: {
    click: function() { this.$emit('click') },
  },
}
</script>
