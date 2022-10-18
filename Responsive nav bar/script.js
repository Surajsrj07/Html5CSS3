window.onload = function(){

    const menu_bar = document.querySelector('.hamburger');

    const mob_nav = document.querySelector('.mob-nav');
    
    menu_bar.addEventListener('click', function(){

        menu_bar.classList.toggle('is-active');
        mob_nav.classList.toggle('is-active');


    });

};