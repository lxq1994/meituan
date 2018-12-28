const path = require("path")
const express = require("express")
const app = express()
const peight = require("./datas/p8")
const index = require("./datas/index")
const food =require("./datas/food")
console.log(peight)

//设置静态目录
app.use(express.static(__dirname))


//设置项目的首页
app.get("/",(req,res,next)=>{
  res.sendFile(path.resolve(__dirname,"index.html"))
})

app.get("/p8url",(req,res)=>{
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  res.jsonp(peight)
})

app.get("/index",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  res.jsonp(index)
})


app.get("/food",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  res.jsonp(food)
})
//监听port 8888
app.listen(3000,()=>{
  console.log("cart server is listening on port 3000")
})
