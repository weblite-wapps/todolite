<template>
  <div class="controllers">
    <BaseToggle
      color="#60C102"
      icon="done"
      :value="done"
      @change="changeController('done', $event)"
    />
    <BaseToggle
      color="#FFAD00"
      icon="star"
      :value="star"
      @change="changeController('star', $event)"
    />
    <BaseToggle
      color="#636363"
      icon="edit"
      :value="edit"
      @change="changeController('edit', $event)"
    />
    <BaseToggle
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
</style>
