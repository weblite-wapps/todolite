<template>
<div :class="$style['todo-item']">
  <IconButton
    :class="$style.icon"
    @click="onDone(id)"
    icon="check"
    color="white"
    v-if="!functor"
  />

  <div :class="$style['todo-item-title']">{{ title }}</div>
</div>
</template>


<script>
import IconButton from '../helper/component/IconButton'

export default {
  name: 'TodoItem',

  components: { IconButton },

  props: ['title', 'functor', 'id', 'onDone', 'onDelete', 'onEdit'],
}
</script>


<style module>
  .todo-item {
    padding: 10px;
    border: 1px #E0E0E0 solid;
    margin-bottom: 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
  }

  .todo-item-title {
    width: 100%;
  }

  .todo-item-icons {
    width: inherit;
    display: flex;
    justify-content: flex-end;
  }
</style>

<style>
.todo-item-transition-enter-active, .todo-item-transition-leave-active {
  transition: all 1s;
}
.todo-item-transition-enter, .todo-item-transition-leave-to {
  opacity: 0;
  transform: translateX(300px);
}
</style>
