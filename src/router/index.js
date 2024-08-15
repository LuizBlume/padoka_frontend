import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: import('../layouts/DefaultLayout.vue'),
      children: [
        {
          path: "",
          name: "home",
          component: import('../views/HomeView.vue')
        },
        {
          path: "/contributors",
          name: "contributors",
          component: import('../views/ContributorsView.vue')
        },
        {
          path: "/best-sellers",
          name: "best-sellers",
          component: import('../views/BestSellersView.vue')
        },
        {
          path: "/cakes",
          name: "cakes",
          component: import('../views/CakesView.vue')
        },
        {
          path: "/coffes",
          name: "coffes",
          component: import('../views/CoffesView.vue')
        },
        {
          path: "/candy",
          name: "candy",
          component: import('../views/CandyView.vue')
        },
        {
          path: "/breads",
          name: "breads",
          component: import('../views/BreadsView.vue')
        },
        {
          path: "/promotions",
          name: "promotions",
          component: import('../views/PromotionsView.vue')
        },
        {
          path: "/orders",
          name: "orders",
          component: import('../views/OrdersView.vue')
        },
        {
          path: "/stock",
          name: "stock",
          component: import('../views/StockView.vue')
        },
        {
          path: "/supplier-purchases",
          name: "supplier-purchases",
          component: import('../views/SupplierPurchasesView.vue')
        },
        {
          path: "/suppliers",
          name: "suppliers",
          component: import('../views/SuppliersView.vue')
        },
        {
          path: "/product/:id",
          name: "product",
          component: import('../views/ProductView.vue'),
          params: true
        },
        {
          path: "signIn",
          name: "signIn",
          component: import('../views/SignInView.vue')
        }
      ]
    }
  ]
})

export default router
