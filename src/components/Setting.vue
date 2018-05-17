<template>
<div
  :class="$style.root"
  @click.self="changeOpen(false)"
  v-if="open"
>
  <div :class="$style.panel">
    <input
      :class="$style.search"
      type="text"
      v-model="query"
      placeholder="search in titles"
    >

    <div :class="$style['radio-title']">Filter based on done</div>
    <div :class="$style['radio-root']">
      <input type="radio" value="all" v-model="done">
      <label for="one">all</label>
    </div>
    <div :class="$style['radio-root']">
      <input type="radio" value="done" v-model="done">
      <label for="two">done</label>
    </div>
    <div :class="$style['radio-root']">
      <input type="radio" value="undone" v-model="done">
      <label for="two">undone</label>
    </div>

    <div :class="$style['radio-title']">Sort based on time</div>
    <div :class="$style['radio-root']">
      <input type="radio" value="ascending" v-model="time">
      <label for="one">ascending</label>
    </div>
    <div :class="$style['radio-root']">
      <input type="radio" value="descending" v-model="time">
      <label for="two">descending</label>
    </div>

    <button
      @click="applySetting"
      :class="$style.apply"
    >
      Apply
    </button>
  </div>
</div>
</template>


<script>
import bus from '../helper/function/bus'
const { R } = window

export default {
  name: 'Setting',

  props: ['options'],

  data: () => ({
    open: false,
    query: '',
    done: 'all',
    time: 'descending',
  }),

  mounted() {
    bus.$on('OPEN_SETTING', () => this.changeOpen(true))
  },

  methods: {
    changeOpen(value) { this.open = value },

    applySetting() {
      this.changeOpen(false)
      bus.$emit('APPLY_SETTING', R.pick(['query', 'done', 'time'], this))
    },
  },
}
</script>


<style module>
.root {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  opacity: .93;
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
  margin-bottom: 8px;
  border: 1px #E0E0E0 solid;
  border-radius: 5px;
  outline: none;
}

.radio-title {
  padding: 5px;
  padding-left: 3px;
  font-weight: bold;
}

.radio-root {
  padding: 8px;
  padding-left: 10px;
}

.apply {
  float: right;
  border: 1px #E0E0E0 solid;
  border-radius: 5px;
  outline: none;
  padding: 8px 16px;
  cursor: pointer;
}

.apply:hover {
  background-color: #E0E0E0;
  color: white;
}
</style>
