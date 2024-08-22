<script setup>
</script>
<template>
    <div class="container">
        <div class="foto">
            <img src="https://avatars.githubusercontent.com/u/131203223?v=4" class="perfil" alt="Foto de perfil">
        </div>
        <div class="info">
            <form class="form">
                <div class="form-group inputBox">
                    <label class="email" for="email">Email</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="luiz.fernando.251107@gmail.com" disabled>
                </div>
                <div class="form-group inputBox">
                    <label class="email" for="password">Senha</label>
                    <input type="password" class="form-control input-user" id="password" placeholder="*********" disabled>
                </div>
                <button type="submit" class="btn btn-primary">Editar informações</button>
            </form>
        </div>
    </div>
</template>
<style scoped>
@import '../assets/Sass/components/Perfil/_perfil.scss'
</style>