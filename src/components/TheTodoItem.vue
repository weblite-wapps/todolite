<template>
  <li class="todo-item">
    {{ title }}
  </li>
</template>


<script>
  export default {
    name: 'TodoItem',

    components: {},

    data(){
      return {
        expanded: false,
        priorityColors: [
        "#e2e2e2",
        "#588c7e",
        "#f2e394",
        "#d96459"
        ],
      }
    },

    props: {
      title: String,
      functor: String,
      creator: String,
      id: Number,
      itemIndex: Number,
      onDone: Function,
      onDelete: Function,
      onEdit: Function,
    },

    methods: {},

    computed: {}
  }
</script>


<style scoped>
  .todo-item {
    padding: 10px;
    border: 2px solid;
    border-color: #E0E0E0;
    margin-bottom: 10px;
    border-radius: 9px;
    box-shadow: 0px 0px 10px -1px rgba(80, 80, 80, 0.27);
  }
</style>
