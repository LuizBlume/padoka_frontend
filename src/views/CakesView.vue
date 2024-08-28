<script setup>

</script>


<template>
  <div>
    <div class="main-breads">
      <h1>Bolos</h1>
      <div class="type-breads">
        <div class="breads">
          <img src="../assets/images/cakes/bolo-cenoura.jpg" alt="">
          <div class="card-body">
            <div class="card-header">
              <h1>Bolo de Cenoura</h1>
            </div>
            <div class="card-info">
              <p>Feitos todos os dias</p>
              <p>E acima de 3, sob encomendas</p>
            </div>
            <div class="page">
              <p>Ir A Página</p>
              <img src="@/assets/icons/Vector.svg" class="icons" alt="">
            </div>
          </div>
        </div>
        <div class="breads">
          <img src="../assets/images/cakes/bolo-coco.jpg" alt="">
          <div class="card-body">
            <div class="card-header">
              <h1>Bolo de Coco</h1>
            </div>
            <div class="card-info">
              <p>Feitos todos os dias</p>
              <p>E acima de 3, sob encomendas</p>
            </div>
            <div class="page">
              <p>Ir A Página</p>
              <img src="@/assets/icons/Vector.svg" class="icons" alt="">
            </div>
          </div>
        </div>
        <div class="breads">
          <img src="../assets/images/cakes/bolo-fuba.jpg" alt="">
          <div class="card-body">
            <div class="card-header">
              <h1>Bolo de Fubá</h1>
            </div>
            <div class="card-info">
              <p>Feitos todos os dias</p>
              <p>E acima de 3, sob encomendas</p>
            </div>
            <div class="page">
              <p>Ir A Página</p>
              <img src="@/assets/icons/Vector.svg" class="icons" alt="">
            </div>
          </div>
        </div>
        <div class="breads">
          <img src="../assets/images/cakes/bolo-milho.jpg" alt="">
          <div class="card-body">
            <div class="card-header">
              <h1>Bolo de Milho</h1>
            </div>
            <div class="card-info">
              <p>Feitos todos os dias</p>
              <p>E acima de 3, sob encomendas</p>
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
          <img src="../assets/images/cakes/bolo-morango.jpg" alt="">
          <div class="card-body">
            <div class="card-header">
              <h1>Bolo de Morango</h1>
            </div>
            <div class="card-info">
              <p>Feitos todos os dias</p>
              <p>E acima de 3, sob encomendas</p>
            </div>
            <div class="page">
              <p>Ir A Página</p>
              <img src="@/assets/icons/Vector.svg" class="icons" alt="">
            </div>
          </div>
        </div>
        <div class="breads">
          <img src="../assets/images/cakes/bolo-suspiro.jpg" alt="">
         <div class="card-body">
            <div class="card-header">
              <h1>Bolo de Suspiro</h1>
            </div>
            <div class="card-info">
              <p>Feitos todos os dias</p>
              <p>E acima de 3, sob encomendas</p>
            </div>
            <div class="page">
              <p>Ir A Página</p>
              <img src="@/assets/icons/Vector.svg" class="icons" alt="">
            </div>
          </div>
        </div>
        <div class="breads">
          <div class="card-bread">
            <img src="../assets/images/cakes/bolo-pote.jpeg" alt="">
          </div>
          <div class="card-body">
            <div class="card-header">
              <h1>Bolo de Pote</h1>
            </div>
            <div class="card-info">
              <p>Feitos todos os dias</p>
              <p>E acima de 3, sob encomendas</p>
            </div>
            <div class="page">
              <p>Ir A Página</p>
              <img src="@/assets/icons/Vector.svg" class="icons" alt="">
            </div>
          </div>
        </div>
        <div class="breads">
          <img src="../assets/images/cakes/nega-maluca.jpg" alt="">
          <div class="card-body">
            <div class="card-header">
              <h1>Nega Maluca</h1>
            </div>
            <div class="card-info">
              <p>Feitos todos os dias</p>
              <p>E acima de 3, sob encomendas</p>
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
