<script setup>
</script>

<template>
  <footer>
    <div class="container-footer">
      <div class="container-logo">
        <img src="@/assets/logo.png" alt="">
      </div>

      <div class="container-links">
        <div class="about-us">
          <h3>Sobre nós</h3>

          <p class="link">
            <a href="/" target="_blank">Política de privacidade</a>
          </p>
        </div>
        <div class="contact">
          <h3>Contato</h3>

          <p class="link">
            <a href="/" target="_blank">Nosso contato</a>
          </p>
        </div>
        <div class="address">
          <h3>Endereço</h3>

          <p class="link">Ulisses Guimarães, Joinville-SC</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: #F9F9F9;
  padding: 20px 0;
}
.container-footer {
  display: flex;
  justify-content: space-between;
  margin: 0 30px;
}

.container-links {
  display: flex;
}

.about-us, .contact, .address {
  width: 160px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.about-us > h3, .contact > h3, .address > h3 {
  font-family: 'DM Serif Display', serif;
  font-weight: 400;
}

.link {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  color: #505050;
}

.link > a {
  text-decoration: none;
  color: #505050;
}
</style>