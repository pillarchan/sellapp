# mongodb

## NoSQL

1. 概念:NoSQL，指的是非关系型的数据库。NoSQL有时也称作Not Only SQL的缩写，是对不同于传统的关系型数据库的数据库管理系统的统称。
2. 用途:NoSQL用于超大规模数据的存储。（例如谷歌或Facebook每天为他们的用户收集万亿比特的数据）。这些类型的数据存储不需要固定的模式，无需多余操作就可以横向扩展。

## ***\*MongoDB\*******\*简介\****

MongoDB 是一个基于分布式文件存储的数据库。由 C++ 语言编写。旨在为 WEB 应用提供可扩展的高性能数据存储解决方案。 

MongoDB 是非关系型数据库当中功能最丰富，最像关系型数据库的。 

随着大数据的不断发展，非关系型数据库已经变得越来越重要，相关的产品也都得到了飞速发展。而其中MongoDB更是佼佼者，作为高性能开源文档数据库，MongoDB以敏捷、可扩展和对企业应用友好而著称，因其操作简单、完全免费、源码公开等特点，受到了IT从业人员的青睐，并被广泛部署于实际的***\*生产环境\****中。 

使用MongoDB的公司包括：BAT、360、Foursquare、Craiglist,、迪士尼、SAP、Intuit、EA等。 

很多大公司在用，并且越来越多的公司也要用，我们以后就可能接触到相关的项目，虽然数据库是后端人员做的事情，但是做为高级前端，有必要对它有所了解，才更好的和后端开发人员合作，做到知己知彼，百战不殆。 

## ***\*MongoDB\*******\*优点\****

它的特点是高性能、易部署、易使用，存储数据非常方便。主要功能特性有：

· 面向集合存储，易存储对象类型的数据。

· 模式自由。

· 支持动态查询。

· 支持完全索引，包含内部对象。

· 支持查询。

· 支持复制和故障恢复。

· 使用高效的二进制数据存储，包括大型对象（如视频等）。

· 自动处理碎片，以支持云计算层次的扩展性

· 支持RUBY，PYTHON，JAVA，C++，PHP, Nodejs等多种语言。

· 文件存储格式为BSON（一种JSON的扩展）

## ***\*BSON\****

BSON是一种类似[json](http://baike.baidu.com/view/136475.htm)的二进制形式的存储格式，简称Binary JSON，它和JSON一样，支持内嵌的***\*文档对象\****和***\*数组对象\****，但是***\*BSON有JSON没有的一些数据类型，\****如Date和BinData类型。 

BSON可以做为网络数据交换的一种存储形式，这个有点类似于Google的Protocol Buffer，但是BSON是一种schema-less的存储形式，它的优点是灵活性高，但它的缺点是空间利用率不是很理想。

BSON有三个特点：轻量性、可遍历性、高效性。 

后面大家会看到我们存在数据库里面的全部都是bson格式的数据。

## ***\*非关系型数据库与关系型数据库区别\****

非关系型数据库的优势： 

1. 性能
   NOSQL是基于键值对的，可以想象成表中的主键和值的对应关系，而且不需要经过SQL层的解析，所以性能非常高。 

2. 可扩展性
   同样也是因为基于键值对，数据之间没有耦合性，所以非常容易水平扩展。 

关系型数据库的优势：

1. 复杂查询
   可以用SQL语句方便的在多个表之间做非常复杂的数据查询。 

2. 事务支持
   使得对于安全性能很高的数据访问要求得以实现。 

总结： 

Ø 数据库功能是用来存储数据的。

Ø 数据库分为关系系数据库(sql)和非关系型数据库(nosql)

Ø 关系型数据库是由表和表之间的关系组成的，nosql是由集合组成的，集合下面是很多的文档。

Ø 非关系型数据库文件存储格式为BSON（一种JSON的扩展）。

## mongodb安装

1. 进入官网下载对应平台的安装包 https://www.mongodb.com/zh-cn
2. 安装完后,配置环境变量
3. 使用mongo show dbs 测试是否安装成功

## mongodb 基础命令

1. 库常用命令

   1. show dbs //显示所有数据库
   2. db或db.getName() //显示当前所在数据库
   3. use 数据库的名字 //切换或创建数据库,如数据库不存在时,则创建并切换到该数据库
   4. db.dropDatabase() //删除当前数据库
   5. db.cloneDatabase("ip") //将指定IP数据库的数据克隆到当前数据库
   6. db.copyDatabase("被拷贝的数据库","拷贝的数据库","IP")  //将指定IP数据库的数据复制到指定的数据库
   7. db.repairDatabase() //修复当前数据库
   8. db.stats() //显示当前数据库状态
   9. db.version() //显示当前数据库版本
   10. db.getMongo() //显示数据库连接信息 显示结果为IP:端口

2. Collection聚集集合常用命令

   1. db.createCollection("集合名",{size:num,capped:num,max:num}) 创建一个聚集集合（table）
   2. db.集合名.isCapped() //判断集合是否为定容量
   3. show collections //显示当前数据库中的集合
   4. db.getCollection("集合名") //显示指定集合
   5. db.getCollectionNames() //以数据方式显示所有集合名
   6. db.printCollectionStats()  //显示当前db所有聚集索引的状态
   7. db.集合名.drop() //删除该集合

3. 用户相关

   1. db.addUser("name")  //添加用户
   2. db.addUser("name","pwd",true) //添加用户并设置密码,权限为只读
   3. db.auth("name","pwd") //为用户设置密码
   4. show users //显示用户
   5. db.removeUser("name") //删除用户

4. CRUD命令
   1. 增
      db.集合名.insert({key1:value1,key2:value2...}) //单个添加
      db.集合名.insert([{key1:value1,key2:value2...},{key1:value1,key2:value2...},...]) // 多个添加

      db.集合名.save({key1:value1,key2:value2...}) //单个添加

      db.集合名.save(([{key1:value1,key2:value2...},{key1:value1,key2:value2...},...]) // 多个添加

      区别:如果不指定 _id 字段 save() 方法类似于 insert() 方法。如果指定 _id 字段，则会更新该 _id 的数据。

   2. 删

      db.collection.remove(\<query\>,\<justOne\>)

      ​	query 查询条件

      ​	justOne true/false 1/0 是否只删除一条

      db.集合名.remove({})  //删除该集合中所有数据

      db.集合名.remove({key:value})  //删除该集合中key=value查找的数据
      db.集合名.remove({key:value},1)  //只删除该集合中一条key=value查找的数据

   3. 改

      db.collection.update( criteria, objNew, upsert, multi )
      update()函数接受以下四个参数：

      - **criteria** : update的查询条件，类似sql update查询内where后面的。
      - **objNew** : update的对象和一些更新的操作符（如$set,$inc...）等，也可以理解为sql update查询内set后面的
      - **upsert** : 这个参数的意思是，如果不存在update的记录，是否插入objNew,true为插入，默认是false，不插入。
      - **multi** : mongodb默认是false,只更新找到的第一条记录，如果这个参数为true,就把按条件查出来多条记录全部更新。

      db.集合名.update({key:value},{key:value}) // 将条件为key=value的第一条数据,整条数据替换为新的内容
      db.集合名.update({key:value},{$set:{key:value}})  //将条件为key=value的第一条数据,修改指定的键值对

      db.集合名.update({key:value},{$set:{key:value}},false,true)  //将条件为key=value的所有数据,修改指定的键值对

      db.集合名.update({key:{$gt:value}},{$set:{key:value}},true,false) //将条件为key>value的数据的第一条,尾部插入新的键值对

      db.集合名.update({key:{$gt:value}},{$set:{key:value}},true,true) //将条件为key>value的所有数据,尾部插入新的键值对

   4. 查

      1. db.集合名.find() //查询集合中所有数据
         db.集合名.find().pretty() //查询集合中所有数据,格式化显示
         db.集合名.findOne() //查询集合中第一条数据

      2. 条件查询

         1. 比较符

            1. 等于 db.集合名.find({key:value}) 
            2. 不等于 db.集合名.find({key:{$ne:value}) 
            3. 大于 db.集合名.find({key:{$gt:value}) 
            4. 大于等于 db.集合名.find({key:{$gte:value}) 
            5. 小于 db.集合名.find({key:{$lt:value}) 
            6. 小于等于 db.集合名.find({key:{$lte:value}) 
            7. 大于并小于 db.集合名.find({key:{$lt:value,$gt:value}) 

         2. AND 查询条件中包含多个key:value则为并
            db.集合名.find({key:value,key:{$gt:value},...}) 

         3.  OR 条件语句使用了关键字 **$or**,语法格式如下：

            ```
            >db.col.find(
               {
                  $or: [
            	     {key1: value1}, {key2:value2}
                  ]
               }
            ).pretty()
            
            AND OR联合示例
            db.collection.find({ 
            	age:{$gt:18},
            	$or:[
            		{name:"zhangsan"},{name:"wangwu"}
            	]
            })
            ```

         4. 模糊查询

            1. db.collection.find({name:/^string/}) //查询以指定字符开头的
            2. db.collection.find({name:/string/}) //查询包含指定字符的
            3. db.collection.find({name:/string$/}) //查询以指定字符结尾的

         5. 指定列查询

            db.collection.find({},{name:1,age:1})  //仅查询显示name 和age列

            db.collection.find({age:{$gt:18}},{name:1,age:1})  //查询年龄大于18的name 和 age列

         6. 排序
            db.collection.find().sort({key:1})  //依据某个键按升序排列
            db.collection.find().sort({key:-1})  //依据某个键按降序排列

         7. 查询多少条数据
            db.collection.find().limit(num) //从第一条开始显示指定数量的数据
            db.collection.find().skip(num) //从第几条数据开始查询
            db.collection.find().skip(num).limit(num) //从第几条数据开始查询,查询多少条,此方式可以用来做分页

         8. 