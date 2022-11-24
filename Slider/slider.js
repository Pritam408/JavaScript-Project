const left=document.querySelector(".left");
const right=document.querySelector(".right");
const slider=document.querySelector(".slider");
const images=document.querySelectorAll(".image");

let slideNumber=1;
right.addEventListener("clcik",()=>{
    if(slideNumber < images.length){
    slider.style.transform=`translateX(-${slideNumber * 800}px)`;
    slideNumber++;
    }else{
        slideNumber.style.transform=`translate(0px)`;
        slideNumber =1;
    }
})