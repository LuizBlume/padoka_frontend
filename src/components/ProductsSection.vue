<script setup>
import { ref, onMounted } from 'vue';
import { db } from '../../db';
import { useRequestStore } from '@/stores/request/request';

const products1 = ref([]);
const products2 = ref([]);
const useRequest = useRequestStore();

const props = defineProps({
    title: {type: String, required: true},
    categoryProduct: {type: String, required: true}
});

onMounted(() => {
  if (props.categoryProduct === 'promotions') {
    const products = db.products.filter(product => product.promotion === true);
    products1.value = products.slice(0, 4);
    products2.value = products.slice(4, 8);

    for (let c = 0; c < products1.value.length; c++) {
      if (c >= 4) {
        products2.value[c - 4].quantity = 0;
      } else {
        products1.value[c].quantity = 0;
      }
    }
  }
  else {
    const products = db.products.filter(product => product.category === props.categoryProduct);
    products1.value = products.slice(0, 4);
    products2.value = products.slice(4, 8);

    for (let c = 0; c < products1.value.length + products2.value.length; c++) {
      if (c >= 4) {
        products2.value[c - 4].quantity = 0
      } else {
        products1.value[c].quantity = 0;
      }
    }
  }
});

function createURL(imagePath) {
  return new URL(imagePath, import.meta.url).href;
}

</script>

<template>
  <div>
      <div class="main-breads">
        <h1>{{ props.title }}</h1>
        <div class="type-breads">
          <div v-for="(product, productIndex) in products1" :key="productIndex" class="breads">
              <img :src="createURL(product.image)" alt="">
              <div class="card-body">
                <div class="card-header">
                  <h1>{{ product.name }}</h1>
                </div>
                <div class="card-info">
                  <p>{{ product.description }}</p>
                  <p>{{ product.description_2 }}</p>
                </div>
            </div>
              <div class="page">
                <button class="buttonQuantity" @click="product.quantity += 1; useRequest.findIndexRequest(product, 'sum');">+</button>
                <p>{{ product.quantity }}</p>
                <button class="buttonQuantity" @click="product.quantity -= 1; useRequest.findIndexRequest(product, 'sub');">-</button>
              </div>
          </div>
        </div>

        <div class="type-breads">
          <div v-for="(product, productIndex) in products2" :key="productIndex" class="breads">
              <img :src="createURL(product.image)" alt="">
              <div class="card-body">
                <div class="card-header">
                  <h1>{{ product.name }}</h1>
                </div>
                <div class="card-info">
                  <p>{{ product.description }}</p>
                  <p>{{ product.description_2 }}</p>
                </div>
            </div>
            <div class="page">
                <button class="buttonQuantity" @click="product.quantity += 1; useRequest.findIndexRequest(product, 'sum')">+</button>
                <p>{{ product.quantity }}</p>
                <button class="buttonQuantity" @click="product.quantity -= 1; useRequest.findIndexRequest(product, 'sub')">-</button>
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
    justify-content: space-evenly;
    align-items: center;
    width: 201.168px;
    height: 34px;
    flex-shrink: 0;
    border-radius: 25px;
    border: 1px solid #000;
    background: #FFF;
    margin: 20px auto 0; 
  }

  .buttonQuantity {
    width: 20px;
    font-size: 1.2rem;
    background: transparent;
    border: 1px solid #000;
    cursor: pointer;
  }
  </style>