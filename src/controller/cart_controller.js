const express = require("express")
const routter = express.Router();
const Cart= require("../module/cart.model")

routter.get((""), async(req,res)=>{
    try{
        const carts = await Cart.find().lean().exec()
       

        return res.status(201).send(carts);

    }catch(er){
        return res.status(500).send(er.message)
    }
})


routter.post((""), async( req,res)=>{
    try{
        const carts = await Cart.create(req.body)
       

        return res.status(201).send(carts);

    }catch(er){
        return res.status(500).send(er.message)
    }
})

routter.patch(("/:id"), async( req,res)=>{
    try{
        const carts = await Cart.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()

        return res.status(201).send(carts);

    }catch(er){
        return res.status(500).send(er.message)
    }
})




routter.delete(("/:id"), async( req,res)=>{
    try{
        const carts = await Cart.findByIdAndDelete(req.params.id).lean().exec();

        return res.status(201).send(carts);

    }catch(er){
        return res.status(500).send(er.message)
    }
})

module.exports=routter;

