<template>
  <div :class="$style.root">
    <TheAppBar :title="title" />
    <TodoItems
      :todos="todos"
      :onDone="onDone"
      :onDelete="onDelete"
      :onEdit="onClickEdit"
      :onEditPriority="onEditPriority"
    />
    <TodoInput
      :edit="edit"
      @add="onAdd"
      @edit="onEditTitle"
    />
  </div>
</template>


<script>
  // components
  import TheAppBar from './components/TheAppBar'
  import TodoInput from './components/TodoInput'
  import TodoItems from './components/TodoItems'
  // helper
  import { addTodo, editTitle, editPriority, addFunctor, deleteTodo } from './helper/function/changeTodo.js'
  import webliteHandler from './helper/function/weblite.api'
  // R && W
  const { W, R } = window

  export default {
    name: 'App',

    components: {
      TheAppBar,
      TodoInput,
      TodoItems,
    },

    data: () => ({
      title: 'TO DO LITE',
      name: '',
      todos: [],
      editId: '',
    }),

    created() {
      W && webliteHandler(this)
    },

    computed: {
      edit() { return R.find(R.propEq('id', this.editId), this.todos) },
    },

    methods: {
      onClickEdit(id) { this.editId = id },

      onAdd(title) { addTodo(title, this.name) },

      onEditTitle(obj) {
        editTitle(obj.id, obj.title)
        this.editId = ''
      },

      onEditPriority(obj) {
        editPriority(obj.id, obj.priority)
      },

      onDone(id, checked) { addFunctor(id, checked ? this.name : '') },

      onDelete(id) { deleteTodo(id) },
    },
  }
</script>


<style module>
  .root {
    position: relative;
    width: 350px;
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 1px #E0E0E0 solid;
    overflow: hidden;
  }
</style>
