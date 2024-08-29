<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="container-cards">
        <div class="card">
            <h3>Bolos</h3>
            <p>Os melhores bolos fresquinhos e com os melhores preços da região</p>
            <div class="container-button-card">
                <router-link to="/cakes">
                    <button type="button">Ir a página <span><img src="@/assets/icons/vector.svg" alt=""></span></button>
                </router-link>
            </div>
        </div>
        <div class="card">
            <h3>Cafés</h3>
            <p>Os melhores cafés fresquinhos e com os melhores preços da região</p>
            <div class="container-button-card">
                <router-link to="/coffes">
                    <button type="button">Ir a página <span><img src="@/assets/icons/vector.svg" alt=""></span></button>
                </router-link>
            </div>
        </div>
        <div class="card">
            <h3>Doce</h3>
            <p>Os melhores doces fresquinhos e com os melhores preços da região</p>
            <div class="container-button-card">
                <router-link to="/candy">
                    <button type="button">Ir a página <span><img src="@/assets/icons/vector.svg" alt=""></span></button>
                </router-link>
            </div>
        </div>
        <div class="card">
            <h3>Pães</h3>
            <p>Os melhores pães fresquinhos e com os melhores preços da região</p>
            <div class="container-button-card">
                <router-link to="/breads">
                    <button type="button">Ir a página <span><img src="@/assets/icons/vector.svg" alt=""></span></button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container-cards {
    display: flex;
    justify-content: center;
    column-gap: 30px;
    margin: 10% 0 8% 0;
}
.card {
    width: 250px;
    height: 250px;
    padding: 5px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
    border: 1px solid #000;
    border-radius: 8px;
}

.card > h3 {
    font-family: 'DM Serif Display', serif;
    font-weight: 400;
}

.card > p {
    flex-grow: 3;
    font-family: 'Poppins', sans-serif;
    text-align: center;
}

.container-button-card > a > button {
    width: 175px;
    height: 30px;
    margin-bottom: 10px;
    border: 1px solid #000;
    border-radius: 15px;
    background: transparent;
    cursor: pointer;
}

.container-button-card > a > button > span {
    position: relative;
    left: 5px;
}
</style>