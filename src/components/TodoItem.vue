<template>
<li :class="$style['todo-item']">
  <div :class="$style['first-row']">
    <Checkbox
      @click="checked => onDone(id, checked)"
      :default="!!functor"
    />

    <div :class="$style['todo-item-title']">{{ title }}</div>

    <IconButton
      :icon="expanded ? 'expand_less' : 'expand_more'"
      @click.native="expande"
      class="noselect"
    />
  </div>

  <transition name="bounce">
    <div v-if="expanded" :class="$style.expand">
      <span :class="$style.functor">{{ functor && `Done By ${functor}` }}</span>
      <IconButton
        icon="close"
        @click.native="onDelete(id)"
        :class="$style.delete"
      />
      <IconButton
        icon="edit"
        @click.native="onEdit(id)"
        :class="$style.edit"
      />
    </div>
  </transition>
</li>
</template>


<script>
import Checkbox from '../helper/component/Checkbox'
import IconButton from '../helper/component/IconButton'

export default {
  name: 'TodoItem',

  components: { Checkbox, IconButton },

  data: () => ({
    expanded: false,
  }),

  props: ['title', 'functor', 'id', 'onDone', 'onDelete', 'onEdit'],

  methods: {
    expande() { this.expanded = !this.expanded },
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

  .icon {
    width: 18px;
    height: 18px;
    font-size: 18px;
    cursor: pointer;
    border-radius: 100px;
    font-weight: bold;
    padding: 5px;
  }

  .delete {
    composes: icon;
    border: 1px #EF5350 solid;
    background: white;
    color: #EF5350;
    margin-right: 5px;
  }

  .delete:hover {
    background: #EF5350;
    color: white;
  }

  .edit {
    composes: icon;
    border: 1px #1565C0 solid;
    background: white;
    color: #1565C0;
  }

  .edit:hover {
    background: #1565C0;
    color: white;
  }
</style>
