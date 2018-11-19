<template>
  <div class="tab">
    <button
      v-for="({ content, color, selectedIcon }, index) in items"
      :key="content"
      :class="{ 'tab-item': true, 'tab-item-selected': selectedIndex === index }"
      :style="{ backgroundColor: color }"
      @click="click(index)"
    >
      <!-- icon content -->
      <img
        v-if="selectedIndex === index"
        class="icon"
        :src="require(`../../assets/icons/${selectedIcon}`)"
      />

      <!-- text content -->
      <span class="text"> {{content}} </span>

        <!-- ribbon -->
      <div :class="{ line: true, 'line-selected': selectedIndex === index }"/>
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

    methods: {
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
    display: flex;
    color: #ffffff;
    font-size: 18px;
    border-radius: 0 0 10px 10px;
    overflow: hidden;
    font-weight: 700;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: padding-bottom .2s;
  }

  .tab-item-selected {
    padding-bottom: 8px;
  }

  .icon {
    margin-right: 3px;
    width: 18px;
    color: white;
  }

  .text {
    margin-left: 3px;
  }

  .line {
    bottom: 0;
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
    height: 8px;
  }
</style>
