const express = require("express")
const routter = express.Router();
const Bed= require("../module/bed_module ")

routter.get((""), async(req,res)=>{
    try{
        const beds = await Bed.find().lean().exec()
       

        return res.send(beds)

    }catch(er){
        return res.status(500).send(er.message)
    }
})


routter.post((""), async( req,res)=>{
    try{
        const beds = await Bed.create(req.body)
       

        return res.status(201).send(beds)

    }catch(er){
        return res.status(500).send(er.message)
    }
})



module.exports=routter;

