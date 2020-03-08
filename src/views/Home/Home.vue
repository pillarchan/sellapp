<template>
  <div class="home">
    <header>
      <div class="wrapper">
        <div class="top">
          <div class="inner_wrapper">
            <div>
              <img :src="this.sellerData.avatar" alt="商家头像" class="img" />
            </div>
            <div class="desc">
              <p class="brand" v-cloak>
                <img src="../../assets/img/brand@2x.png" alt />
                {{ this.sellerData.name }}
              </p>
              <p class="delivery_type" v-text="this.sellerData.description">配送方式</p>
              <p class="support" v-cloak>
                <img src="../../assets/img/decrease_1@2x.png" alt />
                {{ this.sellerData.supports | supportsStr }}
              </p>
            </div>
            <div class="yoxi">5个</div>
          </div>
        </div>
        <div class="announce">
          <img src="../../assets/img/bulletin@2x.png" alt="公告" />
          <span v-text="this.sellerData.bulletin"></span>
        </div>
      </div>
      <nav>
        <div :class="{ active_title: seletedTitle == '/' }" @click="toPage('/')">商品</div>
        <div :class="{ active_title: seletedTitle == '/appraise' }" @click="toPage('/appraise')">评价</div>
        <div :class="{ active_title: seletedTitle == '/merchant' }" @click="toPage('/merchant')">商家</div>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>

    <footer>
      <div id="shop_cart">
        <Poptip content="content" placement="top-start" width="300px">
          <Icon type="md-cart" class="md-cart" :class="{mdCartOrange:hasGoods}" />
          <div slot="content">
            <ShopCart />
          </div>
        </Poptip>
        <div class="total">
          <Icon type="logo-yen" />
          <span v-text="totalPrice"></span>
        </div>
        <Button type="default" ghost shape="circle">下单</Button>
      </div>
    </footer>
  </div>
</template>

<script>
import { getSeller } from "../../api/ajax";
import ShopCart from "./ShopCart";
export default {
  name: "Home",
  data() {
    return {
      seletedTitle: "/",
      sellerData: {},
      buttonSize: "large"
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
  computed: {
    hasGoods() {
      return this.$store.getters.getShopCartGoods.length > 0;
    },
    totalPrice() {
      let total = 0;
      for (let obj of this.$store.getters.getShopCartGoods) {
        total += obj.num * parseFloat(obj.price).toFixed(2);
      }
      return parseFloat(total).toFixed(2);
    }
  },
  async created() {
    let seller = await getSeller();
    this.sellerData = seller.data.data;
  },
  components: {
    ShopCart
  }
};
</script>
<style lang="less" scoped>
[v-cloak] {
  display: none;
}
.home {
  height: 100%;
  display: flex;
  flex-flow: column;
  header {
    flex: 0 0 10rem;
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
    nav {
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      display: flex;
      height: 2.5rem;
      justify-content: space-around;
      align-items: center;
      div {
        flex: 1;
        text-align: center;
        font-size: 1rem;
        cursor: pointer;
      }
    }
  }
  main {
    flex: 1;
  }
  .active_title {
    color: rgb(240, 20, 20);
  }
  footer {
    #shop_cart {
      position: fixed;
      bottom: 0;
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      height: 4rem;
      background-color: #000;
      color: #fff;
      font-size: 1.5rem;
      .md-cart {
        font-size: 3rem;
      }
      .mdCartOrange {
        color: orange;
      }
    }
  }
}
</style>
