<template>
  <div class="root">
    <i class="material-icons">check</i>
    {{ name }}
  </div>
</template>


<script>
export default {
  name: 'app',

  data: () => ({
    name: 'Ali',
    todos: [
      { id: '1', title: 'do whatever you want to do', functor: '' },
      { id: '2', title: 'do second thing in a row', functor: '' },
    ],
    editId: '',
  }),
}
</script>


<style>
</style>
