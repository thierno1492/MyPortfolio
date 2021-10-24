/* SIDE NAVIGATION JS CODE */
let menuBtn = document.querySelector('.navbar__btn');
let cancelBtn = document.querySelector('.navbar__btn-cancel');
let navbar = document.querySelector('.navbar');

menuBtn.onclick = function() {
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    navbar.classList.add('active');
}

cancelBtn.onclick = () => {
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    navbar.classList.remove('active');
}

/* STICKY NAVIGATION MENU JS */
let nav = document.querySelector('nav');
let val;
window.onscroll = () => {
    if(document.documentElement.scrollTop > 20) {
        nav.classList.add('sticky');
    }else{
        nav.classList.remove('sticky');
    }
}

/* Navegación cuando se clica en un elemento, el menú se cierra */
let navLinks = document.querySelectorAll('.navbar__menu li a');
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', () => {
        menuBtn.style.opacity = "1";
        menuBtn.style.pointerEvents = "auto";
        navbar.classList.remove('active');
    });
}


