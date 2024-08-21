<script setup>
import { ref, reactive, onMounted } from 'vue';
const cards = [1, 2, 3, 4, 5, 6, 7, 8];
const inner = ref(null);
const innerStyles = reactive({transform: ''});
let step = ''

onMounted(() => {
    setStep()
})

function setStep() {
    const innerWidth = inner.value.scrollWidth;
    step = `${innerWidth / cards.length}px`;
}

function next() {
    moveLeft();
}

function moveLeft() {
    innerStyles.transform = `translateX(-${step})`;
}
</script>

<template>
    <div class="carousel">
        <div class="inner" ref="inner" :style="innerStyles">
            <div class="card" v-for="card in cards" :key="card">
                {{ card }}
            </div>
        </div>
    </div>
    <button>prev</button>
    <button @click="next">next</button>
</template>

<style scoped>
.carousel {
  width: 170px; /* ❶ */
  overflow: hidden; /* ❷ */
}

.inner {
  transition: transform 0.2s;      
  white-space: nowrap; /* ❸ */
}

.card {
  width: 40px;
  margin-right: 10px;
  display: inline-flex;

  /* optional */
  height: 40px;
  background-color: #39b1bd;
  color: white;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
}

/* optional */
button {
  margin-right: 5px;
  margin-top: 10px;
}
</style>