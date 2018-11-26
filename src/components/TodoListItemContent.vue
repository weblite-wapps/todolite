<template>
  <BaseEditable
    class="todo-content"
    :content="content"
    :editable="editable"
    @submit="$emit('submit', $event)"
  />
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
    editable: { type: Boolean, default: false },
    content: { type: String, required: true },
  },
}
</script>

<style lang="scss" scoped>
@import '../helper/style/_variable.scss';
@import '../helper/style/_mixin.scss';

.todo-content {
  @include reset();

  width: 100%;
  padding: 10px;
  margin-top: 2px;
  font-size: 16px;
  word-wrap: break-word;
  box-sizing: border-box;
  border-bottom-right-radius: 20px;
  font-weight: $font-weight-normal;
  background-color: $color-primary;
}
</style>
