<template>
  <!-- Todo item -->
  <li 
    @click="expande"
    :class="$style['todo-item']">
    <div :class="$style['first-row']">
      <Checkbox
        @click="checked => onDone(id, checked)"
        :value="!!functor"
        :itemIndex="itemIndex"/>
      <div :class="$style['todo-item-title']">
        {{ title }}
      </div>
    </div>

    <transition name="bounce">
      <div v-if="expanded" :class="$style.expand">
        <span :class="$style.functor">{{ functor && `Done by ${functor}` }}</span>
        <i @click="onDelete(id)" :class="$style.delete">close</i>
        <i @click="onEdit(id)" :class="$style.edit">edit</i>
      </div>
    </transition>
  </li>
</template>


<script>
import Checkbox from '../helper/component/Checkbox'

export default {
  name: 'TodoItem',

  components: { Checkbox },

  data(){
    return {
      expanded: false
    }
  },

  props: {
    title: String,
    functor: String,
    id: Number,
    itemIndex: Number,
    onDone: Function,
    onDelete: Function,
    onEdit: Function,
  },

  methods: {
    expande: function() { 
      this.expanded = !this.expanded;
    }
  }
}
</script>


<style module>
.todo-item {
  padding: 10px;
  border: 1px #E0E0E0 solid;
  margin-bottom: 10px;
  border-radius: 9px;
}

.first-row {
  display: flex;
  align-items: center;
}

.todo-item-title {
  width: 80%;
  color: #424242;
  font-size: 15px;
  margin-left:5px;
  word-wrap: break-word;
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
  border-radius: 12px;
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
