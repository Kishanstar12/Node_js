const express=require('express');

const path=require('path');

const router=express.Router();

router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','add-product.html'));
});

router.post('/add-product',(req,res,next)=>{
    const product = {
        name: req.body.title,
        price: req.body.price,
      };
      
      console.log("Received product:", product);
      
      res.send("Product added successfully!");
});

module.exports=router;