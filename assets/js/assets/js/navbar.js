// Navbar Scroll

window.addEventListener("scroll",()=>{

const navbar=document.querySelector(".navbar");

if(window.scrollY>40){

navbar.classList.add("scrolled");

}else{

navbar.classList.remove("scrolled");

}

});