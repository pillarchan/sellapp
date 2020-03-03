import Vue from 'vue';
import VueRouter from 'vue-router';
import Goods from '../views/Goods/Goods.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Goods',
    component: Goods
  },
  {
    path: '/appraise',
    name: 'Appraise',
    component: () => import(/* webpackChunkName: "about" */ '../views/Appraise/Appraise.vue')
  },
  {
    path: '/merchant',
    name: 'Merchant',
    component: () => import(/* webpackChunkName: "about" */ '../views/Merchant/Merchant.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
