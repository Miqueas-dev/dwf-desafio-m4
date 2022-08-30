function footerComponent(footerContainer) {
   const footerEl = document.createElement("div");
   
   footerEl.innerHTML = ` <footer class="footer-container">
   <div class="footer-container__components-logo">
      <img src="./img/logo.png" class="personal-logo">
   </div>
   <div class="footer-container__components-redes">
      <div class="footer-container__components-redes-links">
         <a href="https://www.instagram.com/miqueas_lazarte/" target="_blank">
            <img src="img/icon-ig.png" class="logo-redes">
         </a>
         <a href="https://www.instagram.com/miqueas_lazarte/" target="_blank" class="nombres-redes">Instagram</a>
      </div>
      <div class="footer-container__components-redes-links" target="_blank">
         <a href="https://www.linkedin.com/in/miqueas-lazarte-172060209/" target="_blank">
            <img src="img/icon-ln.png" class="logo-redes">
         </a>
         <a href="https://www.linkedin.com/in/miqueas-lazarte-172060209/" target="_blank" class="nombres-redes" >Linkedin</a>
      </div>
      <div class="footer-container__components-redes-links">
         <a href="https://github.com/Miqueas-dev" target="_blank">
            <img src="img/icon-git.png" class="logo-redes" >
         </a>
         <a href="https://github.com/Miqueas-dev" target="_blank" class="nombres-redes">GitHub</a>
      </div>
   </div>
</footer>`;
   
   footerContainer.appendChild(footerEl)
};
