const express = require("express")
const routter = express.Router();
const Sofa= require("../module/sofa_module")

routter.post((""), async(req,res)=>{
    try{
        const sofas = await Sofa.create(req.body)
       

        return res.status(201).send(sofas)

    }catch(er){
        return res.status(500).send(er.message)
    }
})
routter.get((""), async(req,res)=>{
    try{
        const sofas = await Sofa.find().lean().exec()
       
 
        return res.send(sofas)
        // return res.send(sofa)

    }catch(er){
        return res.status(500).send(er.message)
    }
})






routter.delete("/:id", async( req,res)=>{
    try{
        const sofas = await Sofa.findByIdAndDelete(req.params.id).lean().exec()

        return res.status(201).send(sofas)

    }catch(er){
        return res.status(500).send(er.message)
    }
})

routter.get("/:id", async( req,res)=>{
    try{
        const sofas = await Sofa.findById(req.params.id).lean().exec()

        return res.status(201).send(sofas)

    }catch(er){
        return res.status(500).send(er.message)
    }
})

module.exports=routter;

