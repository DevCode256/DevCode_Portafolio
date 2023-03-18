var typed = new Typed(".multiple-text", {

    strings: ["Desarrollo Web", "Creador de Cotenido", "Implementación de LMS", "Implementación de CMS", 
    "Soporte Técnico"],
    typeSpeed:100,
    backSpeed: 100,
    backDelay:1000,
    loop:true
})
//animacion en la tab titles
const t= document.querySelector('title'), w = 'Bienvenido', e = 'Dev Code';
let c = 0;
setInterval(() =>{
c= (c< w.length) ? c + 1: 0;
t.textContent=w.slice(0,c);
if(c === w.length) setTimeout(() => t.textContent += '${e}, 500');
}, 500);

//togle incon navbar para que aparesca y desapáresca el icono del menu
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =() => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
//scroll sectiones active los link del menu 
//let sections = document.querySelectorAll('section');
//let navLinks = document.querySelectorAll('header nav a');

window.onscroll =()=>{
    sections.forEach(sec =>{
        let top = window.scrollY
        let offset =sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
              navLinks.forEach(links => {
                links.classList.remove('ative');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
              })
        };
    });
    //sticky nabar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    //remove togle icon and navar when  click navbar  link (scroll)
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

//scroll reveal esto es para darle movimiento ala pgina web y hacerlo que se aparesca el menu 
//ScrollReveal({ 
    reset: true, 
    distance: '80px',
    duration: 2000,
    delay: 200
//});

//ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
//ScrollReveal().reveal('.home-img, .services-container, .portafolio-box, .contact form ', { origin: 'bottom' });
//ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
//ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });