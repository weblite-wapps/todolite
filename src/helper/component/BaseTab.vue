<template>
  <div class="tab">
    <button
      v-for="{ value, color, icon } in items"
      :key="value"
      :class="getClass('tab-item', value)"
      :style="{ backgroundColor: color }"
      @click="click(value)"
    >
      <!-- icon -->
      <img
        v-if="isSelected(value)"
        :src="require(`../../assets/icons/${icon}.svg`)"
        class="icon"
      />

      <!-- text -->
      <span class="text">{{ value }}</span>

      <!-- ribbon -->
      <div :class="getClass('line', value)" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'BaseTab',

  props: {
    items: { type: Array, require: true },
    value: { type: String, default: '' },
  },

  methods: {
    isSelected(value) {
      return this.value === value
    },

    getClass(name, value) {
      return [name, this.isSelected(value) ? `${name}-selected` : '']
    },

    click(value) {
      this.$emit('change', value)
    },
  },
}
</script>

<style scoped>
.tab {
  margin-top: 4px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  overflow: hidden;
}

.tab-item {
  position: relative;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  border-radius: 0 0 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  transition: padding-top 0.2s;
}

.tab-item-selected {
  padding-top: 6px;
}

.icon {
  margin-right: 2px;
  width: 18px;
  color: white;
}

.text {
  margin-left: 2px;
}

.line {
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 0px;
  opacity: 1;
  z-value: 10;
  background: rgba(0, 0, 0, 0.3);
  transition: height 0.2s;
}

.line-selected {
  height: 6px;
}
</style>
