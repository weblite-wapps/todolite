<template>
<div
  @click="click"
  :class="[value ? $style.checked : $style.checkbox, 'noselect']"
>
  <transition name="number-fade">
    <div v-if="value" :class="[(itemIndex+1<10) ? $style.itemIndexSingleDigit :
                  (itemIndex+1<100) ? $style.itemIndexDoubleDigit :
                  $style.itemIndexTripleDigit, 'noselect']"
    >
      {{itemIndex+1}}
    </div>
  </transition>
  <transition name="number-fade">
    <div v-if="!value" :class="[(itemIndex+1<10) ? $style.itemIndexSingleDigit :
                  (itemIndex+1<100) ? $style.itemIndexDoubleDigit :
                  $style.itemIndexTripleDigit, 'noselect']"
    >
      {{itemIndex+1}}
    </div>
  </transition>


</div>
</template>


<script>
export default {
  name: 'Checkbox',

  props: ['value','itemIndex'],

  methods: {
    click() { this.$emit('click', !this.value) },
  },
}
</script>


<style module>
.checkbox {
  width: 24px;
  height: 24px;
  font-size: 14px;
  border-radius: 100px;
  color: #808080;
  font-weight: bold;
  margin-right: 10px;
  border: 1px #9CCC65 solid;
  padding: 3px;
  cursor: pointer;
  margin-left: 8px;
  margin-top: 6px;
}

.checked {
  composes: checkbox;
  background: #9CCC65;
  color: white;
  font-size: 14px;
}

.itemIndexSingleDigit {
  margin-left: 7px;
  margin-top: 6px;
}

.itemIndexDoubleDigit {
  margin-left: 3px;
  margin-top: 6px;
}

.itemIndexTripleDigit {
  margin-left: 0px;
  margin-top: 6px;
}

</style>
