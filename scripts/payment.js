var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}



let billing_amount=0;
let total_amount= JSON.parse(localStorage.getItem("finalamount"))
let Retail_price=0;  //scratch price
let assembly_price=1347;
let cart_item=JSON.parse(localStorage.getItem("payment"))||[];
// here need to get the database 
let ordered_product;


let getproduct= async()=>{
    try{
        
  let res = await  fetch("https://pepperfrycloneapi.herokuapp.com/carts")
  ordered_product= await res.json();
  
  console.log(ordered_product)
  let result=cal_total()
  console.log(result)

  localStorage.setItem("finalamount",JSON.stringify(result))



  display(ordered_product)
  
  
  
}catch(er){
    console.log(er)
}


}
getproduct()

 
 
 function cal_total(){
    let total_amount=0;
     for(i=0;i<ordered_product.length;i++){
       total_amount+=ordered_product[i].total
    }
    // console.log(total_amount)
    return total_amount
}










    let cart_display_button=document.getElementById("cart_display_button")
    cart_display_button.innerHTML=cart_item.length
    
function paymnet_option(){
    let div= document.createElement("div")
        div.setAttribute("id","debit_credit_card")
       
        div.innerHTML=`ATM/DEBIT CARD`
        div.addEventListener("click",cards)
    let div2= document.createElement("div")
       
        div2.innerHTML=`CREDIT CARD`
        div2.addEventListener("click",credit_card)
    let div3= document.createElement("div")
       
        div3.innerHTML=`INTERNET BANKING`
        div3.addEventListener("click",cards)
    
    document.querySelector("#card_ooption").append(div,div2,div3)
}

paymnet_option()


function cards(){
    document.querySelector("#display_card").innerHTML="";
    let p=document.createElement("p")
        p.innerHTML=`CHOOSE YOUR DEBIT CARD TYPE`

    let div=document.createElement("div")
            div.setAttribute("id","all_card_div")
    let all_img_div=document.createElement("div")
        all_img_div.setAttribute("id","all_img_div")
   let img=document.createElement("img")
            img.src="https://ii1.pepperfry.com/images/master-card-img.png"
    let radio=document.createElement("input")
        radio.setAttribute("type","radio")
    
        all_img_div.append(radio,img)   
       

        let all_img_div2=document.createElement("div")
        all_img_div2.setAttribute("id","all_img_div")
   let img2=document.createElement("img")
            img2.src="https://ii1.pepperfry.com/images/rupay-card-img.png"
    let radio2=document.createElement("input")
        radio2.setAttribute("type","radio")
        
        all_img_div2.append(radio2,img2) 

    
        let all_img_div3=document.createElement("div")
        all_img_div3.setAttribute("id","all_img_div")
   let img3=document.createElement("img")
            img3.src="https://ii1.pepperfry.com/images/maestro-card-img.png"
    let radio3=document.createElement("input")
        radio3.setAttribute("type","radio")
        
        all_img_div3.append(radio3,img3) 

    
        let all_img_div4=document.createElement("div")
        all_img_div4.setAttribute("id","all_img_div")
   let img4=document.createElement("img")
            img4.src="https://ii1.pepperfry.com/images/visa-card-img.png"
    let radio4=document.createElement("input")
        radio4.setAttribute("type","radio")

        all_img_div4.append(radio4,img4) 

    let button=document.createElement("button")
        button.setAttribute("id","proceed_btn")
        button.addEventListener("click",next_page)
        button.innerHTML=`PROCEED ${total_amount}`
    
        let note= document.createElement("p")
            note.innerHTML="Note: You Will Be Asked To Enter Your Card Details On Proceeding With The Selected Payment Options."




        div.append(all_img_div,all_img_div2,all_img_div3,all_img_div4)
        
        
    

    document.querySelector("#display_card").append(p,div,button,note)
    // document.querySelector("#display_card").append(button)
}


function credit_card(){
    document.querySelector("#display_card").innerHTML="";
    let p=document.createElement("p")
        p.innerHTML=`CHOOSE YOUR DEBIT CARD TYPE`
    let div=document.createElement("div")
            div.setAttribute("id","all_card_div")
    let all_img_div=document.createElement("div")
        all_img_div.setAttribute("id","all_img_div")
   let img=document.createElement("img")
            img.src="https://ii1.pepperfry.com/images/american-card-img.png"
    let radio=document.createElement("input")
        radio.setAttribute("type","radio")
    
        all_img_div.append(radio,img)   
       

        let all_img_div2=document.createElement("div")
        all_img_div2.setAttribute("id","all_img_div")
   let img2=document.createElement("img")
            img2.src="https://ii1.pepperfry.com/images/diners/rupay-card-img.png"
    let radio2=document.createElement("input")
        radio2.setAttribute("type","radio")
        
        all_img_div2.append(radio2,img2) 

    
        let all_img_div3=document.createElement("div")
        all_img_div3.setAttribute("id","all_img_div")
   let img3=document.createElement("img")
            img3.src="https://ii1.pepperfry.com/images/maestro-card-img.png"
    let radio3=document.createElement("input")
        radio3.setAttribute("type","radio")
        
        all_img_div3.append(radio3,img3) 

    
        let all_img_div4=document.createElement("div")
        all_img_div4.setAttribute("id","all_img_div")
   let img4=document.createElement("img")
            img4.src="https://ii1.pepperfry.com/images/visa-card-img.png"
    let radio4=document.createElement("input")
        radio4.setAttribute("type","radio")

        all_img_div4.append(radio4,img4) 

    let button=document.createElement("button")
        button.setAttribute("id","proceed_btn")
        button.addEventListener("click",next_page)
        button.innerHTML=`PROCEED ${total_amount}`
    
        let note= document.createElement("p")
            note.innerHTML="Note: You Will Be Asked To Enter Your Card Details On Proceeding With The Selected Payment Options."




        div.append(all_img_div,all_img_div2,all_img_div3,all_img_div4)
        
        
    

    document.querySelector("#display_card").append(p,div,button,note)

}




  
function display(ordered_product){
    document.querySelector("#added_items").innerHTML = null;    
    ordered_product.map((el)=>{

       let div= document.createElement("div")
            div.setAttribute("id","cart_add_div")

        let img = document.createElement("img")
            img.setAttribute("id","cart_img")
            img.src=el.image

        let div_two=document.createElement("div")
            div_two.setAttribute("id","div_two")

        let p=document.createElement("p")
            p.innerHTML="Delivery by"
        
        let date= document.createElement("p")
            date.innerHTML="12-jan-2022"

        let div_three=document.createElement("div")
            div_three.setAttribute("id","div_three")

        let qty=document.createElement("p")
            qty.innerHTML=`${el.count} Qty`

        let ruppes=document.createElement("p")
            ruppes.innerHTML=`₹ ${el.total}`
            ruppes.style.color="#ef3523";

        div_three.append(ruppes)

        div_two.append(p,date,div_three)




        div.append(img,div_two)
        
        // billing_amount+=Number(el.price)

        document.querySelector("#added_items").append(div)

    })
}

final_billing()

function final_billing(){
    let div1=document.createElement("div")

    let p=document.createElement("p")
        p.innerHTML="Cart Value"
    let tot_price_btn=document.createElement("button")
        tot_price_btn.innerHTML=`₹ ${total_amount}`// amount needed here
    div1.append(p,tot_price_btn)


    let div2=document.createElement("div")
    let p1=document.createElement("p")
        p1.innerHTML="Retail Discount"
    let discount=document.createElement("button")
        discount.innerHTML=`(-) ₹ ${Retail_price-billing_amount}`// amount needed here
        div2.style.color="green"
        discount.style.color="green"
        div2.append(p1,discount)
    
    let div3=document.createElement("div")
    let delivery=document.createElement("p")
        delivery.innerHTML="Delivery"

    let delivery_charg=document.createElement("button")
    
        if(billing_amount<999 &&billing_amount!=0){  // amount needed here
            delivery_charg.innerHTML=`₹ ${200}`;
            total_amount+=200;
        }else{
            delivery_charg.innerHTML=`₹ ${0}`;
            delivery.innerHTML="Delivery (Free)"
            delivery.style.color="#f16521"

        }
        div3.append(delivery,delivery_charg)
    
    let div4=document.createElement("div")
    let assembly=document.createElement("p")
        assembly.innerHTML="Assembly"
    let asse_but=document.createElement("button")
        asse_but.innerHTML=`₹ ${assembly_price}`
   
        
    div4.append(assembly,asse_but)



    total_amount+=billing_amount  // amount needed here
let tot_div =document.createElement("div")
        tot_div.setAttribute("id","tot_div")
    let total=document.createElement("h3")
        total.innerHTML="Total"
    let tot_button=document.createElement("button")
        tot_button.innerHTML=`₹ ${total_amount}`;
        
        
        tot_div.append(total,tot_button)

    document.querySelector("#rigth_billing").append(div1,div2,div3,div4,tot_div)
   
}



document.getElementById("add_sav_btn").addEventListener("click",saveaddres)

function saveaddres(event){
event.preventDefault()
    let obj={
        Name:document.getElementById("c_name").value,
        Phone_Number:document.getElementById("c_number").value,
        Pincode:document.getElementById("c_pincode").value,
        Address:document.getElementById("textarea").value,
        Place:document.getElementById("c_place").value,
        State:document.getElementById("dropup").value,
        Country:document.getElementById("c_country").value

    }
    alert("Address Successfully Saved")
    location.reload()

    console.log(obj)
}


document.getElementById("sigin_butn").addEventListener("click",signinchk)
let userdb=JSON.parse(localStorage.getItem("userdb"))

function signinchk(event){
event.preventDefault();

    let email=document.getElementById("input_gmail").value
    let pass=document.getElementById("input_password").value
    let yes=0;
    for(let i=0;i<userdb.length;i++){

        if(userdb[i].email==email&&userdb[i].pass==pass){
            yes++;
        }
    }
    if(yes>0){
        alert("ur loggedin")
    }else{
        alert("pls register")
    }
    

}



function next_page(){
    localStorage.setItem('myFavoriteSandwich', 'turkey');
    window.location.href="cardDetalis.html"
}
