function myServicesContentufl() {
   fetch("https://cdn.contentful.com/spaces/w2omesemomr4/environments/master/entries?access_token=nByXFxyKJmG0LXK0-NinfueyFsZmPP916pbupLkzf4s&content_type=work")
      .then(res => res.json())
      .then((data) => myServicesCms(data));
   
      
      function myServicesCms(data) {
         const dataCms = data.items;
      const templateEl = document.querySelector("#portfolio-template");
      const containerPortEl = document.querySelector(".portfolio__container");
      for (let i = 0; i < dataCms.length; i++){
         const clone = templateEl.content.cloneNode(true)
         let imgCms = clone.querySelector(".portfolio__container-img").src =
            data.includes.Asset[i].fields.file.url;
         
         let titleCms = clone.querySelector(".portfolio__container-subtitle").textContent =
            dataCms[i].fields.titulo;
         
         let descriptionCms = clone.querySelector(".portfolio__container-text").textContent =
            dataCms[i].fields.description;
         
         let linkPortfolio = clone.querySelector(".portfolio-link").href =
            dataCms[i].fields.url;
         containerPortEl.appendChild(clone)
      }
   }
}





function main() {
   createHeader(document.querySelector(".contenedor-header"));
   footerComponent(document.querySelector(".contenedor-footer"));
   myServicesContentufl();
}
main();