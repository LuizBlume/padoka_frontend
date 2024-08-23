<script setup>
</script>

<template>
  <div>
    <div class="main-breads">
      <h1>Mais vendidos <span class="container-icon"><img class="best-seller-icon" src="@/assets/icons/best-seller.svg" alt=""></span></h1>
      <div class="type-breads">
        <div class="breads">
          <img src="@/assets/images/bolo.png" alt="">
          <div class="card-body">
            <div class="card-header">
              <h1>Bolos</h1>
            </div>
            <div class="card-info">
              <p>Loremipsum Loremipsum</p>
              <p>Loremipsum Loremipsum</p>
            </div>
            <div class="page">
              <p>Ir A Página</p>
              <img src="@/assets/icons/vector.svg" class="icons" alt="">
            </div>
          </div>
        </div>
        <div class="breads">
          <img src="@/assets/images/bolo.png" alt="">
          <div class="card-body">
            <div class="card-header">
              <h1>Bolos</h1>
            </div>
            <div class="card-info">
              <p>Loremipsum Loremipsum</p>
              <p>Loremipsum Loremipsum</p>
            </div>
            <div class="page">
              <p>Ir A Página</p>
              <img src="@/assets/icons/vector.svg" class="icons" alt="">
            </div>
          </div>
        </div>
        <div class="breads">
          <img src="@/assets/images/bolo.png" alt="">
          <div class="card-body">
            <div class="card-header">
              <h1>Bolos</h1>
            </div>
            <div class="card-info">
              <p>Loremipsum Loremipsum</p>
              <p>Loremipsum Loremipsum</p>
            </div>
            <div class="page">
              <p>Ir A Página</p>
              <img src="@/assets/icons/vector.svg" class="icons" alt="">
            </div>
          </div>
        </div>
        <div class="breads">
          <img src="@/assets/images/bolo.png" alt="">
          <div class="card-body">
            <div class="card-header">
              <h1>Bolos</h1>
            </div>
            <div class="card-info">
              <p>Loremipsum Loremipsum</p>
              <p>Loremipsum Loremipsum</p>
            </div>
            <div class="page">
              <p>Ir A Página</p>
              <img src="@/assets/icons/vector.svg" class="icons" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="type-breads">
        <div class="breads">
          <img src="@/assets/images/bolo.png" alt="">
          <div class="card-body">
            <div class="card-header">
              <h1>Bolos</h1>
            </div>
            <div class="card-info">
              <p>Loremipsum Loremipsum</p>
              <p>Loremipsum Loremipsum</p>
            </div>
            <div class="page">
              <p>Ir A Página</p>
              <img src="@/assets/icons/vector.svg" class="icons" alt="">
            </div>
          </div>
        </div>
        <div class="breads">
          <img src="@/assets/images/bolo.png" alt="">
         <div class="card-body">
            <div class="card-header">
              <h1>Bolos</h1>
            </div>
            <div class="card-info">
              <p>Loremipsum Loremipsum</p>
              <p>Loremipsum Loremipsum</p>
            </div>
            <div class="page">
              <p>Ir A Página</p>
              <img src="@/assets/icons/vector.svg" class="icons" alt="">
            </div>
          </div>
        </div>
        <div class="breads">
          <div class="card-bread">
            <img src="@/assets/images/bolo.png" alt="">
          </div>
          <div class="card-body">
            <div class="card-header">
              <h1>Bolos</h1>
            </div>
            <div class="card-info">
              <p>Loremipsum Loremipsum</p>
              <p>Loremipsum Loremipsum</p>
            </div>
            <div class="page">
              <p>Ir A Página</p>
              <img src="@/assets/icons/vector.svg" class="icons" alt="">
            </div>
          </div>
        </div>
        <div class="breads">
          <img src="@/assets/images/bolo.png" alt="">
          <div class="card-body">
            <div class="card-header">
              <h1>Bolos</h1>
            </div>
            <div class="card-info">
              <p>Loremipsum Loremipsum</p>
              <p>Loremipsum Loremipsum</p>
            </div>
            <div class="page">
              <p>Ir A Página</p>
              <img src="@/assets/icons/vector.svg" class="icons" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .main-breads {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
    flex-direction: column;
    padding: 50px;
  }
  .type-breads {
    display: flex;
    width: 1200px;
    height: 307px;
    justify-content: center;
    gap: 41px;
  }
  .main-breads {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
    flex-direction: column;
    padding: 50px;
  }
  .type-breads {
    display: flex;
    width: 1200px;
    height: 307px;
    justify-content: center;
    gap: 41px;
  }
.breads {
    width: 270px;
    height: 308px;
    flex-shrink: 0;
    border: 1px solid black;
    border-radius: 15px;
    justify-content: center;
    text-align: center;
  }
  .card-header h1 {
    margin: 10px 0px 15px 0px;
  }
  .container-icon {
    position: relative;
    top: 10px;
  }
  .best-seller-icon {
    width: 35px;
    height: 35px;
  }
  .breads p {
    padding: 3px;
  }
  .breads img {
    width: 268px;
    height: 114px;
    flex-shrink: 0;
    border-radius: 15px 15px 0px 0px;
  }
  .page {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 201.168px;
    height: 34px;
    flex-shrink: 0;
    border-radius: 25px;
    border: 1px solid #000;
    background: #FFF;
    margin: 20px auto 0; 
  }
  .page img {
    width: 12.01px;
    height: 12px;
    flex-shrink: 0;
    margin-left: 8px;
  }
</style>