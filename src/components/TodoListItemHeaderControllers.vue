<template>
  <div class="controllers">
    <BaseToggle
      class="toggle done"
      color="#60C102"
      icon="done"
      :value="done"
      @change="changeController('done', $event)"
    />
    <BaseToggle
      class="toggle star"
      color="#FFAD00"
      icon="star"
      :value="star"
      @change="changeController('star', $event)"
    />
    <BaseToggle
      class="toggle edit"
      color="#636363"
      icon="edit"
      :value="edit"
      @change="changeController('edit', $event)"
    />
    <BaseToggle
      class="toggle remove"
      color="#DA4445"
      icon="remove"
      :value="remove"
      @change="changeController('remove', $event)"
    />
  </div>
</template>

<script>
import BaseToggle from '../helper/component/BaseToggle.vue'

export default {
  name: 'TodoListItemControllers',

  components: {
    BaseToggle,
  },

  props: {
    star: { type: Boolean, default: false },
    done: { type: Boolean, default: false },
    edit: { type: Boolean, default: false },
    remove: { type: Boolean, default: false },
  },

  methods: {
    changeController(name, value) {
      console.log(name, value)
    },
  },
}
</script>

<style scoped>
.controllers {
  height: 100%;
  display: flex;
}

.controllerButton {
  flex: 1;
}

.toggle {
  margin-top: -40px;
}

.done {
  animation: slide 0.1s ease-in forwards;
}

.star {
  margin-top: -40px;
  animation: slide 0.1s ease-in 0.07s forwards;
}

.edit {
  margin-top: -40px;
  animation: slide 0.1s ease-in 0.14s forwards;
}

.remove {
  margin-top: -40px;
  animation: slide 0.1s ease-in 0.21s forwards;
}

@keyframes slide {
  from {
    margin-top: -40px;
  }
  to {
    margin-top: 0px;
  }
}
</style>
