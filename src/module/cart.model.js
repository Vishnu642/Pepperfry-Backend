const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
    desc : {type : String, required : false},
    image : {type : String, required : true},  
    // unit_price : {type : Number, required : true},
    qty : {type : Number, required : false}  ,
    total : {type : Number , required : true}

})
module.exports = mongoose.model("cart", cartSchema);

//for controller you need to create 4 methods = get, post , delete, patchn

//in front end you need to fetch for all 4 methods which are present in controller

//once user clicks for place order from carts you need to patch the cart with updated Quantity and total price
//patch in cart = qty , total