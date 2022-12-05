let text = document.querySelector("#text");

window.addEventListener('scroll',()=>{
    
    let value =window.scrollY;

    text.style.fontSize=value*1+"px";

});


