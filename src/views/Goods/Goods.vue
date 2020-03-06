<template>
  <div id="goods">
    <div class="menu">
      <ul class="content">
        <li :class="{ actived: selected == i }" v-for="(v, i) of goodsData" :key="i" @click="clickMemu(i)" v-cloak>
          {{ v['name'] }}
        </li>
      </ul>
    </div>
    <div class="details">
      <ul class="content">
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
    clickMemu(index) {
      // this.selected = index;
      // console.log(this.selected);
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
    this.menu = new BScroll('.menu', { click: true });
    this.details = new BScroll('.details', {
      probeType: 3
    });

    if (this.divesHeight.length < 1) {
      for (let i = 0; i < this.goodsData.length; i++) {
        this.divesHeight.push(document.getElementById(i).offsetHeight);
      }
    }
    let finalHeight = 0;
    for (let i = 0; i < this.divesHeight.length - 1; i++) {
      finalHeight += this.divesHeight[i];
    }
    console.log(finalHeight);
    this.details.on('scroll', obj => {
      let totalHeight = 0;
      let y = Math.abs(obj.y);
      for (let i = 0; i < this.divesHeight.length; i++) {
        let curHeight = this.divesHeight[i];
        totalHeight += curHeight;
        if (y < this.divesHeight[0]) {
          this.selected = 0;
        }
        if (y == finalHeight) {
          this.selected = this.divesHeight.length - 1;
        }
        if (y >= totalHeight - 10) {
          this.selected = i + 1;
          continue;
        }
      }
      console.log(Math.abs(obj.y));
    });
  },
  updated() {}
};
</script>

<style lang="less" scoped>
@bglightGreyColor: #f3f5f7;
#goods {
  display: flex;
  [v-cloak] {
    display: none;
  }
  .actived {
    background-color: #fff !important;
    font-weight: bold !important;
  }
  .menu {
    overflow: auto;
    flex: 0 0 5rem;
    height: 30rem;
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
    height: 30rem;
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
