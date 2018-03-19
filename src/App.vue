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
const R = window.R

const d = {
  name: 'Ali',
  todos: [
    { id: '1', title: 'do whatever you want to do', functor: 'ali' },
    { id: '2', title: 'do second thing in a row', functor: '' },
  ],
  editId: '',
}
window.d = d

export default {
  name: 'app',

  components: {
    TodoInput,
    TodoItems,
  },

  data: () => d,

  computed: {
    edit() { return R.find(R.propEq('id', this.editId), this.todos) },
  },

  methods: {
    onAdd(title) { this.todos.push({ id: Math.random(), title: title, functor: '' }) },

    onEdit(obj) {
      const index = R.findIndex(R.propEq('id', obj.id), this.todos)
      if(index !== undefined) {
        this.todos[index].title = obj.title
        this.editId = ''
      }
    },

    onDone(id, checked) {
      const index = R.findIndex(R.propEq('id', id), this.todos)
      if (index < 0) return
      this.todos = checked ?
        R.assocPath([index, 'functor'], this.name, this.todos) :
        R.assocPath([index, 'functor'], '', this.todos)
    },

    onDelete(id) { this.todos = R.reject(R.propEq('id', id), this.todos) },

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
