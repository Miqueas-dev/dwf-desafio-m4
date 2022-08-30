// Bienvenida -- title

function welcome() {
   return fetch("https://cdn.contentful.com/spaces/w2omesemomr4/environments/master/entries?access_token=Z2nP3X6SxPNFw7u-MdRSMmXrD7ukO0UZUxVj5MYjdP4&content_type=welcome")
      .then((res) => res.json())
      .then((data) => welcomeRes(data));
   
   function welcomeRes(data) {
      // console.log(data)
      const templateEl = document.querySelector("#welcome-template");
      const containerEl = document.querySelector(".welcome");
      const clone = templateEl.content.cloneNode(true);

      var titleEl = clone.querySelector(".welcome__title").textContent =
         data.items[0].fields.title;
      containerEl.appendChild(clone);
   };
};

// Quien soy --titulo --imagen -- descripcion

function whoIAm() {
   return fetch("https://cdn.contentful.com/spaces/w2omesemomr4/environments/master/entries?access_token=Z2nP3X6SxPNFw7u-MdRSMmXrD7ukO0UZUxVj5MYjdP4&content_type=presentation")
      .then(res => res.json())
      .then((data) => whoIAmRes(data));

   function whoIAmRes(data) {
      // console.log(data)
      const templatePresentationEl = document.querySelector("#template-presentation");
      const containerPresentationEl = document.querySelector(".presentation");

      const clone = templatePresentationEl.content.cloneNode(true);

      let titlePresentationEl = clone.querySelector(".presentation__title").textContent =
         data.items[0].fields.titlePresentation;
      let textPresentationEl = clone.querySelector(".presentation__text").textContent =
         data.items[0].fields.parrafo.content[0].content[0].value;
      let imagenPresentationEl = clone.querySelector(".presentation__img").src =
         data.includes.Asset[0].fields.file.url;
      
      containerPresentationEl.appendChild(clone);
   };
};

// Mis servicios --Mis servicios -lo que hago

function myServices() {
   return fetch("https://cdn.contentful.com/spaces/w2omesemomr4/environments/master/entries?access_token=Z2nP3X6SxPNFw7u-MdRSMmXrD7ukO0UZUxVj5MYjdP4&content_type=myServices")
      .then(res => res.json())
      .then((data) => myServicesRes(data));
   
   function myServicesRes(data) {
      // console.log(data)

      const templateServicesEl = document.querySelector("#template-myservices");
      const containerEl = document.querySelector(".my-services__container-general");
      const dataItems = data.items;   
      
      for (let i = 0; i < dataItems.length; i++){
         const clone = templateServicesEl.content.cloneNode(true);
         
         let imgMyServices = clone.querySelector(".my-services__container-img").src =
            data.includes.Asset[0].fields.file.url;
      
         let subTitleMyServices = clone.querySelector(".my-services__container-subtitle").textContent =
               dataItems[i].fields.subtitle;
         
         let textMyServices = clone.querySelector(".my-services__container-text").textContent =
            dataItems[i].fields.parrafo.content[0].content[0].value;
         
         containerEl.appendChild(clone);
      };
   };
};

// invoco funciones en main
function main() {
   createHeader(document.querySelector(".header-div"));
   welcome();
   whoIAm();
   formComponent(document.querySelector(".form-div"));
   myServices();
   footerComponent(document.querySelector(".footer-div"));
}
main();