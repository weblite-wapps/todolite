<template>
<div :class="$style['todo-item']">
  <div :class="$style['first-row']">
    <Checkbox
      @click="checked => onDone(id, checked)"
      :default="!!functor"
    />

    <div :class="$style['todo-item-title']">{{ title }}</div>

    <i class="material-icons" @click="expande">
      {{ expanded ? 'expand_less' : 'expand_more' }}
    </i>
  </div>

  <div v-if="expanded">
    {{ functor }}
  </div>
</div>
</template>


<script>
import Checkbox from '../helper/component/Checkbox'

export default {
  name: 'TodoItem',

  components: { Checkbox },

  data: () => ({
    expanded: false,
  }),

  props: ['title', 'functor', 'id', 'onDone', 'onDelete', 'onEdit'],

  methods: {
    expande: function() {
      this.expanded = !this.expanded
    }
  },
}
</script>


<style module>
  .todo-item {
    padding: 10px;
    border: 1px #E0E0E0 solid;
    margin-bottom: 10px;
    border-radius: 5px;
  }

  .first-row {
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
