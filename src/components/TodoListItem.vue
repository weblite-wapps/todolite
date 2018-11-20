<template>
  <li class="todo-item">
    <div class="todo-controller">
      <!-- <button :style="{ backgroundColor: '#60C102' }"></button> -->
      <!-- <button :style="{ backgroundColor: '#FFAD00' }"></button> -->
      <!-- <button :style="{ backgroundColor: '#636363' }"></button> -->
      <!-- <button :style="{ backgroundColor: '#DA4445' }"></button> -->
      <BaseToggle
        color="#60C102"
        icon="done"
        :value="controller.done"
        @change="changeController('done', $event)"
      />
      <BaseToggle
        color="#FFAD00"
        icon="star"
        :value="controller.star"
        @change="changeController('star', $event)"
      />
      <BaseToggle
        color="#636363"
        icon="edit"
        :value="controller.edit"
        @change="changeController('edit', $event)"
      />
      <BaseToggle
        color="#DA4445"
        icon="remove"
        :value="controller.remove"
        @change="changeController('remove', $event)"
      />
      <BaseControllerButton
        :value="controllerOpen"
        @change="changeControllerOpen"
      />
    </div>
    <div class="todo-content">{{ title }}</div>
  </li>
</template>

<script>
import BaseControllerButton from '../helper/component/BaseControllerButton.vue'
import BaseToggle from '../helper/component/BaseToggle.vue'

export default {
  name: 'TodoListItem',

  components: {
    BaseControllerButton,
    BaseToggle,
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

  data: () => ({
    controllerOpen: false,
    controller: {
      done: false,
      star: false,
      edit: false,
      remove: false,
    },
  }),

  methods: {
    changeControllerOpen(value) {
      this.controllerOpen = value
    },

    changeController(name, value) {
      this.controller[name] = value
    },
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
