<template>
  <div 
    :class="$style.picker" 
    @click="$emit('picked', priority)" 
    :style="{background: color}"
  />
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
  border: 2px rgba(0, 0, 0, 0.349) solid;
}

.picker:hover {
  border: 2px rgba(0, 0, 0, 0.596) solid;
}

</style>
