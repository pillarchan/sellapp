<template>
  <div class="home">
    <header>
      <div class="wrapper">
        <div class="top">
          <div class="inner_wrapper">
            <div class="img"></div>
            <div class="desc">
              <p class="brand">
                <img src="../../assets/img/brand@2x.png" alt />
                品牌名
              </p>
              <p class="delivery_type">配送方式</p>
              <p class="support">
                <img src="../../assets/img/decrease_1@2x.png" alt />
                在线支持
              </p>
            </div>
            <div class="yoxi">5个</div>
          </div>
        </div>
        <div class="announce">
          <img src="../../assets/img/bulletin@3x.png" alt="公告" />
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
// import { getSeller } from "../../api/ajax.js";
import axios from "axios";
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
    },
    getSellerInfo() {
      axios
        .get("http://127.0.0.1:8080/public/seller.json")
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
    }
  },
  created() {
    console.log(this.getSellerInfo);
    this.getSellerInfo();
  }
  // components: {}
};
</script>
<style lang="less" scoped>
header {
  .wrapper {
    .top {
      background-color: rgba(7, 17, 27, 0.5);
      padding: 3rem 1.5rem 2.25rem 3rem;
      .inner_wrapper {
        display: flex;
        .img {
          flex: 0 0 8rem;
          height: 8rem;
          background-color: aquamarine;
          border-radius: 0.25rem;
        }
        .desc {
          padding: 0.25rem 2rem;
          .brand {
            font: bold 2rem/2.25rem "";
            color: #fff;
          }
          .delivery_type {
            font: 1.5rem/1.5rem "";
            color: #fff;
          }
          .support {
            font: 1.25rem/1.5rem "";
            color: #fff;
          }
        }
      }
    }
    /**公告 */
    .announce {
      padding: 0 1.5rem;
      height: 3.5rem;
      background-color: rgba(7, 17, 27, 0.2);
      img {
        vertical-align: -0.65rem;
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
