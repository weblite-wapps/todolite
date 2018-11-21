<template>
  <BaseEditable class="todo-content" :content="content" />
</template>

<script>
// components
import BaseEditable from '../helper/component/BaseEditable.vue'

export default {
  name: 'TodoListItemContent',

  components: {
    BaseEditable,
  },

  props: {
    content: { type: String, required: true },
  },
}
</script>

<style scoped>
.todo-content {
  width: 100%;
  margin-top: 2px;
  font-size: 16px;
  font-weight: 400;
  padding: 10px;
  outline: none;
  border: none;
  resize: none;
  box-sizing: border-box;
  background-color: #e6e6e6;
  border-bottom-right-radius: 20px;
  word-wrap: break-word;
}
</style>
