<script setup>

</script>


<template>
  <div class="container-contributors">
    <div class="menu-contributors">
      <div class="header-contributors">
        <p>Top 5 contribuidores</p>
        <img src="@/assets/icons/medal 1.png" class="icons" alt="">
      </div>
      <div class="main-contributors">
        <div class="contributor">
          <img src="@/assets/icons/perfil.png" class="perfil" alt="">
          <p>Laura Menezes Costa</p>
        </div>
      </div>
      <div class="main-contributors">
        <div class="contributor">
          <img src="@/assets/icons/perfil.png" class="perfil" alt="">
          <p>Laura Menezes Costa</p>
        </div>
      </div>
      <div class="main-contributors">
        <div class="contributor">
          <img src="@/assets/icons/perfil.png" class="perfil" alt="">
          <p>Laura Menezes Costa</p>
        </div>
      </div>
      <div class="main-contributors">
        <div class="contributor">
          <img src="@/assets/icons/perfil.png" class="perfil" alt="">
          <p>Laura Menezes Costa</p>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>

.container-contributors {
  display: flex;
  width: 700px;
  height: 721px;
  justify-content: center;
  align-items: center;
  margin: auto;
}

.menu-contributors {
  width: 500px;
  height: 615px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
}

.header-contributors {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-family: Poppins;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 124%;
  text-align: center;
  margin-bottom: 20px;
}

.header-contributors p {
  margin-right: 10px;
}

.main-contributors {
  width: 100%;
  height: 105.379px;
  flex-shrink: 0;
  border: 1px solid black;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

.contributor {
  display: flex; 
  justify-content: center; 
  align-items: center; 
  color: #000;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;
}

.icons {
  width: 36px; 
  height: auto;
  margin-right: 10px;
}

.perfil {
  width: 60px;
  height: 51.826px;
  flex-shrink: 0;
  margin: 26.78px 25px 26.78px 5px;
}
</style>

