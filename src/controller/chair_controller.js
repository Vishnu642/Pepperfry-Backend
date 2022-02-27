const express = require("express")
const routter = express.Router();
const Chair= require("../module/chair_module")

routter.get((""), async(req,res)=>{
    try{
        const chairs = await Chair.find().lean().exec()
       

        return res.status(201).send(chairs)

    }catch(er){
        return res.status(500).send(er.message)
    }
})


routter.post((""), async( req,res)=>{
    try{
        const chairs = await Chair.create(req.body)
       

        return res.status(201).send(chairs)

    }catch(er){
        return res.status(500).send(er.message)
    }
})

routter.delete("/:id", async( req,res)=>{
    try{
        const chairs = await Chair.findByIdAndDelete(req.params.id).lean().exec()

        return res.status(201).send(chairs)

    }catch(er){
        return res.status(500).send(er.message)
    }
})

module.exports=routter;

