<script setup>
</script>

<template>
  <header>
    <div class="links-header">
      <router-link class="link">Bolos</router-link>
      <router-link class="link">Cafés</router-link>
      <router-link class="link">Doces</router-link>
      <router-link class="link">Pães</router-link>
      <router-link class="link">Promoções</router-link>
    </div>
  </header>
  
</template>

<style scoped>

header {
  width: 1440px;
  height: 100px;
  flex-shrink: 0;
}

.links-header {
  height: 100px;
  margin-top: 50px;
}

.link {
  color: #000;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration: none;
}

</style>