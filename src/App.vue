<template>
  <div :class="$style.root">
    <TheAppBar
      :title="title"
      @submit="onAdd"
    />

    <BaseTab
      class="tab"
      :items="tabItems"
    />
    
    <TheTodoList
      :todos="todos"
      :onDone="onDone"
      :onDelete="onDelete"
      :onEdit="onClickEdit"
    />
  </div>
</template>


<script>
  // components
  import BaseTab from './helper/component/BaseTab'
  import TheAppBar from './components/TheAppBar'
  import TheTodoList from './components/TheTodoList'
  // helper
  import { addTodo, editTitle, addFunctor, deleteTodo } from './helper/function/changeTodo.js'
  import webliteHandler from './helper/function/weblite.api'
  // R && W
  const { W, R } = window

  export default {
    name: 'App',

    components: {
      BaseTab,
      TheAppBar,
      TheTodoList,
    },

    data: () => ({
      title: 'TO DO LITE',
      tabItems: [
        { content: 'VIT', color: '#FFAD00', icon: 'star' },
        { content: 'LIST', color: '#DA4445', icon: 'list' },
        { content: 'DONE', color: '#60C102', icon: 'done' },
      ],
      name: 'Ali',
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

  .tab {
    border-radius: 10px 10px 0 0;
  }
</style>
