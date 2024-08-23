<script setup>
import SubmitButton from './SubmitButton.vue'
</script>

<template>
  <div class="newPassword-container">
    <h1>Digite sua nova senha</h1>
    <div class="inputs">
      <input type="text" placeholder="Digite sua nova senha"/>
      <input type="text" placeholder="Confirme sua senha"/>
    </div>
    <SubmitButton title="Enviar"/>
  </div>
</template>

<style scoped>
@import '../assets/Sass/components/NewPassword/_newPassword.scss';
</style>
