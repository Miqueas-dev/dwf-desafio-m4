function createHeader(containerHeader) {

   // const headerEl = document.querySelector(".header-div");
   const headerEl = document.createElement("div");

   headerEl.innerHTML = `<header class="header">
   <div class="header__container">
      <a title="logo-img" href="./index.html">
         <img class="header__logo" src="./img/logo.png" alt="logo-img">
      </a>
      <div class="bars__menu">
         <span class="line1__bars-menu"></span>
         <span class="line2__bars-menu"></span>
         <span class="line3__bars-menu"></span>
      </div>
      <div class="nav-menu">
         <nav class="header__container-navs">
            <a href="./portfolio.html">Portfolio</a>
            <a href="./servicios.html">Servicios</a>
            <a href="./contacto.html">Contacto</a>
         </nav>
      </div>
   </div>
   <div class="header__container-content active" id="menusito" >
      <nav class="header__container-content-nav">
         <ul>
            <li class="header__li"><a class="link" href="./portfolio.html">Portfolio</a></li>
            <li class="header__li"><a class="link" href="./servicios.html">Servicios</a></li>
            <li class="header__li"><a class="link" href="./contacto.html">Contactos</a></li>
         </ul>
      </nav>
   </div>
</header>`;

const burgerEl = headerEl.querySelector(".bars__menu");

const ventanaNav = headerEl.querySelector(".header__container-content");

// ANIMACION DEL MENU HAMBURGUESA
let line1__bars = headerEl.querySelector(".line1__bars-menu");
let line2__bars = headerEl.querySelector(".line2__bars-menu");
let line3__bars = headerEl.querySelector(".line3__bars-menu");

burgerEl.addEventListener("click", function () {
   line1__bars.classList.toggle("activeline1__bars-menu");
   line2__bars.classList.toggle("activeline2__bars-menu");
   line3__bars.classList.toggle("activeline3__bars-menu");
});
// DESPLAZAMIENTO DEL MENU SEGUN EL CLICK
burgerEl.addEventListener("click", function (e) {
   ventanaNav.classList.toggle("active")
});
containerHeader.appendChild(headerEl);

};