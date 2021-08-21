# sellapp

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

###  技术选型

1. JS框架: vue 全家桶
2. UI框架: iview (多用于移动端)
3. 插件:插件：地图插件（高德地图，其他地图），BetterScroll（滚动插件），axios，其他vue插件电脑环境

​	chrome，firefox
​	vs code （atom，hbuilder）
​	nodejs  >8.12（最少）
​	svn或git选装
​	你自己习惯使用的一些美术类工具（选自己喜欢的）

### 开发环境搭建

1. yarn安装
    1.1 npm i yarn -g 全局安装yarn
	1.2 配置yarn的path系统环境变量
		yarn global bin  查看全局安装目录，复制此路径，粘贴到系统环境变量path内！
	
2. 安装@vue/cli脚手架，创建项目
	2.1 全局安装脚手架（只需要装一次）
		yarn global add @vue/cli 
	2.2 使用脚手架命令，创建项目
		vue create 项目名
	2.3 启动项目
		yarn serve(启动)          yarn build(打包)

3. 项目清理
	3.1 把不需要的文件全部删掉
	3.2 搭建目录

4. 安装UI框架（iView）
	4.1 安装iview模块
		yarn add iview -D
	4.2 在入口js文件（main.js）引入iview核心模块及css
		import iView from 'iview';
		import 'iview/dist/styles/iview.css';
	4.3 全局注册
		Vue.use(iView)
	4.4 直接使用标签名，实例化使用即可
	
	```
	<Button type="warning">Warning</Button>
	```
	
5. 根据功能，完成页面拆分

6. 先配置路由，理清楚页面之间的跳转关系！！！！

7. 书写静态页面

### 开发中的技巧

1. less版本的选择:如果vue版本使用的是2.6,则less版本选择3.0.4 less-loader版本选择5.0.0
2. router-link 选中标签后的样式变化,两种方式
   1. 通过.router-link-exact-active 修改样式
   2. 通过 点击事件 结合this.$router.push("path")内置函数 实现页面跳转,跳转同时动态绑定class,实现选中样式的变化