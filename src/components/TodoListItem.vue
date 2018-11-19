<template>
  <li class="todo-item">
    <div class="todo-controller">
      <!-- <button :style="{ backgroundColor: '#60C102' }"></button> -->
      <!-- <button :style="{ backgroundColor: '#FFAD00' }"></button> -->
      <!-- <button :style="{ backgroundColor: '#636363' }"></button> -->
      <!-- <button :style="{ backgroundColor: '#DA4445' }"></button> -->
      <button></button> <button></button> <button></button> <button></button>
      <BaseControllerButton />
    </div>
    <div class="todo-content">{{ title }}</div>
  </li>
</template>

<script>
import BaseControllerButton from '../helper/component/BaseControllerButton.vue'

export default {
  name: 'TodoListItem',

  components: {
    BaseControllerButton,
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
}
</script>

<style scoped>
.todo-item {
  margin-top: 15px;
}

.todo-controller {
  height: 40px;
  background-color: #e6e6e6;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  display: flex;
  overflow: hidden;
}

button {
  height: 100%;
  width: 100%;
  background-color: #e6e6e6;
  border: none;
  outline: none;
}

.todo-content {
  margin-top: 2px;
  padding: 15px;
  font-weight: 500;
  background-color: #e6e6e6;
  border-bottom-right-radius: 20px;
}
</style>
