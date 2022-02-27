// Adding Navbar --------------------------------------

import navbar from '../components/navbar.js'

    let navbar_section =  document.getElementById("header");
    navbar_section.innerHTML = navbar();

// Adding  Footer --------------------------------------

import footer from '../components/footer.js'

let footer_section = document.getElementById("footer");
footer_section.innerHTML = footer();

// Drop Down ------------------------------------------

let f = document.getElementById("f");
let furniture = document.getElementById("furniture-dropdown");

f.addEventListener("mouseover", ()=>{
    furniture.style.display = "block";
})

f.addEventListener("mouseout", ()=>{
    furniture.style.display = "none";
})

furniture.addEventListener("mouseover", ()=>{
    furniture.style.display = "block";
})

furniture.addEventListener("mouseout", ()=>{
    furniture.style.display = "none";
})

let l = document.getElementById("l");
let living = document.getElementById("living-dropdown");

l.addEventListener("mouseover", ()=>{
    living.style.display = "block";
})

l.addEventListener("mouseout", ()=>{
    living.style.display = "none";
})

living.addEventListener("mouseover", ()=>{
    living.style.display = "block";
})

living.addEventListener("mouseout", ()=>{
    living.style.display = "none";
})





// now for sliderUsing setTimeout

let arrSlide =["https://ii1.pepperfry.com/media/wysiwyg/banners/Promo_2X_19012022_nd.jpg",
            "https://ii1.pepperfry.com/media/wysiwyg/banners/Promo_2x_17012022_lfh.jpg",
            "https://ii1.pepperfry.com/media/wysiwyg/banners/DinningTable_HeroBanner_23122021.jpg",
            "https://ii2.pepperfry.com/media/wysiwyg/banners/Sofa_HeroBanner_23122021.jpg"];
    let SlideDiv = document.getElementById('slide-img')
    SlideDiv.src = arrSlide[0];
    let i=0;
    setInterval(() => {
        i++;
        if(i==arrSlide.length){
            i=0;
        }
        SlideDiv.src = arrSlide[i];
    }, 2000);

 // image to go on top
var mybutton = document.getElementById("goTop");
mybutton.addEventListener("click",function(){
    topFunction()
})

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  }
   else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  alert("hi")
}
function signUp(){
    alert("done");
}

