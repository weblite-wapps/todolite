<template>
<i
  class="material-icons"
  @click="click"
>
  {{ icon }}
</i>
</template>


<script>
  export default {
    name: 'IconButton',

    props: ['icon'],

    methods: {
      click() { this.$emit('click') },
    },
  }
</script>
