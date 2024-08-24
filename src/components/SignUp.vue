<script setup>
import SubmitButton from './SubmitButton.vue';
</script>

<template>
    <div class="sign-container">
        <h1>Cadastre-se</h1>
        <p>Preencha suas informações</p>

    <div class="form-group inputBox">
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder=" ">
         <label class="email labelInput" for="email">Email</label>
    </div>
    <div class="form-group inputBox">
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder=" ">
         <label class="email labelInput" for="email">Nome de usuário</label>
    </div>
    <div class="form-group inputBox">
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder=" ">
         <label class="email labelInput" for="email">Senha</label>
    </div>
    <div class="form-group inputBox">
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder=" ">
         <label class="email labelInput" for="email">Confirmar Senha</label>
    </div>

    <p>Já possui cadastro?</p>

        <SubmitButton title="Criar conta" class="button"/>
    </div>
</template>

<style  scoped>
    @import '../assets/Sass/Components/SignUp/_signUp.scss';
</style>