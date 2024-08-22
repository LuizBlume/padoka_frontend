<script setup>
</script>

<template>
    <div class="container-cards">
        <div class="card">
            <h3>Bolos</h3>
            <p>ipsumlorem ipsumlorem ipsumlorem ipsumlorem</p>
        </div>
        <div class="card">
            <h3>Cafés</h3>
            <p>ipsumlorem ipsumlorem ipsumlorem ipsumlorem</p>
        </div>
        <div class="card">
            <h3>Doce</h3>
            <p>ipsumlorem ipsumlorem ipsumlorem ipsumlorem</p>
        </div>
        <div class="card">
            <h3>Pães</h3>
            <p>ipsumlorem ipsumlorem ipsumlorem ipsumlorem</p>
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
    width: 200px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #000;
    border-radius: 5px;
}
</style>