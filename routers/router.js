const express = require("express");
const router = express.Router();


router.get("/",(req,res,next)=>{
  res.render('home.ejs',{url:req.protocol+"://"+req.headers.host})
})

router.get("/about",(req,res,next)=>{
  res.render('about.ejs',{url:req.protocol+"://"+req.headers.host})
})


module.exports = router;