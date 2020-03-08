<template>
  <div>
    <h1>购物车</h1>
    <div v-for="(item,i) of shopCartGoods" :key="i">
      <span v-text="item.name"></span>
      <Icon type="md-remove-circle" @click="clickDecGoods(item.name)" v-show="item.num>0" />
      <span v-text="item['num']" v-show="item['num']>0"></span>
      <Icon type="md-add-circle" @click="clickAddGoods(item.name)" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    shopCartGoods() {
      return this.$store.getters.getShopCartGoods;
    }
  },
  methods: {
    clickAddGoods(name) {
      this.$store.commit({
        type: "changeNum",
        name,
        num: 1
      });
    },
    clickDecGoods(name) {
      this.$store.commit({
        type: "changeNum",
        name,
        num: -1
      });
    }
  }
};
</script>

<style lang="less" scoped>
div {
  background-color: #000;
  opacity: 0.8;
}
</style>