<script setup>

</script>


<template>
  <div>
    <div class="main-breads">
      <h1>Cafés</h1>
      <div class="type-breads">
        <div class="breads">
          <img src="../assets/images/coffe/cafe-preto.jpg" alt="">
          <div class="card-body">
            <div class="card-header">
              <h1>Café Preto</h1>
            </div>
            <div class="card-info">
              <p>Feito na hora e quentinho</p>
              <p>O melhor café da região</p>
            </div>
            <div class="page">
              <p>Ir A Página</p>
              <img src="@/assets/icons/Vector.svg" class="icons" alt="">
            </div>
          </div>
        </div>
        <div class="breads">
          <img src="../assets/images/coffe/cafe-chantilly.jpg" alt="">
          <div class="card-body">
            <div class="card-header">
              <h1>Café c/ Chantilly</h1>
            </div>
            <div class="card-info">
              <p>Feito na hora e quentinho</p>
              <p>O melhor café da região</p>
            </div>
            <div class="page">
              <p>Ir A Página</p>
              <img src="@/assets/icons/Vector.svg" class="icons" alt="">
            </div>
          </div>
        </div>
        <div class="breads">
          <img src="../assets/images/coffe/cafe-com-chocolate.jpg" alt="">
          <div class="card-body">
            <div class="card-header">
              <h1>Café c/ Chocolate</h1>
            </div>
            <div class="card-info">
              <p>Feito na hora e quentinho</p>
              <p>O melhor café da região</p>
            </div>
            <div class="page">
              <p>Ir A Página</p>
              <img src="@/assets/icons/Vector.svg" class="icons" alt="">
            </div>
          </div>
        </div>
        <div class="breads">
          <img src="../assets/images/coffe/cafe-com-leite.jpg" alt="">
          <div class="card-body">
            <div class="card-header">
              <h1>Café c/ Leite</h1>
            </div>
            <div class="card-info">
              <p>Feito na hora e quentinho</p>
              <p>O melhor café da região</p>
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
          <img src="../assets/images/coffe/cafe-cremoso.jpg" alt="">
          <div class="card-body">
            <div class="card-header">
              <h1>Café Cremoso</h1>
            </div>
            <div class="card-info">
              <p>Feito na hora e quentinho</p>
              <p>O melhor café da região</p>
            </div>
            <div class="page">
              <p>Ir A Página</p>
              <img src="@/assets/icons/Vector.svg" class="icons" alt="">
            </div>
          </div>
        </div>
        <div class="breads">
          <img src="../assets/images/coffe/cafe-espresso.jpg" alt="">
         <div class="card-body">
            <div class="card-header">
              <h1>Café Espresso</h1>
            </div>
            <div class="card-info">
              <p>Feito na hora e quentinho</p>
              <p>O melhor café da região</p>
            </div>
            <div class="page">
              <p>Ir A Página</p>
              <img src="@/assets/icons/Vector.svg" class="icons" alt="">
            </div>
          </div>
        </div>
        <div class="breads">
          <div class="card-bread">
            <img src="../assets/images/coffe/capuccino.jpg" alt="">
          </div>
          <div class="card-body">
            <div class="card-header">
              <h1>Capuccino</h1>
            </div>
            <div class="card-info">
              <p>Feito na hora e quentinho</p>
              <p>O melhor café da região</p>
            </div>
            <div class="page">
              <p>Ir A Página</p>
              <img src="@/assets/icons/Vector.svg" class="icons" alt="">
            </div>
          </div>
        </div>
        <div class="breads">
          <img src="../assets/images/coffe/cafe-pao-queijo.jpg" alt="">
          <div class="card-body">
            <div class="card-header">
              <h1>Combo</h1>
            </div>
            <div class="card-info">
              <p>Feito na hora e quentinho</p>
              <p>Pão de queijo + café</p>
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
