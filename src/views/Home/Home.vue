<template>
  <div class="home">
    <header>
      <div class="wrapper">
        <div class="top">
          <div class="inner_wrapper">
            <div>
              <img :src="this.data.avatar" alt="商家头像" class="img" />
            </div>
            <div class="desc">
              <p class="brand" v-cloak>
                <img src="../../assets/img/brand@2x.png" alt />
                {{this.data.name}}
              </p>
              <p class="delivery_type" v-text="this.data.description">配送方式</p>
              <p class="support" v-cloak>
                <img src="../../assets/img/decrease_1@2x.png" alt />
                {{this.data.supports | supportsStr}}
              </p>
            </div>
            <div class="yoxi">5个</div>
          </div>
        </div>
        <div class="announce">
          <img src="../../assets/img/bulletin@2x.png" alt="公告" />
          <span v-text="this.data.bulletin"></span>
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
import { getSeller } from "../../api/ajax";
export default {
  name: "Home",
  data() {
    return {
      seletedTitle: "/",
      data: {}
    };
  },
  methods: {
    toPage(page) {
      this.seletedTitle = page;
      this.$router.push(page);
    }
  },
  filters: {
    supportsStr(arr) {
      if (arr) {
        return arr.map(v => v.description).join(",");
      } else {
        return "";
      }
    }
  },
  async created() {
    let result = await getSeller();
    this.data = result.data;
    // console.log(this.data);
  }
  // components: {}
};
</script>
<style lang="less" scoped>
[v-cloak] {
  display: none;
}
header {
  .wrapper {
    .top {
      background-color: rgba(7, 17, 27, 0.5);
      padding: 1.5rem 0.75rem 1.125rem 1.5rem;
      .inner_wrapper {
        display: flex;
        .img {
          flex: 0 0 4rem;
          height: 4rem;
          background-color: aquamarine;
          border-radius: 0.125rem;
        }
        .desc {
          padding: 0.125rem 1rem;
          display: flex;
          flex-flow: column;
          justify-content: space-around;
          color: #fff;
          .brand {
            img {
              height: 1.25rem;
            }
            font: bold 1rem/1.125rem "";
          }
          .delivery_type {
            font: 0.75rem/1 "";
          }
          .support {
            img {
              height: 0.75rem;
            }
            font: 0.625rem/0.75rem "";
          }
        }
      }
    }
    /**公告 */
    .announce {
      display: flex;
      align-items: center;
      padding: 0 0.75rem;
      height: 1.75rem;
      background-color: rgba(7, 17, 27, 0.2);
      img {
        // vertical-align: -0.65rem;
        height: 1rem;
      }
      span {
        flex: 1;
        padding: 0.25rem;
        line-height: 1.75rem;
        font-size: 0.6125rem;
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
    cursor: pointer;
  }
}
.active_title {
  color: rgb(240, 20, 20);
}
</style>
