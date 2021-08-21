import Vue from "vue"
import VueRouter from "vue-router"
import Goods from "../views/goods/Goods.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Goods",
    component: Goods,
  },
  {
    path: "/evaluate",
    name: "Evaluate",
    component: () => import("../views/evaluate/Evaluate.vue"),
  },
  {
    path: "/merchant",
    name: "Merchant",
    component: () => import("../views/merchant/Merchant.vue"),
  },
]

const router = new VueRouter({
  routes,
})

export default router
