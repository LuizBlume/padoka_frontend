<script setup>
import { ref, onMounted } from 'vue';
import { useUserStore } from '@/stores/auth/user';

const useUser = useUserStore();
const user = {
    username: '',
    email: ''
}

onMounted(() => {
    useUser.getUser();
    user.username = useUser.userData.username
    user.email = useUser.userData.email
})
</script>
<template>
    <div class="container">
        <div class="foto">
            <img src="https://avatars.githubusercontent.com/u/131203223?v=4" class="perfil" alt="Foto de perfil">
        </div>
        <div class="info">
            <form class="form">
                <div class="form-group inputBox">
                    <label class="email" for="username">Nome</label>
                    <input type="text" class="form-control input-user" id="username" :value="useUser.userData.username" disabled>
                </div>
                <div class="form-group inputBox">
                    <label class="email" for="email">Email</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" :value="useUser.userData.email" disabled>
                </div>
                <button type="submit" class="btn btn-primary">Editar informações</button>
            </form>
        </div>
    </div>
</template>
<style scoped>
@import '../assets/Sass/components/Perfil/_perfil.scss'
</style>