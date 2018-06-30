<template>
  <li
    @click.self="expand"
    :class="$style['todo-item']"
    :style="{'border-color': priorityColors[priority-1]}"
  >
    <div @click.self="expand" :class="$style['first-row']">
      <Checkbox
        @click="checkboxClicked"
        :value="!!functor"
        :itemIndex="itemIndex"
      />
      <div @click.self="expand" :class="$style['todo-item-title']">
        {{ title }}
      </div>
      <!-- <div 
        :class="$style['priority-icon']" 
        :style="{background: priorityColors[priority-1]}"
        v-if="priority !== 0"
      /> -->
    </div>

    <transition name="fade">
      <div @click.self="expand" v-if="expanded">
        <div :class="$style.expand">
          <span @click.self="expand" :class="$style.info">{{creator && `Created by ${creator}`}}<div :class="$style.splitter" v-if="functor !==''"/>{{ functor && `Done by ${functor}`}}</span>
          <i @click="onDelete(id)" :class="$style.delete">close</i>
          <i @click="onEdit(id)" :class="$style.edit">edit</i>
        </div>

        <div :class="$style['priority-split']">
          <div :class="$style['palette-splitter']"/>
          <p :class="$style['priority-text']"> PRIORITY </p>
          <div :class="$style['palette-splitter']"/>
        </div>

        <div :class="$style.palette">
          <PriorityPicker
            v-for="(color, index) in priorityColors"
            v-bind:priority="index + 1"
            v-bind:color="color"
            v-bind:key="index"
            @picked="editPriority($event)"
          >
          </PriorityPicker>
        </div>
      </div>
    </transition>
  </li>
</template>


<script>
import Checkbox from '../helper/component/Checkbox'
import PriorityPicker from '../helper/component/PriorityPicker'
import bus from '../helper/function/bus.js'

export default {
  name: 'TodoItem',

  components: {
    Checkbox,
    PriorityPicker
  },

  data(){
    return {
      expanded: false,
    }
  },

  props: {
    title: String,
    functor: String,
    creator: String,
    priorityColors: Array,
    id: Number,
    itemIndex: Number,
    priority: Number,
    onDone: Function,
    onDelete: Function,
    onEdit: Function,
  },

  methods: {
    checkboxClicked: function(checked) {
      this.onDone(this.id, checked)
      this.expanded = true
    },

    expand: function() {
      this.expanded = !this.expanded;
    },

    editPriority: function(value) {
      bus.$emit('editPriority', {id: this.id, priority: value})
    }
  }
}
</script>


<style module>
.todo-item {
  padding: 10px;
  border: 2px solid;
  border-color: #E0E0E0;
  margin-bottom: 10px;
  border-radius: 9px;
}

.first-row {
  display: flex;
  align-items: center;
}

/* .priority-icon {
  width: 22px;
  height: 22px;
  cursor: pointer;
  border-radius: 20px;
  margin: 5px;
  border: 2px rgba(0, 0, 0, 0.349) solid;
  margin-right: 0;
} */

.todo-item-title {
  width: 80%;
  max-width: 230px;
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

.info {
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

.splitter {
  margin: 10px 50px 10px 0px;
  border-bottom: 1px solid rgba(99, 99, 99, 0.418);
}

.palette {
  margin-top: 5px;
  display: flex;
  justify-content: center;
}

.palette-splitter {
  display: flex;
  width: 90px;
  margin: 20px 0px 10px 0px;
  border-bottom: 1px solid rgba(109, 102, 102, 0.575);
}

.priority-split {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

.priority-text {
  margin: 12px 10px 0px;
  font-size: 14px;
  color: #747474;
}
</style>
