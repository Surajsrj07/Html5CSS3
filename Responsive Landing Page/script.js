
const moveTop = document.querySelector('.top-page');

window.addEventListener('scroll', () => {
    var y = window.scrollY;
    if (y >= 800) {
        moveTop.classList.add('active');
    } 
    else {
        moveTop.classList.remove('active');
    }

});