# ajax

## 什么是ajax？

​    ajax是异步的javaScript 和 XML
​    ajax可以在不重新加载整个网页的情况下 和 服务器交互少量数据 实现局部更新

##  ajax的优点 和 缺点？

1. 优点：
           a) 提升用户体验（减少了给用户反馈的时间）
           b) 按需交互数据 减少服务器带宽
           c) 主流浏览器支持（非主流浏览器不支持）
2. 缺点
       a) 不利于 seo（搜索引擎优化）

## 什么是ajax引擎对象

1. ajax引擎对象 就是 XMLHttpRequest 对象 （主流浏览器 以后几乎全是用这个）==》 如果使用框架 主流 axios
2. 如果是IE低版本浏览器 就是 ActiveXObject对象

## 如何创建ajax？

1. 主流浏览器创建ajax引擎对象 （直接new出来）
           var ajax  = new XMLHttpRequest(); // 一般都是直接这么写

2. IE低版本浏览器创建ajax引擎对象
       var ajax = new ActiveXObject('参数'); // 参数有几种情况
       参数如下：
       ['Microsoft.XMLHTTP', 'Msxml2.XMLHTTP', 'Msxml2.XMLHTTP.3.0', 'Msxml2.XMLHTTP.5.0', 'Msxml2.XMLHTTP.6.0']

   ```
   <script>
   	function createAjax(){
           var ajax;
           if(window.XMLHttpRequest){
               ajax=new XMLHttpRequest();
           }else{
               var version=['Microsoft.XMLHTTP','Msxml2.XMLHTTP','Msxml2.XMLHTTP.3.0','Msxml2.XMLHTTP.5.0','Msxml2.XMLHTTP.6.0']
               for(var i=0,i<version.length,i++){
   				ajax=new ActiveXObject(version[i]);
   				break;
               }
           }
           return ajax;
   	}
   	var xhr=createAjax();
   	
   </script>
   ```

## ajax的引擎状态码详解

通过 onreadystatechange 监听引擎状态的变化  引擎的状态 readyState 一共有五种
    0: 请求未初始化  请求还没有创建
    1: 服务器连接已建立 服务器还没有接收请求 
    2: 请求已接收 但是服务器还没有处理
    3: 请求处理中 但是还没有处理（响应）完
    4: 请求已完成，且响应已就绪 (只要管这一种)

## 使用ajax发送get方式的请求 传参（四大步）

1. 创建ajax引擎对象    

   ```
   const ajax = new XMLHttpRequest();
   ```

2. 创建请求-配置请求方式和请求地址

   ```
     ajax.open('get', `请求的地址url?参数名1=参数值1&参数名2=参数值2...`, true/false)
       参数详解：
   		open(参数1，参数2，参数3)方法有三个参数
       	参数1：请求的方式 get  或 post
      	 参数2：请求的地址url（请求的服务器网址 工作的时候 地址是后端提供给你的）
       	参数3：一般默认不写参数3 ajax默认是异步的 true: 异步  false：同步
   ```

3. 监听ajax引擎的状态 & 合适的时候接收数据

       // 监听ajax状态的改变
       ajax.onreadystatechange = function () {
           // 合适的时候 接收数据
           // 什么是合适的时候  ajax引擎的状态码 readyState === 4  Http状态码 status === 200
           if (ajax.readyState === 4 && ajax.status === 200) {
               // 声明一个变量 保存接收到的数据 数据在哪里？ 在ajax引擎对象的一个属性里 responseText;
               var data = ajax.responseText;   // 接收到的数据 数据的类型是字符串
               var data = JSON.parse(ajax.responseText) //接收到的数据 数据的类型是json格式
           }
       }

4. 发送请求    

   ```
   ajax.send();
   ```

5. 注意： 
   1) 监听ajax引擎状态的这一步 可以在第二步之前  也可以在 第四步之后 一般写在第三步
   2) JSON对象有两个重要的方法

       a) 字符串转为JSON对象
        	JSON.parse();
       b) JSON对象转为字符串
           JSON.stringify()

## ajax发送post方式的请求传参数（五大步）

1.   创建ajax引擎对象

   ```
   var ajax = new XMLHttpRequest();
   ```

2. 配置请求方式和请求地址

   ```
   ajax.open('post', '请求地址url');
   ```

3. 监听ajax引擎状态 & 合适的时候接收数据

   ```
   ajax.onreadystatechange=function(){
   	if(ajax.readeState===4&&ajax.status===200){
   		var data= JSON.parse(ajax.responseText)
   	}
   }
   ```

4. 设置请求头（设置请求头必须在发送之前）

   ```
   ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
   ```

5. 发送请求

   ```
   ajax.send('参数名1=参数值1&参数名2=参数值2');
   ```

## get方式的请求 和 post方式请求的区别

1. get方式的请求 传输数据量少 post多
2. get方式不安全 post方式相对安全
3. post方式需要在发送之前设置请求头
4. 传参数方式不同
   1.  get方式在请求的url地址后面 形如：ajax.open('get', 'url?参数名1=参数值1&参数名2=参数值2') 
   2.  post方式是在发送的方法里面 形如： ajax.send('参数名1=参数值1&参数名2=参数值2')

## ajax的同步和异步（了解）

​    同步： 阻塞
​    异步： 非阻塞
​    js最典型的异步：定时器 事件绑定  ajax

## jquery的ajax

1. get方式

   ```
   $.get('请求地址url?参数名1=参数值1&参数名2=参数值2', function (data) {
   	// data就是服务器响应回来的数据
   })
   ```

2. post方式

   ```
       $.post('请求地址url', { 参数名1:参数值1, 参数名2:参数值2 },function (data) {
           // data就是服务器响应回来的数据
       })
   ```

3. 万能方式(如果工作里面使用jquery 肯定就是使用这种方式)

   ```
       $.ajax({
           url: '请求地址', // 请求的地址
           type: 'get/post'  // 请求的方式
           dataType: 'json'  // 数据格式
           success: function (data) {  // 请求成功的回调函数
               // data就是服务器响应回来的数据
           }
       })
   
       // get方式传参数
       $.ajax({
           url: '请求地址?参数名1=参数值1&参数名2=参数值2', // 请求的地址
           type: 'get'  // 请求的方式
           dataType: 'json'  // 数据格式
           success: function (data) {  // 请求成功的回调函数
               // data就是服务器响应回来的数据
           }
       })
   
       // post方式传参数
       $.ajax({
           url: '请求地址', // 请求的地址
           type: 'post'  // 请求的方式
           data: {
               参数名1:参数值1, 
               参数名2:参数值2
           },
           dataType: 'json'  // 数据格式
           success: function (data) {  // 请求成功的回调函数
               // data就是服务器响应回来的数据
           }
       })
   ```

##  JSON

1. 什么是JSON?
   1. JSON是一种前后端交互的轻量级的主流数据格式，主要是键值对的写法
             注意：键名如果是 .json后缀的文件 必须双引号  如果是对象 可以不写 键值可以使任意数据类型
   2. JSON天然就是一个JS的内置对象 有两个重要的方法
              i ) JSON.parse()    // 把JSON格式的字符串 转为 JSON对象
              ii) JSON.stringify() // 把JSON对象 转为字符串
   3. 补充：数据类型：
               i) 基本类型  null undefined string number boolean  
               ii) 引用类型 object (object array function )
2. 补充：json格式化谷歌浏览器插件安装
           下载解压 => 复制 webContent 目录
           谷歌浏览器右上角三个点  => 更多工具 => 扩展程序 => 加载已解压的扩展程序（把解压的目录复制进来）确定 

