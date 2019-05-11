<template>
  <div class="controllers">
    <BaseToggle
      class="toggle done"
      color="#60C102"
      icon="done"
      :value="!!functor"
      :disable="
        functor && !(functor === username || creator === username || isAdmin) || editable
      "
      @change="changeTodoFunctor({ id, done: $event })"
    />
    <BaseToggle
      class="toggle star"
      color="#FFAD00"
      icon="star"
      :value="vit"
      :disable="functor || editable"
      @change="changeTodoVit({ id, vit: $event })"
    />
    <BaseToggle
      class="toggle edit"
      color="#636363"
      icon="edit"
      :value="editable"
      :disable="!(creator === username || isAdmin)"
      @change="toggleEditable"
    />
    <BaseToggle
      class="toggle remove"
      color="#DA4445"
      icon="remove"
      :disable="!(creator === username || isAdmin) || editable"
      @change="removeTodo(id)"
    />
  </div>
</template>

<script>
// modules
import { mapActions } from 'vuex'
// components
import BaseToggle from '../helper/component/BaseToggle.vue'

export default {
  name: 'TodoListItemControllers',

  components: {
    BaseToggle,
  },

  props: {
    id: { type: Number, require: true },
    functor: { type: String, default: '' },
    creator: { type: String, default: '' },
    vit: { type: Boolean, default: false },
    editable: { type: Boolean, default: false },
    toggleEditable: { type: Function, required: true },
  },

  computed: {
    isAdmin() {
      return this.$store.state.isAdmin
    },

    username() {
      return this.$store.state.username
    },
  },

  methods: mapActions(['changeTodoFunctor', 'changeTodoVit', 'removeTodo']),
}
</script>

<style lang="scss" scoped>
.controllers {
  height: 100%;
  display: flex;
}

.controllerButton {
  flex: 1;
}

.toggle {
  margin-top: -40px;
  animation: slide 0.1s ease-in forwards;
}

.star {
  animation-delay: 0.07s;
}

.edit {
  animation-delay: 0.14s;
}

.remove {
  animation-delay: 0.21s;
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
