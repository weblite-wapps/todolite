<template>
<div
  :class="$style.root"
  @click.self="changeOpen(false)"
  v-if="open"
>
  <div :class="$style.panel">
    <div :class="$style.radioTitle">Search in Title:</div>
    <input
      :class="$style.search"
      type="text"
      v-model="query"
      placeholder="search ..."
    >

    <div :class="$style.radioTitle">Based on Done:</div>
    <div :class="$style.radioRoot">
      <input type="radio" value="all" v-model="done">
      <label for="one">all</label>
    </div>
    <div :class="$style.radioRoot">
      <input type="radio" value="done" v-model="done">
      <label for="two">done</label>
    </div>
    <div :class="$style.radioRoot">
      <input type="radio" value="undone" v-model="done">
      <label for="two">undone</label>
    </div>

    <div :class="$style.radioTitle">Based on Time:</div>
    <div :class="$style.radioRoot">
      <input type="radio" value="ascending" v-model="time">
      <label for="one">ascending</label>
    </div>
    <div :class="$style.radioRoot">
      <input type="radio" value="descending" v-model="time">
      <label for="two">descending</label>
    </div>

    <button :class="$style.apply">apply</button>
  </div>
</div>
</template>


<script>
import bus from '../helper/function/bus'

export default {
  name: 'Setting',

  props: ['options'],

  data: () => ({
    open: false,
    query: 'hello',
    done: 'all',
    time: 'ascending',
  }),

  mounted() {
    bus.$on('OPEN_SETTING', () => {
      this.changeOpen(true)
    })
  },

  methods: {
    changeOpen(value) { this.open = value },
  },
}
</script>


<style module>
.root {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  opacity: .9;
}

.panel {
  width: 220px;
  padding: 8px;
  background-color: white;
  box-shadow: 1px;
  border: 1px #E0E0E0 solid;
  border-radius: 5px;
}

.search {
  height: 100%;
  width: 205px;
  padding: 5px;
  margin-top: 8px;
  margin-bottom: 8px;
  border: 1px #E0E0E0 solid;
  border-radius: 5px;
  outline: none;
}

.radioTitle {
  padding: 5px;
  padding-left: 3px;
  font-weight: bold;
}

.radioRoot {
  padding: 5px;
  padding-left: 10px;
}

.apply {
  float: right;
  border: 1px #E0E0E0 solid;
  border-radius: 5px;
  outline: none;
  padding: 5px 10px;
  cursor: pointer;
}

.apply:hover {
  background-color: #E0E0E0;
  color: white;
}
</style>
