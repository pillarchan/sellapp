<template>
  <div id="goods">
    <!-- 左侧菜单 -->
    <div class="menu">
      <!-- 使用better-scroll 必须要有一个外层 类名必须命名为content -->
      <ul class="content">
        <!-- 循环后台提供的数据 -->
        <li :class="{ actived: selected == i }" v-for="(v, i) of goodsData" :key="i" @click="clickMemu(i)" v-cloak>
          {{ v['name'] }}
        </li>
      </ul>
    </div>
    <div class="details">
      <ul class="content">
        <!-- 绑定动态id用于左联右，选择dom对象 -->
        <div :id="i" v-for="(v, i) of goodsData" :key="i">
          <div v-text="v['name']" class="details_title"></div>
          <div v-for="(items, i) of v['foods']" :key="i" class="details_content">
            <img :src="items['icon']" alt />
            <div v-cloak class="details_desc">
              <div class="details_desc_name">{{ items['name'] }}</div>
              <div class="details_desc_appraise">月售{{ items['sellCount'] }}份 好评率{{ items['rating'] }}%</div>
              <div class="details_desc_price"><span>￥</span>{{ items['price'] }}</div>
            </div>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
// 引入better-scroll
import BScroll from 'better-scroll';
export default {
  data() {
    return {
      selected: 0,
      goodsData: [],
      menu: {},
      details: {},
      divesHeight: []
    };
  },
  methods: {
    // 左联右点击事件
    clickMemu(index) {
      // this.selected = index;
      // 核心方法scrollToElement(dom节点,动画时长),其它参数参照better-scroll手册
      this.details.scrollToElement(document.getElementById(index), 300);
    }
  },
  async created() {
    this.goodsData = [
      {
        name: '热销榜',
        type: -1,
        foods: [
          {
            name: '皮蛋瘦肉粥',
            price: 10,
            oldPrice: '',
            description: '咸粥',
            sellCount: 229,
            rating: 100,
            info:
              '一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '很喜欢的粥',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
          }
        ]
      },
      {
        name: '单人特色套餐',
        type: -1,
        foods: [
          {
            name: '皮蛋瘦肉粥配包子套餐',
            price: 24,
            oldPrice: '',
            description: '咸粥',
            sellCount: 229,
            rating: 100,
            info:
              '一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '很喜欢的粥',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
          }
        ]
      },
      {
        name: '特色粥品',
        type: -1,
        foods: [
          {
            name: '莲子核桃黑米粥',
            price: 10,
            oldPrice: '',
            description: '咸粥',
            sellCount: 229,
            rating: 100,
            info:
              '一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '很喜欢的粥',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: '雪梨银耳百合粥',
            price: 24,
            oldPrice: '',
            description: '咸粥',
            sellCount: 229,
            rating: 100,
            info:
              '一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '很喜欢的粥',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: '南瓜粥',
            price: 24,
            oldPrice: '',
            description: '咸粥',
            sellCount: 229,
            rating: 100,
            info:
              '一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '很喜欢的粥',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
          }
        ]
      },
      {
        name: '精选热菜',
        type: -1,
        foods: [
          {
            name: '莲子核桃黑米粥',
            price: 10,
            oldPrice: '',
            description: '咸粥',
            sellCount: 229,
            rating: 100,
            info:
              '一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '很喜欢的粥',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: '雪梨银耳百合粥',
            price: 24,
            oldPrice: '',
            description: '咸粥',
            sellCount: 229,
            rating: 100,
            info:
              '一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '很喜欢的粥',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: '南瓜粥',
            price: 24,
            oldPrice: '',
            description: '咸粥',
            sellCount: 229,
            rating: 100,
            info:
              '一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '很喜欢的粥',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
          }
        ]
      },
      {
        name: '爽口凉菜',
        type: -1,
        foods: [
          {
            name: '莲子核桃黑米粥',
            price: 10,
            oldPrice: '',
            description: '咸粥',
            sellCount: 229,
            rating: 100,
            info:
              '一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '很喜欢的粥',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: '雪梨银耳百合粥',
            price: 24,
            oldPrice: '',
            description: '咸粥',
            sellCount: 229,
            rating: 100,
            info:
              '一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '很喜欢的粥',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: '南瓜粥',
            price: 24,
            oldPrice: '',
            description: '咸粥',
            sellCount: 229,
            rating: 100,
            info:
              '一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '很喜欢的粥',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
          }
        ]
      },
      {
        name: '半成品',
        type: -1,
        foods: [
          {
            name: '莲子核桃黑米粥',
            price: 10,
            oldPrice: '',
            description: '咸粥',
            sellCount: 229,
            rating: 100,
            info:
              '一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '很喜欢的粥',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: '雪梨银耳百合粥',
            price: 24,
            oldPrice: '',
            description: '咸粥',
            sellCount: 229,
            rating: 100,
            info:
              '一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '很喜欢的粥',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: '南瓜粥',
            price: 24,
            oldPrice: '',
            description: '咸粥',
            sellCount: 229,
            rating: 100,
            info:
              '一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '很喜欢的粥',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
          }
        ]
      },
      {
        name: '饭类',
        type: -1,
        foods: [
          {
            name: '莲子核桃黑米粥',
            price: 10,
            oldPrice: '',
            description: '咸粥',
            sellCount: 229,
            rating: 100,
            info:
              '一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '很喜欢的粥',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: '雪梨银耳百合粥',
            price: 24,
            oldPrice: '',
            description: '咸粥',
            sellCount: 229,
            rating: 100,
            info:
              '一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '很喜欢的粥',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: '南瓜粥',
            price: 24,
            oldPrice: '',
            description: '咸粥',
            sellCount: 229,
            rating: 100,
            info:
              '一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '很喜欢的粥',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
          }
        ]
      },
      {
        name: '面类',
        type: -1,
        foods: [
          {
            name: '莲子核桃黑米粥',
            price: 10,
            oldPrice: '',
            description: '咸粥',
            sellCount: 229,
            rating: 100,
            info:
              '一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '很喜欢的粥',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: '雪梨银耳百合粥',
            price: 24,
            oldPrice: '',
            description: '咸粥',
            sellCount: 229,
            rating: 100,
            info:
              '一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '很喜欢的粥',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
          },
          {
            name: '南瓜粥',
            price: 24,
            oldPrice: '',
            description: '咸粥',
            sellCount: 229,
            rating: 100,
            info:
              '一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足',
            ratings: [
              {
                username: '3******c',
                rateTime: 1469281964000,
                rateType: 0,
                text: '很喜欢的粥',
                avatar: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
              }
            ],
            icon: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
            image: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
          }
        ]
      }
    ];
  },
  mounted() {
    //使用better-scroll类实例化一个menu DOM对象 由于better-scorll会默认屏蔽click事件，所以需要将click选项设为true
    this.menu = new BScroll('.menu', { click: true });
    //使用better-scroll类实例化一个details DOM对象 由于使用better-scorll滑动时需要实时获取y轴坐标，须设置选项porbeType为3
    this.details = new BScroll('.details', {
      probeType: 3
    });
    // 将右侧每项的高度存到一个数组中，如果这个数组已经有数据则不执行此中循环
    if (this.divesHeight.length < 1) {
      for (let i = 0; i < this.goodsData.length; i++) {
        this.divesHeight.push(document.getElementById(i).offsetHeight);
      }
    }
    //使用better-scroll中的on方法监听滑动事件，传入一个对象，这个对象的y就是y轴坐标
    this.details.on('scroll', obj => {
      /**右联左  设置一个总高度  当滚动时就获取y轴坐标和总高度，循环右侧每项高度的数组，相加得到总高度，
       * 判断y轴是否大于处于当前层的总高度，被激活的左菜单菜单选项就等于当前索引值加1
       * 第一项和最后一项需做单独判断*/
      let finalHeight = 0;
      for (let i = 0; i < this.divesHeight.length - 2; i++) {
        finalHeight += this.divesHeight[i];
      }
      // console.log(finalHeight);
      let totalHeight = 0;
      let y = Math.abs(obj.y);
      for (let i = 0; i < this.divesHeight.length; i++) {
        let curHeight = this.divesHeight[i];
        totalHeight += curHeight;
        if (y < this.divesHeight[0]) {
          this.selected = 0;
        } else if (y > finalHeight + 10) {
          this.selected = this.divesHeight.length - 1;
        } else if (y >= totalHeight - 10) {
          this.selected = i + 1;
          continue;
        }
      }
      // console.log(Math.abs(obj.y));
    });
  },
  updated() {}
};
</script>

<style lang="less" scoped>
@bglightGreyColor: #f3f5f7;
#goods {
  display: flex;
  height: 100%;
  [v-cloak] {
    display: none;
  }
  .actived {
    background-color: #fff !important;
    font-weight: bold !important;
  }
  .menu {
    /** 因为需要使用better-scorll做滑动效果,外层必须给定高和溢出效果 */
    overflow: scroll;
    flex: 0 0 5rem;
    height: 25rem;
    ul {
      display: flex;
      flex-flow: column;
      li {
        display: flex;
        align-items: center;
        flex: 0 0 5rem;
        width: 5rem;
        background-color: @bglightGreyColor;
        font-size: 0.875rem;
        color: #111;
      }
      li + li {
        border-top: 1px solid #fff;
      }
    }
  }
  .details {
    overflow: scroll;
    flex: 1;
    height: 25rem;
    ul {
      display: flex;
      flex-flow: column;
      div {
        text-indent: 0.625rem;
        .details_title {
          border-left: 2px solid #ccc;
          background-color: @bglightGreyColor;
          font: bold 1rem/2 '';
        }
        .details_content {
          padding: 0.5rem;
          display: flex;
          img {
            width: 5.625rem;
            height: 5.625rem;
            border-radius: 5%;
          }
          .details_desc {
            height: 5.625rem;
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-content: center;
            .details_desc_name {
              font-size: 1rem;
              font-weight: bold;
            }
            .details_desc_appraise {
              font-size: 0.875rem;
            }
            .details_desc_price {
              font-size: 1.25rem;
              color: #f00;
              span {
                font-size: 0.875rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
