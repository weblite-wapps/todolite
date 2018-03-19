<template>
<div :class="$style['todo-item']">
  <div :class="$style['first-row']">
    <Checkbox
      @click="checked => onDone(id, checked)"
      :default="!!functor"
    />

    <div :class="$style['todo-item-title']">{{ title }}</div>

    <i :class="['material-icons', 'noselect']" @click="expande">
      {{ expanded ? 'expand_less' : 'expand_more' }}
    </i>
  </div>

  <transition name="bounce">
    <div v-if="expanded" :class="$style.expand">
      <span :class="$style.functor">{{ functor && `Done By ${functor}` }}</span>
      <i class="material-icons">close</i>
      <i class="material-icons">edit</i>
    </div>
  </transition>
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
    font-size: 15px;
  }

  .expand {
    margin-top: 18px;
    margin-left: 0px;
    display: flex;
    align-items: center;
  }

  .functor {
    width: 100%;
    font-size: 14px;
    color: #737373;
  }
</style>
