<script setup>
import { ref, onMounted } from 'vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

const carouselStyle = ref({});
const settings = {itemsToShow: 1, snapAlign: 'center'};

onMounted(() => {
  carouselStyle.value = {width: document.documentElement.clientWidth};
  console.log(carouselStyle.value)
})
</script>

<template>
  <div class="carousel" :style="carouselStyle">
    <Carousel v-bind="settings">
      <Slide v-for="slide in 4" :key="slide">
        <img src="@/assets/images/carousel-img.jpg" alt="">
      </Slide>

      <template #addons>
        <Pagination />
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<style scoped>
.carousel {
  overflow: hidden;
}

.carousel__track > li > img {
  width: 100%;
}

::v-deep .carousel__pagination {
  position: relative;
  bottom: 50px;
}

::v-deep .carousel__pagination-button::after {
  width: 15px !important;
  height: 15px !important;
  border-radius: 50% !important;
  background-color: #FFF;
}

::v-deep .carousel__prev {
  width: 100px !important;
  height: 100px !important;
  margin: 0 !important;
  color: #FFF;
}

::v-deep .carousel__next {
  width: 100px !important;
  height: 100px !important;
  margin: 0 !important;
  color: #FFF;
}

::v-deep .carousel__icon {
  width: 100px !important;
  height: 100px !important;
}
</style>