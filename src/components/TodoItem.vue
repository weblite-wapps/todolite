<template>
<div :class="$style['todo-item']">
  <Checkbox
    @click="checked => onDone(id, checked)"
    :default="!!functor"
  />

  <div :class="$style['todo-item-title']">{{ title }}</div>
</div>
</template>


<script>
import Checkbox from '../helper/component/Checkbox'

export default {
  name: 'TodoItem',

  components: { Checkbox },

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
    color: #424242;
    font-family: arial;
    font-size: 15px;
  }
</style>
