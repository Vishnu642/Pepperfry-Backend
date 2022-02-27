const express = require("express")
const routter = express.Router();
const Light= require("../module/light_module ")

routter.get((""), async(req,res)=>{
    try{
        const lights = await Light.find().lean().exec()
       

        return res.status(201).send(lights)

    }catch(er){
        return res.status(500).send(er.message)
    }
})


routter.post((""), async( req,res)=>{
    try{
        const lights = await Light.create(req.body)
       

        return res.status(201).send(lights)

    }catch(er){
        return res.status(500).send(er.message)
    }
})



module.exports=routter;

