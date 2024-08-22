<script setup>
import DefaultHeader from '@/components/default/DefaultHeader.vue'
import DefaultFooter from '@/components/default/DefaultFooter.vue'
import { RouterView } from 'vue-router';
</script>

<template>
    <div class="container-layout">
        <DefaultHeader />
        <main>
            <RouterView />
        </main>
        <DefaultFooter />
    </div>
</template>

<style scoped>
.container-layout {
    display: grid;
    height: 100%;
    grid-template-areas: "header"
    "main"
    "footer";
    grid-template-rows: 10% 75% 15%;;
}
</style>