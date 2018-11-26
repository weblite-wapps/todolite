<template>
  <button
    :class="getClass('tab-item')"
    :style="{ backgroundColor: disable ? '#aaaaaa' : color }"
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
    disable: { typer: Boolean, default: false },
  },

  methods: {
    getClass(name) {
      return [name, this.value ? `${name}-selected` : '']
    },

    click(value) {
      if (!this.disable) this.$emit('change', !value)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../helper/style/_variable.scss';
@import '../../helper/style/_mixin.scss';

.tab-item {
  @include flex-center;

  position: relative;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 18px;
  cursor: pointer;
  transition: padding-bottom 0.2s;
  color: $font-color-light-primary;
}

.tab-item-selected {
  padding-bottom: 6px;
}

.icon {
  width: 18px;
  margin-right: 2px;
}

.text {
  margin-left: 2px;
}

.line {
  left: 0;
  bottom: 0;
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
