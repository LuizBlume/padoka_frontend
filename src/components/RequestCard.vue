<script setup>
import { ref, onMounted } from 'vue';
import { useRequestStore } from '@/stores/request/request';

const useRequests = useRequestStore();
const requests = ref([]);

onMounted(() => {
    requests.value = useRequests.populateRequest();
});
</script>

<template>
    <div class="pedidos">
        <h1>Pedidos</h1>
    </div>
    <div v-if="requests.length > 0" class="container">
            <div v-for="(request, requestIndex) in requests" :key="requestIndex" class="card">
                <div class="card-header">
                    <h3>{{ request.name }}</h3>
                </div>
                <div class="card-body">
                    <p>{{ request.quantity }}</p>
                </div>
                <div class="card-footer">
                    <button @click="useRequests.findIndexRequest(request, 'fin')" class="btn"><img src="../assets/correct.png" alt=""></button>
                    <button class="btn"><img src="../assets/pencil.png" alt=""></button>
                    <button @click="useRequests.findIndexRequest(request, 'del')" class="btn"><img src="../assets/trash.png" alt=""></button>
                </div>
            </div>
    </div>
    <div class="container-vazio" v-else>
        <h1>Carrinho vazio</h1>
        {{ requests }}
    </div>
</template>
<style scoped>
@import '../assets/Sass/components/requests/_requests.scss';
</style>