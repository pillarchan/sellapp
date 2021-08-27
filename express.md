# express

## 概念

Express 是一个基于 ***\*Node.js 平台的极简、灵活的 web 应用开发框架\****，它提供一系列强大的特性，帮助你创建各种 Web 和移动设备应用。

## 使用

1.  新建一个项目文件夹
2. 进入项目文件夹，创建包描述文件 package.json 
   yarn init
3. 安装express框架,进入项目根目录（和 package.json相同的目录）执行以下命令
   yarn add express -D
4. 在项目目录里面，新建一个app.js文件，就在这个文件，来写代码

    a） 引入 express 模块
    const express = require('express')
    
    b） express模块本身是一个函数，直接调用，得到一个应用对象
    const app = express();
    
    c）这个部分 所有的请求 和 响应 都交给 app 这个对象处理
    app.get("/",(req,res)=>{
        res.send("Hello express")
    })
    
    d）监听启动服务器的端口
    app.listen(端口号, () => {
    	console.log('服务器启动成功!地址是:http://127.0.0.1:端口号')
    })


    补充：可以安装一个模块 nodemon，安装完成以后，可以使用 nodemon命令取代node命令 运行app 
    代码改变 可以自动重启服务器
    
    a) 全局安装 nodemon 模块
    cnpm i nodemon -g
    yarn global add nodemon
    b) 使用nodemon取代node 运行 app.js
    nodemon app

## express-generator

1. express-generator项目目录快速生成工具（脚手架）

   1. express-generator 是一个脚手架 可以帮助我们快速的创建一个项目的工程目录

   2. 全局安装express-generator
          cnpm i express-generator -g   
      	yarn global add express-generator
          说明：全局安装主要是为了使用 express 这个命令 （安装好脚手架 那么 就可以使用expres命令了）

   3. 使用express命令 快速创建项目目录
          express -e 项目的名字    （-e是使用ejs模板）

          a) 进入项目根目录
              cd 项目文件夹
          
          b) 一次性安装所有依赖（6个）
              cnpm i
          	yarn install
          c) 启动项目
              npm start
              yarn start
          补充：改动项目 自己监听端口 设置自动重启
                  1）打开 app.js 在40行 监听端口
                      app.listen(端口号, () => {
                          console.log('服务器启动成功，地址是：http://127.0.0.1:端口号')
                      })
          
                  2） 通过 nodemon 启动
                      nodemon app

2. 项目目录详解
       bin               项目的启动目录 里面有一个www是项目的启动文件 
       node_modules      使用npm安装的第三方node模块 都放在这个文件夹
       public            所有前端静态资源的目录 图片 js css html  （是服务器的根目录）
       routes            路由，写后端代码 就是在写路由，可以理解为 这个目录写的就是后端（服务器端）代码  
       views             所有 后端模板引擎的 文件 都放在这个文件夹 （ejs 模板文件）
       app.js            整个项目的入口文件（主文件）子路由的分配 都是在这个项目完成的 
       package.json      包描述文件（记录项目的依赖包的信息）

3. 路由分配
       a) 先在routes中新建路由文件 (js文件)
       b) 打开app.js 改动两个地方

       i) 引入 新建的路由文件
       var vipRouter = require('./routes/vip');
       ii) 分配一个目录 给新建的路由处理
       app.use('/vip', vipRouter);

4. public与router的优化级

   public目录的文件名如果与router中路径名相同,会优化响应public中的静态页面给前端页面

5. 响应对象res

   1. 什么是响应对象？
              响应对象 res(response),主要负责响应数据给前端（浏览器端） （ 把后端的数据 发送给前端浏览器 ）
   2. 常用方法
          a) res.send()   (******)   响应数据给前端 可以响应不同类型的数据
          b) res.json                响应json格式的数据给前端
          c) res.jsonp               响应json格式的数据给前端（只是语义化一点 用于jsonp跨域请求）
          d) res.render('ejs模板', {json键值对格式的数据})  (***)
          f) res.download('文件相对路径', '重命名')    主要用于处理前端的下载请求
          g) res.redirect()           重定向（跳转到一个新网址）VUE

6. 接收对象req

   1. 什么是接收对象？
              接收对象 req(request),主要负责接收前端（浏览器端）通过form或ajax 提交给后端的数据
   2. 两种方式的属性
      1. get 传值 通过req.query.参数名接收
      2. post传值 通过req.body.参数名接收
   3. 技巧,可以通过解构获取参数值
      let {参数1,参数2...}=req.query
      let {参数1,参数2...}=req.body