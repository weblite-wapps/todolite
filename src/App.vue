<template>
<div :class="$style.root">
  <TodoItems
    :todos="todos"
    :onDone="onDone"
    :onDelete="onDelete"
    :onEdit="onClickEdit"
  />
  <TodoInput
    :edit="edit"
    @add="onAdd"
    @edit="onEdit"
  />
</div>
</template>


<script>
import TodoInput from './components/TodoInput'
import TodoItems from './components/TodoItems'
import { addTodo, editTitle, addFunctor, deleteTodo } from './helper/function/changeTodo.js'
const R = window.R

export default {
  name: 'app',

  components: {
    TodoInput,
    TodoItems,
  },

  data: () => ({
    name: 'Ali',
    todos: [],
    editId: '',
  }),

  computed: {
    edit() { return R.find(R.propEq('id', this.editId), this.todos) },
  },

  methods: {
    onAdd(title) { this.todos = addTodo(title, this.todos) },

    onEdit(obj) {
      this.todos = editTitle(obj.id, obj.title, this.todos)
      this.editId = ''
    },

    onDone(id, checked) { this.todos = addFunctor(id, checked ? this.name : '', this.todos) },

    onDelete(id) { this.todos = deleteTodo(id, this.todos) },

    onClickEdit(id) { this.editId = id },
  },
}
</script>


<style module>
  .root {
    width: 350px;
    height: 90%;
    display: flex;
    flex-direction: column;
    border: 1px #E0E0E0 solid;
    border-radius: 5px;
    overflow: hidden;
  }
</style>
