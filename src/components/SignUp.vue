<script setup>
import SubmitButton from './SubmitButton.vue';
import { useUserStore } from '@/stores/auth/user';

const useUser = useUserStore();

function submitForm() {
    if (useUser.inputSignUp.password === useUser.inputSignUp.confirmPassword) {
        alert('Cadastro começado')
        useUser.createUser(useUser.inputSignUp);
    } else {
        alert('As senhas não são iguais!');
    }
}
</script>

<template>
    <div class="sign-container">
        <h1>Cadastre-se</h1>
        <p>Preencha suas informações</p>

    <div class="form-group inputBox">
        <input type="email" class="form-control" id="email" placeholder=" " v-model="useUser.inputSignUp.email">
        <label class="email labelInput" for="email">Email</label>
    </div>
    <div class="form-group inputBox">
        <input type="text" class="form-control" id="username" placeholder=" " v-model="useUser.inputSignUp.username">
         <label class="email labelInput" for="username">Nome de usuário</label>
    </div>
    <div class="form-group inputBox">
        <input type="password" class="form-control" id="password" placeholder=" " v-model="useUser.inputSignUp.password">
         <label class="email labelInput" for="password">Senha</label>
    </div>
    <div class="form-group inputBox">
        <input type="password" class="form-control" id="confirmPassword" placeholder=" " v-model="useUser.inputSignUp.confirmPassword">
         <label class="email labelInput" for="confirmPassword">Confirmar Senha</label>
    </div>

    <RouterLink to="/signIn">Já possui cadastro?</RouterLink>

    <SubmitButton @submit-form="submitForm" title="Criar conta" class="button"/>
    </div>
</template>

<style  scoped>
    @import '../assets/Sass/Components/SignUp/_signUp.scss';
</style>