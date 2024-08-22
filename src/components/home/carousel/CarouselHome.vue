<script setup>
import { ref, onMounted } from 'vue';

const carouselStyles = ref({});
const innerStyles = ref({});
const inner = ref(null);
const cards = ref([1, 2, 3, 4]);
const currentIndex = ref(0);
const transitioning = ref(false);

function action(index) {
  console.log(index, currentIndex.value, Math.abs(index - currentIndex.value))
  if (index > currentIndex.value) {
    next(Math.abs(index - currentIndex.value));
  } else {
    prev(Math.abs(index - currentIndex.value));
  }
  currentIndex.value = index;
  console.log('Index alterado', currentIndex.value)
}

function next(value) {
  console.log('Função next executada', value)
  if (transitioning.value) return;
  transitioning.value = true;

  moveLeft(value);

  afterTransition(() => {
    console.log('Função callback executada')
    resetTranslate();
    transitioning.value = false;
  });
}

function prev(value) {
  console.log('Função next executada')
  if (transitioning.value) return;
  transitioning.value = true;

  moveRight(value);
  afterTransition(() => {
    console.log('Função callback executada')
    resetTranslate();
    transitioning.value = false;
  });
}

function moveLeft(multiplier) {
  innerStyles.value = {
    transform: `translateX(-${multiplier * document.documentElement.clientWidth}px)`
  };
  console.log('Terminou moveLeft')
}

function moveRight(multiplier) {
  innerStyles.value = {
    transform: `translateX(${multiplier * document.documentElement.clientWidth}px)`
  };
  console.log('Terminou moveRight')
}

function afterTransition(callback) {
  const listener = () => {
    callback();
    inner.value.removeEventListener('transitionend', listener);
    console.log('afterTransiction terminado')
  };
  inner.value.addEventListener('transitionend', listener);
}

function resetTranslate() {
  innerStyles.value = {
    transition: 'none',
    transform: `translateX(-${document.documentElement.clientWidth}px)`
  };
  // setTimeout(() => {
  //   innerStyles.value.transition = 'transform 0.2s';
  // }, 2000);
}

onMounted(() => {
  resetTranslate();
  carouselStyles.value = { width: `${document.documentElement.clientWidth}px` };
  console.log(carouselStyles.value);
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