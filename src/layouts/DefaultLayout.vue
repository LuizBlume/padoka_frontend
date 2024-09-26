<script setup>
import DefaultHeader from '@/components/default/DefaultHeader.vue';
import DefaultFooter from '@/components/default/DefaultFooter.vue';
import { RouterView } from 'vue-router';
import { useRoute } from 'vue-router';

const route = useRoute();
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
    height: v-bind('route.path === "/requests" ? "100vh" : "100%"');
    grid-template-areas: "header"
    "main"
    "footer";
}
</style>