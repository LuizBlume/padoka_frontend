<script setup>
import { RouterView } from 'vue-router';
import { onMounted } from 'vue';
import { useRequestStore } from './stores/request/request';

onMounted(() => {
  useRequestStore().populateRequest();
})
</script>

<template>
  <RouterView />
</template>

<style scoped>
</style>
