var express = require("express")
var router = express.Router()

/* GET home page. */
router.get("/", (req, res) => {
  res.send("router返回的主页")
})

router.post("/login", (req, res) => {
  let { username, pwd } = req.body
  if (username === "test" && pwd === "test") {
    res.send({isLogin:1,msg:"恭喜你,登录成功"})
  }else{
    res.send({isLogin:0,msg:"哦豁,登录失败,用户名或密码错误"})
  }
})

router.get("/regcheck",(req,res)=>{
  let {username}=req.query
  let usernameArr=["tom","jerry","devin","lucy"]
  let flag=true
  usernameArr.forEach(e => {
    if(e===username){
      flag=!flag
      return
    }   
  });
  if(flag){
    res.send({isExist:0,msg:"可以使用此用户名"})
  }else(
    res.send({isExist:1,msg:"用户名已存在"})
  )
  
})

module.exports = router
