<template>
  <div class="progress noselect" id="progress">
    <!-- set --width css variable dynamically -->
    <div
      v-html="
        `
        <style>
          div#progress { --width: ${donePercentage}% }
        </style>
      `
      "
    />

    <!-- show percentage -->
    <span class="text">{{ donePercentage }}%</span>
  </div>
</template>

<script>
// modules
import { mapGetters } from 'vuex'

export default {
  name: 'TheAppBarProgress',

  computed: mapGetters(['donePercentage']),
}
</script>

<style lang="scss" scoped>
@import '../helper/style/_variable.scss';
@import '../helper/style/_mixin.scss';

.progress {
  @include flex-center();

  width: 100%;
  height: 100%;
  position: relative;
}

.progress:after {
  content: '\A';
  top: 0;
  left: 0;
  bottom: 0;
  position: absolute;
  width: var(--width);
  background: darken($color-secondary, 7);
  animation: filler 1s ease-in-out;
}

@keyframes filler {
  0% {
    width: 0;
  }
}

.text {
  z-index: 10;
  font-size: $font-size-large;
  font-weight: $font-weight-heavy;
  color: $font-color-light-primary;
}
</style>
