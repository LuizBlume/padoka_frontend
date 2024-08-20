<script setup>
</script>

<template>
  <header>
    <div class="container-header">
      <div class="links-header">
        <router-link class="link">Bolos</router-link>
        <router-link class="link">Cafés</router-link>
        <router-link class="link">Doces</router-link>
        <router-link class="link">Pães</router-link>
        <router-link class="link">Promoções</router-link>
      </div>
      <div class="container-logo">
        <img src="@/assets/logo.png" alt="">
      </div>
      <div class="nav-buttons">
        <div class="container-search">
          <input type="search" placeholder="O que você procura?" id="inputSearch">
          <img src="@/assets/icons/search.svg" class="icons" alt="">
        </div>

        <div class="container-profile">
          <img src="@/assets/icons/profile.svg" class="icons" alt="">
        </div>

        <div class="container-shop">
          <img src="@/assets/icons/shop.svg" class="icons" alt="">
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>

header {
  padding: 20px 0;
}

.container-header {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.links-header {
  display: flex;
  column-gap: 30px;
}

.links-header > a {
  font-family: 'Poppins', sans-serif;
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

.nav-buttons {
  display: flex;
  column-gap: 30px;
}

#inputSearch {
  width: 200px;
  height: 20px;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  border: none;
  border-bottom: 2px solid black;
  outline: none;
  padding-left: 2px;
}

#inputSearch::placeholder {
  position: relative;
  bottom: 1px;
  font-weight: normal;
  font-size: 16px;
  letter-spacing: .5px;
  padding-left: 2px;
}

input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  display: none; 
}

.container-search, .container-profile, .container-shop {
  padding: 0 10px;
}

.icons {
  width: 30px;
  height: 30px;
}
</style>