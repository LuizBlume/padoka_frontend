<script setup>
</script>
<template>
  <div class="container">
    <h1>Login</h1>
    <p>Preencha suas informações</p>
    <form class="form">
      <div class="form-group inputBox">
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder=" ">
        <label class="email labelInput" for="email">Email</label>
      </div>
        <div class="form-group inputBox">
          <input type="password" class="form-control input-user" id="password" placeholder=" ">
          <label class="email labelInput" for="password">Senha</label>
        </div>
        <button type="submit" class="btn btn-primary">Entrar</button>
    </form>
  </div>
</template>
<style scoped>
@import '../assets/Sass/Components/SignIn/_signIn.scss';
</style>