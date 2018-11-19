<template>
  <div class="tab">
    <button
      v-for="({ content, color, icon }, index) in items"
      :key="content"
      :class="getClass('tab-item', index)"
      :style="{ backgroundColor: color }"
      @click="click(index)"
    >
      <!-- icon content -->
      <img
        v-if="isSelected(index)"
        :src="require(`../../assets/icons/${icon}`)"
        class="icon"
      />

      <!-- text content -->
      <span class="text">{{content}}</span>

      <!-- ribbon -->
      <div :class="getClass('line', index)"/>
    </button>
  </div>
</template>


<script>
  export default {
    name: 'BaseTab',

    props: {
      items: { type: Array, require: true },
    },

    data: () => ({
      selectedIndex: 0,
    }),

    computed: {},

    methods: {
      isSelected(index) {
        return this.selectedIndex === index
      },

      getClass(name, index) {
        return [name, this.isSelected(index) ? `${name}-selected`: '']
      },

      click(index) {
        this.selectedIndex = index
        this.$emit('change', index)
      }
    }
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
    transition: padding-top .2s;
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
    z-index: 10;
    background:rgba(0,0,0,0.3);
    transition: height .2s;
  }

  .line-selected {
    height: 6px;
  }
</style>
