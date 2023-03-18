let skin_photo1 = document.getElementById("skin_photo1");
let skin_photo2 = document.getElementById("skin_photo2");
let skin_photo3 = document.getElementById("skin_photo3");
let skin_photo4 = document.getElementById("skin_photo4");
let skin_photo5 = document.getElementById("skin_photo5");
let skin_photo6 = document.getElementById("skin_photo6");
let hide_show1 = document.getElementById("hide_show1");
let hide_show2 = document.getElementById("hide_show2");
let hide_show3 = document.getElementById("hide_show3");
let hide_show4 = document.getElementById("hide_show4");
let hide_show5 = document.getElementById("hide_show5");
let hide_show6 = document.getElementById("hide_show6");
let price_bar = document.getElementById("price_bar");
let display_price = document.getElementById("rangeValue");



price_bar.onchange = function sorting () {
    
    if(display_price.innerHTML > 1000 ){
        hide_show1.className="gaqroba";  
    }
    
    if(display_price.innerHTML < 1000 ){
        hide_show1.className="";
    }


    if(display_price.innerHTML > 2000 ){
        hide_show2.className="gaqroba";  
    }
    
    if(display_price.innerHTML < 2000 ){
        hide_show2.className="";
    }


    if(display_price.innerHTML > 4000 ){
        hide_show3.className="gaqroba";  
    }
    
    if(display_price.innerHTML < 4000 ){
        hide_show3.className="";
    }


    if(display_price.innerHTML > 6000 ){
        hide_show4.className="gaqroba";  
    }
    
    if(display_price.innerHTML < 6000 ){
        hide_show4.className="";
    }
 

    if(display_price.innerHTML > 8000 ){
        hide_show5.className="gaqroba";  
    }
    
    if(display_price.innerHTML < 8000 ){
        hide_show5.className="";
    }
 
}
