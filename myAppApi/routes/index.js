var express = require('express');
var router = express.Router();
const klgIndex  = require("../api/klgIndex");
const KlgClassify = require("../api/klgClassify")
const klgSearch = require("../api/klgSearch")
const klgList = require("../api/klgList")
const klgProduct = require("../api/klgProduct")

router.all("*",(req,res,next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
  else  next();
})

router.get('/', function(req, res, next) {
  res.render('index',{title:"Express"});
});

router.get("/klgIndex", (req, res) => {
  let data = klgIndex.getData();
  res.json(data);
})

router.get("/KlgClassify", (req, res) => {
  let data = KlgClassify.getData();
  res.json(data);
})

router.get("/KlgSearch", (req, res) => {
  let data = klgSearch.getData();
  res.json(data);
})

router.get("/klgList", (req, res) => {
  let data = klgList.getData();
  res.json(data);
})

router.get("/klgProduct", (req, res) => {
  let data = klgProduct.getData();
  res.json(data);
})

module.exports = router;


