<script setup>
import { ref, onMounted } from 'vue';
import { db } from '../../db';

const requests = ref(null);

onMounted(() => {
    requests.value = db.requests;
})
</script>

<template>
    <div class="pedidos">
        <h1>Pedidos</h1>
    </div>
    <div class="container">
        <div v-for="request in requests" :key="request.id" class="card">
            <div class="card-header">
                <h3>{{ request.name }}</h3>
            </div>
            <div class="card-body">
                <p>{{ request.quantity }}</p>
            </div>
            <div class="card-footer">
                <button class="btn"><img src="../assets/correct.png" alt=""></button>
                <button class="btn"><img src="../assets/pencil.png" alt=""></button>
                <button class="btn"><img src="../assets/trash.png" alt=""></button>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import '../assets/Sass/components/requests/_requests.scss';
</style>