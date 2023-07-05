// Metodo más nuevo para traer elementos del DOM
const navToggle=document.querySelector('.nav-toggle'); //Usar para reglas de busqueda más complejas 
const navLinks = document.querySelectorAll(".nav__link");
//evento usando una funcion anonima, que tiene varias diferencias 
navToggle.addEventListener('click', ()=>{
   document.body.classList.toggle('nav-open');
});

navLinks.forEach(link =>{
    link.addEventListener("click",() =>{
        document.body.classList.remove("nav-open")
    })
})

