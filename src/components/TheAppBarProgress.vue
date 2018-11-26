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

<style scoped>
.progress {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.progress:after {
  content: '\A';
  position: absolute;
  background: #027ebc;
  top: 0;
  bottom: 0;
  left: 0;
  width: var(--width);
  animation: filler 1s ease-in-out;
}

@keyframes filler {
  0% {
    width: 0;
  }
}

.text {
  font-size: 24px;
  font-weight: 900;
  color: #ffffff;
  z-index: 10;
}
</style>
