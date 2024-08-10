<script setup>
import { DefaultHeader } from '@/components/default/DefaultHeader'
import { DefaultFooter } from '@/components/default/DefaultFooter'
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