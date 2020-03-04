/* 
 Anirudh Giran
 991570520
 Date: January 21, 2020
 Assignment #1
 */
var iphone=0,oneplus=0,samsung=0,pixel=0,total;
var prod1,prod2,prod3,prod4;

function startUp(){
    prod1 = document.getElementById("iphoneInfo");
    prod2 = document.getElementById("oneplusInfo");
    prod3 = document.getElementById("samsungInfo");
    prod4 = document.getElementById("pixelInfo");
}

function iphoneInfo() {
    prod1.innerHTML = "<p>An all new iPhone with better and improved camera,\n\
                            performance and style.\n\
                            Long lasting battery life and bright display.</p>";
    
}

function resetiphoneInfo() {
    prod1.innerHTML = "More Information";
  
}

function oneplusInfo() {
    prod2.innerHTML = "<p>A device made by people, for the people.\n\
                               We asked the user about their needs and \n\
                            tried to make it upto the people's expectations.</p>";
}

function resetoneplusInfo() {
    prod2.innerHTML = "More Information";
}

function samsungInfo() {
    prod3.innerHTML = "<p>An android smartphone which houses the best \n\
                             processor ever made for mobile phones but \n\
                             still being sleek at the same time</p>";
}

function resetsamsungInfo() {
    prod3.innerHTML = "More Information";
}

function pixelInfo() {
    prod4.innerHTML = "<p>An android smartphone that will get\n\
                             updates from Google right at the moment of launch. \n\
                                Keeps your precious data secure.</p>";
}

function resetpixelInfo() {
    prod4.innerHTML = "More Information";
}

function iphoneOrder(){
            if(confirm("Do you want to buy the product?")){
            iphone= prompt("How many do you want to buy?");
            if(iphone>0 ){
                alert("Thanks for choosing us");
                iphoneCount();
            }else if(iphone ===  null || iphone ===""){
                
                if(confirm("Cancel Purchase?")){
                    alert("Pleasure serving you");}
                else{
                    iphone = prompt("How many do you want to buy?");
            if(iphone>0 ){
                alert("Thanks for choosing us");
                }
                
                
            }
                
    }


}
    else{
        alert("Purchase Cancelled");
    }
        
  
function iphoneCount(){
    var count = document.getElementById("iphoneCount");
    count.innerHTML = "iPhone 11 Orders: " + iphone ;

} 






} 

function oneplusOrder(){
            if(confirm("Do you want to buy the product?")){
            oneplus= prompt("How many do you want to buy?");
            if(oneplus>0 ){
                alert("Thanks for choosing us");
                oneplusCount();
            }else if(oneplus ===  null || oneplus ===""){
                
                if(confirm("Cancel Purchase?")){
                    alert("Pleasure serving you");}
                else{
                    oneplus = prompt("How many do you want to buy?");
            if(oneplus>0 ){
                alert("Thanks for choosing us");
                }
                
                
            }
                
    }


}
    else{
        alert("Purchase Cancelled");
    }
        
  
function oneplusCount(){
    var count = document.getElementById("oneplusCount");
    count.innerHTML = "OnePlus 6T Orders: " + oneplus ;

} 






}

function samsungOrder(){
            if(confirm("Do you want to buy the product?")){
            samsung= prompt("How many do you want to buy?");
            if(samsung>0 ){
                alert("Thanks for choosing us");
                oneplusCount();
            }else if(samsung ===  null || samsung ===""){
                
                if(confirm("Cancel Purchase?")){
                    alert("Pleasure serving you");}
                else{
                    samsung = prompt("How many do you want to buy?");
            if(samsung>0 ){
                alert("Thanks for choosing us");
                }
                
                
            }
                
    }


}
    else{
        alert("Purchase Cancelled");
    }
        
  
function oneplusCount(){
    var count = document.getElementById("samsungCount");
    count.innerHTML = "Samsung S10 Orders: " + samsung ;

} 
}

function pixelOrder(){
            if(confirm("Do you want to buy the product?")){
            pixel= prompt("How many do you want to buy?");
            if(pixel>0 ){
                alert("Thanks for choosing us");
                pixelCount();
            }else if(pixel ===  null || pixel ===""){
                
                if(confirm("Cancel Purchase?")){
                    alert("Pleasure serving you");}
                else{
                    pixel = prompt("How many do you want to buy?");
            if(pixel>0 ){
                alert("Thanks for choosing us");
                }
                
                
            }
                
    }


}
    else{
        alert("Purchase Cancelled");
    }
        
  
function pixelCount(){
    var count = document.getElementById("pixelCount");
    count.innerHTML = "Google Pixel 4 Orders: " + pixel ;

} 
}

function totalCount(){
    total = parseInt(iphone)+parseInt(oneplus)+parseInt(samsung)+parseInt(pixel);
    alert("Total numbers of Orders: " + total);
    
}
    