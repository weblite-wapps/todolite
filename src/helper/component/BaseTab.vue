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
    items: { type: Array, required: true },
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

<style lang="scss" scoped>
@import '../../helper/style/_variable.scss';
@import '../../helper/style/_mixin.scss';

.tab {
  width: 100%;
  height: 50px;
  display: flex;
  margin-top: 4px;
  overflow: hidden;
  justify-content: space-around;
}

.tab-item {
  @include flex-center();
  @include reset();

  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  overflow: hidden;
  transition: padding-top 0.2s;
  border-radius: 0 0 10px 10px;
  font-size: $font-size-medium;
  font-weight: $font-weight-bold;
  color: $font-color-light-primary;
}

.tab-item-selected {
  padding-top: 6px;
}

.icon {
  width: 18px;
  margin-right: 2px;
  color: $font-color-light-primary;
}

.text {
  margin-left: 2px;
}

.line {
  top: 0;
  opacity: 1;
  height: 0px;
  width: 100%;
  position: absolute;
  transition: height 0.2s;
  background: rgba(0, 0, 0, 0.3);
}

.line-selected {
  height: 6px;
}
</style>
