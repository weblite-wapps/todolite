<template>
  <button
    :class="getClass('tab-item')"
    :style="{ backgroundColor: color }"
    @click="click(value)"
  >
    <!-- icon -->
    <img :src="require(`../../assets/icons/${icon}.svg`)" class="icon" />

    <!-- ribbon -->
    <div :class="getClass('line')" />
  </button>
</template>

<script>
export default {
  name: 'BaseToggle',

  props: {
    color: { type: String, required: true },
    icon: { type: String, required: true },
    value: { type: Boolean, default: false },
  },

  methods: {
    getClass(name) {
      return [name, this.value ? `${name}-selected` : '']
    },

    click(value) {
      this.$emit('change', !value)
    },
  },
}
</script>

<style scoped>
.tab-item {
  position: relative;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  transition: padding-bottom 0.2s;
}

.tab-item-selected {
  padding-bottom: 6px;
}

.icon {
  margin-right: 2px;
  width: 18px;
}

.text {
  margin-left: 2px;
}

.line {
  bottom: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 0px;
  opacity: 1;
  background: rgba(0, 0, 0, 0.3);
  transition: height 0.2s;
}

.line-selected {
  height: 6px;
}
</style>
