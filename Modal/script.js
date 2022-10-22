window.onload = function(){

    const btnOpen = document.querySelector(".btnOpen");
    const btnClose = document.querySelectorAll(".btnClose");
    const modalContainer = document.querySelector(".modal-container");

    btnOpen.addEventListener('click', function(){
        modalContainer.classList.add('show');
    });

    
    

    btnClose.forEach(btn=>{
        btn.addEventListener('click', function(){
            modalContainer.classList.remove('show');
        });
    
    })

// Other methods:-

// for(let i=0;i<btnClose.length;i++){
    //     btnClose[i].addEventListener('click', function(){
    //     modalContainer.classList.remove('show');
    //     });
    // }

    // btnClose.addEventListener('click', function(){
    //    modalContainer.classList.remove('show');
    // });



}