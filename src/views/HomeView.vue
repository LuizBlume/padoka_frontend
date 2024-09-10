<script setup>
import CarouselHome from '@/components/home/carousel/CarouselHome.vue';
import CardHome from '@/components/home/card/CardHome.vue';
import { db } from '../../db';

console.log(db.users);
</script>


<template>
  <CarouselHome />
  <CardHome />
</template>


<style scoped>

</style>

