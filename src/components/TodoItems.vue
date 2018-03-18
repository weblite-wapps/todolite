<template>
  <ul :class="$style['todo-items']">
    <!-- <transition-group name="todo-item-transition" tag="p">
      <li
        is="todo-item"
        v-for="todo in todos"
        :key="todo.id"
        :onDone="onDone"
        :onDelete="onDelete"
        :onEdit="onEdit"
        v-bind="todo"
      />
    </transition-group> -->
  </ul>
</template>


<script>
export default {
  name: 'TodoItems',

  props: ['todos', 'onDone', 'onDelete', 'onEdit'],
}
</script>


<style module>
  .todo-items {
    height: inherit;
    padding: 10px;
    overflow-y: scroll;
  }
</style>
