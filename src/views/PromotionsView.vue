<script setup>
</script>

<template>
  <div>
    <div class="main-breads">
      <h1>Promoção</h1>
      <div class="type-breads">
        <div class="breads">
          <img src="../assets/images/promotions/acai.jpg" alt="">
          <div class="container-sale">
            <span class="sale">-10%</span>
          </div>
          <div class="card-body">
            <div class="card-header">
              <h1>Açaí</h1>
            </div>
            <div class="card-info">
              <p>Promoções do dia</p>
              <p>Até durarem os estoques</p>
            </div>
            <div class="page">
              <p>Ir A Página</p>
              <img src="@/assets/icons/vector.svg" class="icons" alt="">
            </div>
          </div>
        </div>
        <div class="breads">
          <img src="../assets/images/promotions/bolo-cenoura.jpg" alt="">
          <div class="container-sale">
            <span class="sale">-10%</span>
          </div>
          <div class="card-body">
            <div class="card-header">
              <h1>Bolo de Cenoura</h1>
            </div>
            <div class="card-info">
              <p>Promoções do dia</p>
              <p>Até durarem os estoques</p>
            </div>
            <div class="page">
              <p>Ir A Página</p>
              <img src="@/assets/icons/vector.svg" class="icons" alt="">
            </div>
          </div>
        </div>
        <div class="breads">
          <img src="../assets/images/promotions/brigadeiro-morango.jpg" alt="">
          <div class="container-sale">
            <span class="sale">-10%</span>
          </div>
          <div class="card-body">
            <div class="card-header">
              <h1>Bicho de Pé</h1>
            </div>
            <div class="card-info">
              <p>Promoções do dia</p>
              <p>Até durarem os estoques</p>
            </div>
            <div class="page">
              <p>Ir A Página</p>
              <img src="@/assets/icons/vector.svg" class="icons" alt="">
            </div>
          </div>
        </div>
        <div class="breads">
          <img src="../assets/images/promotions/cafe-espresso.jpg" alt="">
          <div class="container-sale">
            <span class="sale">-10%</span>
          </div>
          <div class="card-body">
            <div class="card-header">
              <h1>Café Espresso</h1>
            </div>
            <div class="card-info">
              <p>Promoções do dia</p>
              <p>Até durarem os estoques</p>
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
          <img src="../assets/images/promotions/pao-de-baguete.jpg" alt="">
          <div class="container-sale">
            <span class="sale">-10%</span>
          </div>
          <div class="card-body">
            <div class="card-header">
              <h1>Pão de Baguete</h1>
            </div>
            <div class="card-info">
              <p>Promoções do dia</p>
              <p>Até durarem os estoques</p>
            </div>
            <div class="page">
              <p>Ir A Página</p>
              <img src="@/assets/icons/vector.svg" class="icons" alt="">
            </div>
          </div>
        </div>
        <div class="breads">
          <img src="../assets/images/promotions/capuccino.jpg" alt="">
          <div class="container-sale">
            <span class="sale">-10%</span>
          </div>
         <div class="card-body">
            <div class="card-header">
              <h1>Capuccino</h1>
            </div>
            <div class="card-info">
              <p>Promoções do dia</p>
              <p>Até durarem os estoques</p>
            </div>
            <div class="page">
              <p>Ir A Página</p>
              <img src="@/assets/icons/vector.svg" class="icons" alt="">
            </div>
          </div>
        </div>
        <div class="breads">
          <div class="card-bread">
            <img src="../assets/images/promotions/bolo-coco.jpg" alt="">
            <div class="container-sale">
              <span class="sale">-10%</span>
            </div>
          </div>
          <div class="card-body">
            <div class="card-header">
              <h1>Bolo de Coco</h1>
            </div>
            <div class="card-info">
              <p>Promoções do dia</p>
              <p>Até durarem os estoques</p>
            </div>
            <div class="page">
              <p>Ir A Página</p>
              <img src="@/assets/icons/vector.svg" class="icons" alt="">
            </div>
          </div>
        </div>
        <div class="breads">
          <img src="../assets/images/promotions/pao-tigre.jpg" alt="">
          <div class="container-sale">
            <span class="sale">-10%</span>
          </div>
          <div class="card-body">
            <div class="card-header">
              <h1>Pão Tigre</h1>
            </div>
            <div class="card-info">
              <p>Promoções do dia</p>
              <p>Até durarem os estoques</p>
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
.container-sale {
  display: flex;
  justify-content: flex-end;
  position: relative;
  bottom: 30px;
}
.sale {
  background-color: #000;
  color: red;
  padding: 2px;
  border-radius: 3px 3px 0 0;
}
.card-header {
  position: relative;
  bottom: 20px;
}
.card-header h1 {
  margin: 10px 0px 15px 0px;
}
.card-info {
  position: relative;
  bottom: 22px;
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
  position: relative;
  bottom: 22px;
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