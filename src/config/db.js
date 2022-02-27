require("dotenv").config()
const mongoose= require("mongoose")

const connect = ()=>{
    return mongoose.connect(`mongodb+srv://pepperfry:pepperfry@cluster0.s5gh4.mongodb.net/pepperfry?retryWrites=true&w=majority`)
}
module.exports=connect;