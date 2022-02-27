let arr1;
 async function getcartdata(){

    try{
        let res= await fetch("https://pepperfrycloneapi.herokuapp.com/carts")
        
        arr1 = await res.json();
        display(arr1)
       totalcheck(arr1)
        //  console.log(arr1,"ima data from mongo atlas db")

    }catch(er){
        console.log(er)
    }
      
 }
 

 getcartdata()





// var cart =JSON.parse(localStorage.getItem('cart'))||[];
// var payment = JSON.parse(localStorage.getItem("payment")) || [];
//  var cartvalue =JSON.parse(localStorage.getItem("cartvalue")) ||[];
//  var arr = []
//  cart.map(function(el,index){
//      var obj = {
//          imgurl:el.image,
//          prodhead:el.desc,
//          prodprice:el.dprice,
//          count:1
//      }
//      arr.push(obj)
//      payment.push(obj)
//  })

//  console.log(arr)
//  updateCheckoutSection(arr1)
 function display(arr1) {
     
     document.querySelector('.product_container').textContent = ""
     if(arr1.length == 0)
         {
             document.querySelector('.product_container').innerHTML= "<p> You have no items in your shopping.<br>Click here to continue shopping.</p>"
             document.querySelector('.order_summary').textContent = ""
         }
     else{
         arr1.map(function(el,index){
             var div = document.createElement('div')

                 var div1 = document.createElement('div')
                 var div2 = document.createElement('div')
                 var div3 = document.createElement('div')
                 var div4 = document.createElement('div')
                 var div5 = document.createElement('div')

                     var div1_img    = document.createElement('img')
                     var div2_p      = document.createElement('p')
                     var div3_div    = document.createElement('div')

                         var div3_div_button1    = document.createElement('button')
                         var div3_div_span       = document.createElement('span')
                         var div3_div_button2    = document.createElement('button')
                         
                     var div4_span = document.createElement('span')
                     var div5_span = document.createElement('span') 
                 
                 div1_img.setAttribute('src',el.image)
                 div1.append(div1_img)
                 div2_p.textContent = el.desc;
                 div2.append(div2_p)
                 div4_span.textContent = "₹"+el.total;
                 div4.append(div4_span)
                 div5_span.textContent = 'X'
                 div5_span.setAttribute('class','remove_from_cart')
                 div5_span.addEventListener('click',function(){
                    deletecart(el)
                    // console.log(el)
                    
                    
                 })
                 div5.append(div5_span)

                //  div3_div.setAttribute('class','up_and_down')
                //  div3_div_button1.textContent = "+"
                //  div3_div_button2.textContent = "-"
                //      div3_div_span.textContent = el.count
                //  div3_div_span.setAttribute('class','no_of_product')

                //  div3_div_button1.addEventListener('click',function(){increment(index)})
                //  div3_div_button2.addEventListener('click',function(){decrement(index)})
                //  div3_div.append(div3_div_button1,div3_div_span,div3_div_button2)
                //  div3.append(div3_div)

                 div.append(div1,div2,div4,div5)
                 document.querySelector('.product_container').append(div)


         })
     }    
 }


function totalcheck(arr1){
    // console.log(arr1,"imm arr1")
    let price=0;
    for(i=0;i<arr1.length;i++){
        price= price+arr1[i].total
       
    }
    let a=document.getElementById("total_price_of_cart_items_with_delivery_charges")
    a.innerHTML=price
    console.log(price,"price")
    
}
// let finalamount=price
// console.log(finalamount,"im finalamount")


//  function updateCheckoutSection(arr1){
//      var total_price_without_delivery = arr1.reduce(function(ac,el){
//          var price = el.total
//              if(price[0] == "₹")
//                 price = price.slice(1)
//              else
//                  price = el.total 
//              count = el.count   
//          return ac + Number(price)*Number(count)
//      },0)
//      var delivery_charges = 0
//      var total_price_of_cart_items_with_delivery_charges = ( total_price_without_delivery + delivery_charges )
//      document.querySelector("#total_number_of_cart_items").textContent = ""
//      document.querySelector("#total_number_of_cart_items").textContent = "Cart Value"+"("+arr1.length+" x items"+")";

//     //  document.querySelector("#total_number_of_cart_items").textContent ="Cart Value";


//      document.querySelector("#itemno").textContent="("+arr1.length+" "+"ITEMS"+")";

//      document.querySelector("#total_price_of_cart_items_without_delivery_charges").textContent = ""
//      document.querySelector("#total_price_of_cart_items_without_delivery_charges").textContent = "₹"+total_price_without_delivery

     
     

//      document.querySelector("#delivery_charges").textContent = ""
//      document.querySelector("#delivery_charges").textContent = "₹"+delivery_charges

//      document.querySelector("#total_price_of_cart_items_with_delivery_charges").textContent = ""
//      document.querySelector("#total_price_of_cart_items_with_delivery_charges").textContent = "₹"+()
    
//      var value1 = {
//          totalvalue:total_price_of_cart_items_with_delivery_charges
//      }
//       console.log(value1)
//   cartvalue.push(value1);
    
//   }

//  function increment(index){
//                      arr1[index].count++
//                      // counter[index]++
//                      // localStorage.setItem('counter',JSON.stringify(counter))
//                      display(arr1)
                     
//                      updateCheckoutSection(arr1)
//              }
//  function decrement(index){
//                  if(arr1[index].count>1)
//                  {
//                      arr1[index].count--
//                      // counter[index]--
//                      // localStorage.setItem('counter',JSON.stringify(counter))
//                      display(arr1)
                     
//                      updateCheckoutSection(arr1)
//                  }
//              }
//  function remove(index)            
//  {
//      arr1.splice(index,1)
//      display(arr1)
//      cart.splice(index,1)
//      localStorage.setItem('cart',JSON.stringify(cart))
//      payment.splice(index,1)
//      localStorage.setItem("payment",JSON.stringify(payment));
//      // counter.splice(index,1)
//      // localStorage.setItem('counter',JSON.stringify(counter))
     
//      updateCheckoutSection(arr1)
//  }


async function deletecart(el){
     
    try{

        let item_id= el._id

        let deleted_produc= await fetch(`https://pepperfrycloneapi.herokuapp.com/carts/${item_id}`,{
            method:"DELETE",
            headers:{
                "content-Type":"application/json"
            }
        })
        let data= await deleted_produc.json()
        console.log(data)
        getcartdata()


    }catch(er){
        console.log(er)
    }

}

 
 function checkout_button(){
   
// localStorage.setItem("payment",JSON.stringify(payment));
// localStorage.setItem("cartvalue",JSON.stringify(cartvalue));
  
    window.location.href = "/payment.html"
}