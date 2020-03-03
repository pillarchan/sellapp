<template>
  <div class="home">
    <header>
      <div class="wrapper">
        <div class="top">顶部</div>
        <div class="announce">
          <img src="../../assets/img/bulletin@2x.png" alt="公告" />
          <span v-text="announce"></span>
        </div>
      </div>
    </header>
    <nav>
      <div :class="{active_title:seletedTitle=='/'}" @click="toPage('/')">商品</div>
      <div :class="{active_title:seletedTitle=='/appraise'}" @click="toPage('/appraise')">评价</div>
      <div :class="{active_title:seletedTitle=='/merchant'}" @click="toPage('/merchant')">商家</div>
    </nav>
    <router-view></router-view>
    <footer>底部</footer>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  data() {
    return {
      seletedTitle: "/",
      announce: "好好吃好好吃 "
    };
  },
  methods: {
    toPage(page) {
      this.seletedTitle = page;
      this.$router.push(page);
    }
  }
  // components: {}
};
</script>
<style lang="less" scoped>
header {
  .wrapper {
    .top {
      background-color: rgba(7, 17, 27, 0.5);
    }
    .announce {
      padding: 0 1.5rem;
      height: 3.5rem;
      background-color: rgba(7, 17, 27, 0.2);
      img {
        vertical-align: text-bottom;
      }
      span {
        padding: 0.5rem;
        line-height: 3.5rem;
        font-size: 1.25rem;
        font-weight: 200;
        color: #fff;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
}
nav {
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  display: flex;
  height: 5rem;
  justify-content: space-around;
  align-items: center;
  div {
    flex: 1;
    text-align: center;
    font-size: 1.75rem;
  }
}
.active_title {
  color: rgb(240, 20, 20);
}
</style>
