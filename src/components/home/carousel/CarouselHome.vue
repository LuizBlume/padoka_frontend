<script setup>
import { ref, onMounted } from 'vue';

const carouselStyles = ref({});
const cards = ref([1, 2, 3, 4]);
const innerStyles = ref({});
const transitioning = ref(false);
const inner = ref(null);
const currentIndex = ref(0);

function action(index) {
  if (index > currentIndex.value) {
    next(Math.abs(index - currentIndex.value));
  } else {
    prev(Math.abs(currentIndex.value - index));
  }
  currentIndex.value = index;
}

function next(multiplier) {
  if (transitioning.value) return;
  transitioning.value = true;

  moveLeft(multiplier);
  afterTransition(() => {
    resetTranslate();
    transitioning.value = false;
  });
}

function prev(multiplier) {
  if (transitioning.value) return;
  transitioning.value = true;

  moveRight(multiplier);
  afterTransition(() => {
    resetTranslate();
    transitioning.value = false;
  });
}

function moveLeft(multiplier) {
  innerStyles.value = {
    transform: `translateX(-${multiplier * 1724.55}px)`
  };
}

function moveRight(multiplier) {
  innerStyles.value = {
    transform: `translateX(${multiplier * 1724.55}px)`
  };
}

function afterTransition(callback) {
  const listener = () => {
    callback();
    inner.value.removeEventListener('transitionend', listener);
  };
  inner.value.addEventListener('transitionend', listener);
}

function resetTranslate() {
  innerStyles.value = {
    transition: 'none',
    transform: `translateX(-1724.55px)`
  };
  setTimeout(() => {
    innerStyles.value.transition = 'transform 0.2s';
  });
}

onMounted(() => {
  resetTranslate();
  carouselStyles.value = { width: `${document.documentElement.innerWidth}px` };
});
</script>

<template>
  <div class="carousel" :style="carouselStyles">
    <div ref="inner" :style="innerStyles" class="inner">
      <div v-for="card in cards" :key="card" class="card">
        <img class="img-card" src="@/assets/images/carousel-img.jpg" alt="">
      </div>
    </div>
    <div class="buttons">
      <button
        v-for="(button, indexButton) in cards"
        :key="indexButton"
        class="button"
        @click="action(indexButton)"
      ></button>
    </div>
  </div>
</template>

<style scoped>
.carousel {
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
}

.inner {
  transition: transform 0.2s;
  white-space: nowrap;
}

.card {
  display: inline-flex;
  width: 100%;
}

.img-card {
  width: 100%;
}

.buttons {
  display: flex;
  position: relative;
  column-gap: 20px;
  bottom: 40px;
}

/* optional */
.button {
  background-color: #FDFDFD;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: none;
  outline: none;
}
</style>