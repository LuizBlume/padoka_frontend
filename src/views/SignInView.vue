<script setup>
</script>
<template>
  <div class="container">
    <h1>Login</h1>
    <p>Preencha suas informações</p>
    <form>
      <div class="form-group">
        <label class="email" for="email">Email</label>
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Seu email">
      </div>
        <div class="form-group">
            <label class="email" for="password">Senha</label>
            <input type="password" class="form-control" id="password" placeholder="Senha">
        </div>
        <button type="submit" class="btn btn-primary">Entrar</button>
    </form>
  </div>
</template>
<style scoped>
@import '../assets/Sass/Components/SignIn/_signIn.scss';
</style>