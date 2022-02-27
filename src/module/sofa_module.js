const mongoose= require("mongoose")
const sofaSchema = new mongoose.Schema({
    dprice:{type:Number,required:true},
    image:{type:String,required:true},
    desc:{type:String,required:true},
    name:{type:String,required:true},
    disc:{type:String,required:true},
    mrp:{type:Number,required:true},
},{
    versionKey:false,
    
    timestamps:true,
}) 
//model
module.exports = mongoose.model("sofa",sofaSchema) 



// _id
// :
// 6215cec2e405b16064f5396d
// image
// :
// "https://ii2.pepperfry.com/media/catalog/product/e/a/494x544/ease-2-sea..."
// desc
// :
// "Ease 2 Seater Sofa in Grey Colour"
// name
// :
// "Duroflex"
// dprice
// :
// 14178
// mrp
// :
// 23630
// disc
// :
// "40% Off"