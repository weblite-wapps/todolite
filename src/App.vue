<template>
<div :class="$style.root">
  <Header
    :title="title"
  />
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

  <Setting />
</div>
</template>


<script>
// components
import Header from './components/Header'
import TodoInput from './components/TodoInput'
import TodoItems from './components/TodoItems'
import Setting from './components/Setting'
// helper
import { addTodo, editTitle, addFunctor, deleteTodo } from './helper/function/changeTodo.js'
// R
const { W, R } = window


export default {
  name: 'app',

  components: {
    Header,
    TodoInput,
    TodoItems,
    Setting,
  },

  data: () => ({
    title: 'weblite',
    name: 'Ali',
    todos: [],
    editId: '',
  }),

  mounted() {
    W.share.subscribe((todos) => { this.todos = R.clone(todos) })
  },

  computed: {
    edit() { return R.find(R.propEq('id', this.editId), this.todos) },
  },

  methods: {
    onAdd(title) { addTodo(title, this.todos) },

    onEdit(obj) {
      editTitle(obj.id, obj.title, this.todos)
      this.editId = ''
    },

    onDone(id, checked) { addFunctor(id, checked ? this.name : '', this.todos) },

    onDelete(id) { deleteTodo(id, this.todos) },

    onClickEdit(id) { this.editId = id },
  },
}
</script>


<style module>
  .root {
    position: relative;
    width: 350px;
    height: 99%;
    display: flex;
    flex-direction: column;
    border: 1px #E0E0E0 solid;
    border-radius: 5px;
    overflow: hidden;
  }
</style>
