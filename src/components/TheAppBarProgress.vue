<template>
  <div
    class="progress"
    id="progress"
  >
    <!-- set --width css variable dynamically -->
    <div
      v-html="`
        <style>
          div#progress { --width: ${percentage}% }
        </style>
      `"
    />

    <!-- show percentage -->
    <span class="text">{{ percentage }}%</span>
  </div>
</template>


<script>
  export default {
    name: 'TheAppBarProgress',

    props:{
      percentage: {
        type: Number,
        default: 0,
        validator: value => value >= 0 && value <= 100,
      },
    },
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
  content:'\A';
  position:absolute;
  background:#027EBC;
  top:0;
  bottom:0;
  left:0;
  width: var(--width);
  animation: filler 1s ease-in-out;
}

@keyframes filler {
  0% {
    width:0;
  }
}

.text {
  font-size: 22px;
  color: #ffffff;
  z-index: 10;
}
</style>
