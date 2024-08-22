<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="container-cards">
        <div class="card">
            <h3>Bolos</h3>
            <p>ipsumlorem ipsumlorem ipsumlorem ipsumlorem</p>
            <div class="container-button-card">
                <router-link to="/">
                    <button type="button">Ir a página <span><img src="@/assets/icons/vector.svg" alt=""></span></button>
                </router-link>
            </div>
        </div>
        <div class="card">
            <h3>Cafés</h3>
            <p>ipsumlorem ipsumlorem ipsumlorem ipsumlorem</p>
            <div class="container-button-card">
                <router-link to="/">
                    <button type="button">Ir a página <span><img src="@/assets/icons/vector.svg" alt=""></span></button>
                </router-link>
            </div>
        </div>
        <div class="card">
            <h3>Doce</h3>
            <p>ipsumlorem ipsumlorem ipsumlorem ipsumlorem</p>
            <div class="container-button-card">
                <router-link>
                    <button type="button" to="/">Ir a página <span><img src="@/assets/icons/vector.svg" alt=""></span></button>
                </router-link>
            </div>
        </div>
        <div class="card">
            <h3>Pães</h3>
            <p>ipsumlorem ipsumlorem ipsumlorem ipsumlorem</p>
            <div class="container-button-card">
                <router-link to="/">
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
    margin: 50px 0 80px 0;
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