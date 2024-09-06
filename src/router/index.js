import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from "@/stores/auth/auth";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import('../layouts/DefaultLayout.vue'),
      children: [
        {
          path: "",
          name: "home",
          component: () => import('../views/HomeView.vue')
        },
        {
          path: "contributors",
          name: "contributors",
          component: () => import('../views/ContributorsView.vue')
        },
        {
          path: "best-sellers",
          name: "best-sellers",
          component: () => import('../views/BestSellersView.vue')
        },
        {
          path: "requests",
          name: "requests",
          component: () => import('../views/RequestsView.vue')
        },
        {
          path: "cakes",
          name: "cakes",
          component: () => import('../views/CakesView.vue')
        },
        {
          path: "perfil",
          name: "perfil",
          component: () => import('../views/PerfilView.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: "coffes",
          name: "coffes",
          component: () => import('../views/CoffesView.vue')
        },
        {
          path: "candy",
          name: "candy",
          component: () => import('../views/CandyView.vue')
        },
        {
          path: "breads",
          name: "breads",
          component: () => import('../views/BreadsView.vue')
        },
        {
          path: "promotions",
          name: "promotions",
          component: () => import('../views/PromotionsView.vue')
        },
        {
          path: "orders",
          name: "orders",
          component: () => import('../views/OrdersView.vue')
        },
        {
          path: "stock",
          name: "stock",
          component: () => import('../views/StockView.vue')
        },
        {
          path: "supplier-purchases",
          name: "supplier-purchases",
          component: () => import('../views/SupplierPurchasesView.vue')
        },
        {
          path: "suppliers",
          name: "suppliers",
          component: () => import('../views/SuppliersView.vue')
        },
        {
          path: "product/:id",
          name: "product",
          component: () => import('../views/ProductView.vue'),
          params: true,
          meta: { requiresAuth: true },
        },
        {
          path: "signIn",
          name: "signIn",
          component: () => import('../views/SignInView.vue')
        },
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const useAuth = useAuthStore();
  
  if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!useAuth.verificationAuth() && (to.name === 'product' || to.name === 'perfil')) {
          next({name: 'signIn'});
      }
      else {
          next();
      }
  } else {
      next();
  }
})

export default router