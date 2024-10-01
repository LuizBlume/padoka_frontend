<script setup>
import { ref, onMounted } from 'vue';
import { useRequestStore } from '@/stores/request/request';

const useRequests = useRequestStore();
const requests = ref([]);

onMounted(() => {
    requests.value = useRequests.populateRequest();
});

function editRequest(product) {
    if (product.quantity == 0) {
        const confirmDelete = confirm('A quantidade escolhida foi 0, você tem certeza de que deseja excluir este pedido?');

        if (confirmDelete) {
            useRequests.findIndexRequest(product, 'sub');
        } else {
            alert('Sua ação foi cancelada, pedido não excluído!');
            requests.value[product.id - 1].quantity = useRequests.currentQuantity;
            useRequests.editMode.id = null;
        }
    } else {
        useRequests.findIndexRequest(product, 'edit');
        useRequests.editMode.id = null;
        alert('Quantidade alterada com sucesso');
    }
}
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
                    <p v-if="useRequests.editMode.id !== request.id">Quantidade: {{ request.quantity }}x</p>
                    <form v-else @submit.prevent="editRequest(request)">
                        <label for="">Quantidade: </label>
                        <input type="number" min="0" v-model="requests[requestIndex].quantity" placeholder="Escolha a quantidade">
                        <button type="submit" class="btn"><img src="../assets/correct.png" alt=""></button>
                        <svg @click="useRequests.editMode.id = null; request.quantity = useRequests.currentQuantity" xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </form>
                </div>
                <div v-if="useRequests.editMode.id !== request.id" class="card-footer">
                    <button @click="useRequests.findIndexRequest(request, 'fin')" class="btn"><img src="../assets/correct.png" alt=""></button>
                    <button @click="useRequests.editMode.id = request.id; useRequests.currentQuantity = request.quantity" class="btn"><img src="../assets/pencil.png" alt=""></button>
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