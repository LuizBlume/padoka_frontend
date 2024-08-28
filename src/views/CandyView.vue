<script setup>

</script>


<template>
  <div>
    <div class="main-breads">
      <h1>Doces</h1>
      <div class="type-breads">
        <div class="breads">
          <img src="../assets/images/candy/sonho.jpg" alt="">
          <div class="card-body">
            <div class="card-header">
              <h1>Sonho</h1>
            </div>
            <div class="card-info">
              <p>Feito na hora e quentinho</p>
              <p>Os melhores doces da região</p>
            </div>
            <div class="page">
              <p>Ir A Página</p>
              <img src="@/assets/icons/Vector.svg" class="icons" alt="">
            </div>
          </div>
        </div>
        <div class="breads">
          <img src="../assets/images/candy/churros.jpg" alt="">
          <div class="card-body">
            <div class="card-header">
              <h1>Churros</h1>
            </div>
            <div class="card-info">
              <p>Feito na hora e quentinho</p>
              <p>Os melhores doces da região</p>
            </div>
            <div class="page">
              <p>Ir A Página</p>
              <img src="@/assets/icons/Vector.svg" class="icons" alt="">
            </div>
          </div>
        </div>
        <div class="breads">
          <img src="../assets/images/candy/acai.jpg" alt="">
          <div class="card-body">
            <div class="card-header">
              <h1>Açaí</h1>
            </div>
            <div class="card-info">
              <p>Montado na hora do jeito que quiser</p>
              <p>Os melhores doces da região</p>
            </div>
            <div class="page">
              <p>Ir A Página</p>
              <img src="@/assets/icons/Vector.svg" class="icons" alt="">
            </div>
          </div>
        </div>
        <div class="breads">
          <img src="../assets/images/candy/brigadeiro-morango.jpg" alt="">
          <div class="card-body">
            <div class="card-header">
              <h1>Bicho de pé</h1>
            </div>
            <div class="card-info">
              <p>Feito na hora e quentinho</p>
              <p>Os melhores doces da região</p>
            </div>
            <div class="page">
              <p>Ir A Página</p>
              <img src="@/assets/icons/Vector.svg" class="icons" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="type-breads">
        <div class="breads">
          <img src="../assets/images/candy/brigadeiro.jpg" alt="">
          <div class="card-body">
            <div class="card-header">
              <h1>Brigadeiro</h1>
            </div>
            <div class="card-info">
              <p>Feito na hora e quentinho</p>
              <p>Os melhores doces da região</p>
            </div>
            <div class="page">
              <p>Ir A Página</p>
              <img src="@/assets/icons/Vector.svg" class="icons" alt="">
            </div>
          </div>
        </div>
        <div class="breads">
          <img src="../assets/images/candy/croissant-morango.jpg" alt="">
         <div class="card-body">
            <div class="card-header">
              <h1>Croissant</h1>
            </div>
            <div class="card-info">
              <p>Feito na hora e quentinho</p>
              <p>Os melhores doces da região</p>
            </div>
            <div class="page">
              <p>Ir A Página</p>
              <img src="@/assets/icons/Vector.svg" class="icons" alt="">
            </div>
          </div>
        </div>
        <div class="breads">
          <div class="card-bread">
            <img src="../assets/images/candy/donnuts.jpg" alt="">
          </div>
          <div class="card-body">
            <div class="card-header">
              <h1>Donnuts</h1>
            </div>
            <div class="card-info">
              <p>Feito na hora e quentinho</p>
              <p>Os melhores doces da região</p>
            </div>
            <div class="page">
              <p>Ir A Página</p>
              <img src="@/assets/icons/Vector.svg" class="icons" alt="">
            </div>
          </div>
        </div>
        <div class="breads">
          <img src="../assets/images/candy/orelha-de-gato.png" alt="">
          <div class="card-body">
            <div class="card-header">
              <h1>Orelha de Gato</h1>
            </div>
            <div class="card-info">
              <p>Feito na hora e quentinho</p>
              <p>Os melhores doces da região</p>
            </div>
            <div class="page">
              <p>Ir A Página</p>
              <img src="@/assets/icons/Vector.svg" class="icons" alt="">
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


