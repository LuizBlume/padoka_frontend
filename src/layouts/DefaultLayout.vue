<script setup>
import { DefaultHeader } from '@/components/default/DefaultHeader.vue'
import { DefaultFooter } from '@/components/default/DefaultFooter.vue'
import { RouterView } from 'vue-router';
</script>

<template>
    <main>
        <DefaultHeader />
        <RouterView />
        <DefaultFooter />
    </main>
</template>

<style scoped>
</style>