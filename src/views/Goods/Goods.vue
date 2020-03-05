<template>
  <div id="goods">
    <div class="menu">
      <ul class="content">
        <li
          :id="i"
          :class="{ actived: true }"
          v-for="(v,i) of goodsData"
          :key="i"
          @click="clickMemu(i)"
          v-cloak
        >{{v['name']}}</li>
      </ul>
    </div>
    <div class="details">
      <ul class="content">
        <div v-for="(v,i) of goodsData" :key="i">
          <div v-text="v['name']"></div>
          <div v-for="(items,i) of v['foods']" :key="i">
            <img style="width:114px;height:114px" :src="items['icon']" alt />
            {{items['name']}}
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      selected: 0,
      goodsData: [
        {
          name: "热销榜",
          type: -1,
          foods: [
            {
              name: "皮蛋瘦肉粥",
              price: 10,
              oldPrice: "",
              description: "咸粥",
              sellCount: 229,
              rating: 100,
              info:
                "一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足",
              ratings: [
                {
                  username: "3******c",
                  rateTime: 1469281964000,
                  rateType: 0,
                  text: "很喜欢的粥",
                  avatar:
                    "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }
              ],
              icon:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              image:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
            }
          ]
        },
        {
          name: "单人特色套餐",
          type: -1,
          foods: [
            {
              name: "皮蛋瘦肉粥配包子套餐",
              price: 24,
              oldPrice: "",
              description: "咸粥",
              sellCount: 229,
              rating: 100,
              info:
                "一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足",
              ratings: [
                {
                  username: "3******c",
                  rateTime: 1469281964000,
                  rateType: 0,
                  text: "很喜欢的粥",
                  avatar:
                    "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }
              ],
              icon:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              image:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
            }
          ]
        },
        {
          name: "特色粥品",
          type: -1,
          foods: [
            {
              name: "莲子核桃黑米粥",
              price: 10,
              oldPrice: "",
              description: "咸粥",
              sellCount: 229,
              rating: 100,
              info:
                "一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足",
              ratings: [
                {
                  username: "3******c",
                  rateTime: 1469281964000,
                  rateType: 0,
                  text: "很喜欢的粥",
                  avatar:
                    "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }
              ],
              icon:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              image:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
            },
            {
              name: "雪梨银耳百合粥",
              price: 24,
              oldPrice: "",
              description: "咸粥",
              sellCount: 229,
              rating: 100,
              info:
                "一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足",
              ratings: [
                {
                  username: "3******c",
                  rateTime: 1469281964000,
                  rateType: 0,
                  text: "很喜欢的粥",
                  avatar:
                    "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }
              ],
              icon:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              image:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
            },
            {
              name: "南瓜粥",
              price: 24,
              oldPrice: "",
              description: "咸粥",
              sellCount: 229,
              rating: 100,
              info:
                "一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足",
              ratings: [
                {
                  username: "3******c",
                  rateTime: 1469281964000,
                  rateType: 0,
                  text: "很喜欢的粥",
                  avatar:
                    "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                }
              ],
              icon:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
              image:
                "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
            }
          ]
        }
      ],
      menu: {}
    };
  },
  created() {},
  mounted() {
    // this.menu = new BScroll(".menu", { click: true });
  },
  updated() {
    this.menu = new BScroll(".menu", { click: true });
  },
  methods: {
    clickMemu(num) {
      console.log(num);
    }
  }
};
</script>

<style lang="less" scoped>
#goods {
  .actived {
    background-color: #fff;
    font-weight: bold;
  }
  display: flex;
  .menu {
    overflow: scroll;
    flex: 0 0 5rem;
    height: 30rem;
    ul {
      display: flex;
      flex-flow: column;
      li {
        flex: 0 0 5rem;
        width: 5rem;
        background-color: #ccc;
        text-indent: 0.625rem;
        padding-top: 1.25rem;
      }
      li + li {
        border-top: 1px solid #fff;
      }
    }
  }
  .details {
    overflow: scroll;
    height: 30rem;
    ul {
      display: flex;
      flex-flow: column;
      div {
        flex: 1;
        text-indent: 0.625rem;
      }
    }
  }
}
</style>