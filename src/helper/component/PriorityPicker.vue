<template>
  <div 
    :class="$style.picker" 
    @click="$emit('picked', priority)" 
    :style="{background: color}"
  >
    <i :class="$style['pick-icon']" v-if="$parent.priority === priority">done</i>
  </div>
</template>

<script>
export default {
  name: 'PriorityPicker',

  data(){
    return {
     
    }
  },

  props: {
    priority: Number,
    color: String
  },

}

</script>


<style module>

.picker {
  width: 22px;
  height: 22px;
  cursor: pointer;
  border-radius: 20px;
  margin: 5px;
  border: 2px rgba(0, 0, 0, 0.226) solid;
}

.picker:hover {
  border: 2px rgba(0, 0, 0, 0.5) solid;
}

.pick-icon {
  color: rgba(0, 0, 0, 0.4);
  font-size: 21px;
}
</style>
