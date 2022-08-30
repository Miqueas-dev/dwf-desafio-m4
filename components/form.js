function sendForm(formDataEl) {
   formDataEl.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(formDataEl);
      // CON ENTRIES LO PASO A OBJ
      const formObject = Object.fromEntries(formData.entries());
      fetch('https://apx-api.vercel.app/api/utils/dwf', {
         method: "POST",
         headers: { "content-type": "application/json" },
         // CON JSON.stringify parseo a JSON text
         body: JSON.stringify({
            to: "miqueaslazarte03@gmail.com",
            message: `Nombre: ${formObject.user},
            Email: ${formObject.email}, 
            Mensaje: ${formObject.message}`
         })
      }).then(data => data.json());
         formDataEl.reset();
      });
}
function formComponent(formContainer) {
   const formEl = document.createElement("div");

   formEl.innerHTML = `<section class="form">
   <div class="form__container">
      <h2 class="form__container-title">Escribime</h2>
      <form class="form__container-form">
         <label>
            <h3 class="form__container-form-name">NOMBRE</h3>
            <input type="text" name="user" placeholder="ej: Juan" class="form__container-form-input">
         </label>
         <label>
            <h3 class="form__container-form-name">EMAIL</h3>
            <input type="email" name="email" placeholder="ej: tu_email@gmail.com" class="form__container-form-input">
         </label>
         <label>
            <h3 class="form__container-form-name">Mensaje</h3>
            <textarea name="message" placeholder="Deja aquí tu mensaje"></textarea>
         </label>
         <div class="button">
            <button class="button_send">Enviar</button>
         </div>
      </form>
   </div>
</section>`;
   const formDataEl = formEl.querySelector(".form__container-form");
   sendForm(formDataEl);
   formContainer.appendChild(formEl);
};
