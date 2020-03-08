import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import { getGoods } from '../api/ajax';
export default new Vuex.Store({
  state: {
    num: 0,
    goodsData: []
  },
  mutations: {
    initGoodsData: (state, obj) => (state.goodsData = obj.data),
    changeNum(state, data) {
      for (let obj of state.goodsData) {
        for (let item of obj.foods) {
          if (item.name == data.name) {
            item.num += data.num;
            return;
          }
        }
      }
    }
  },
  actions: {
    async initGoodsData(context) {
      let goods = await getGoods();
      let arr = goods.data.data;
      arr.forEach(obj => obj.foods.forEach(v => (v.num = 0)));
      context.commit({
        type: 'initGoodsData',
        data: arr
      });
    }
  },
  getters: {
    getShopCartGoods(state) {
      let newArr = [];
      for (let obj of state.goodsData) {
        for (let item of obj.foods) {
          if (item.num > 0) {
            newArr.push(item);
          }
        }
      }
      return newArr;
    }
  }
});
