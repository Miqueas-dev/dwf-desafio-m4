function myServices() {
   return fetch("https://cdn.contentful.com/spaces/w2omesemomr4/environments/master/entries?access_token=Z2nP3X6SxPNFw7u-MdRSMmXrD7ukO0UZUxVj5MYjdP4&content_type=myServices")
      .then(res => res.json())
      .then((data) => myServicesRes(data));
   
   function myServicesRes(data) {
      // console.log(data)

      const templateServicesEl = document.querySelector("#services-template");
      const containerEl = document.querySelector(".services__container-general");
      const dataItems = data.items;   
      
      for (let i = 0; i < dataItems.length; i++){
         const clone = templateServicesEl.content.cloneNode(true);
         
         let imgMyServices = clone.querySelector(".services__container-img").src =
            data.includes.Asset[0].fields.file.url;
      
         let subTitleMyServices = clone.querySelector(".services__container-subtitle").textContent =
               dataItems[i].fields.subtitle;
         
         let textMyServices = clone.querySelector(".services__container-text").textContent =
            dataItems[i].fields.parrafo.content[0].content[0].value;
         
         containerEl.appendChild(clone);
      };
   };
};

function main() {
   createHeader(document.querySelector(".container-header"));
   footerComponent(document.querySelector(".container-footer"));
   myServices();
}
main()