
const causaRemision = document.querySelector(".causaRemision");
const input = document.querySelector("[name=otraCausaRemision]");

const listaServ = document.querySelector("[name=servicioSolicitado]");
const escalonamiento = document.querySelector("[name=escal]"); 

causaRemision.addEventListener("change", () => { 

  if (causaRemision.value === 'Valoración especialista') {
      //listaEsp.style.display = 'initial';
      listaServ.style.display = 'none';
      input.style.display = 'none'; 
      escalonamiento.style.display = 'none';

  }else if (causaRemision.value === 'Toma de ayuda diagnostica laboratorio' || causaRemision.value === 'Toma de ayuda diagnostica imagen') {
    escalonamiento.style.display = 'none';
   
    listaServ.style.display = 'initial';
    input.style.display = 'none'; 

  }
  else if (causaRemision.value === 'Escalonamiento de antibiotico' || causaRemision.value === 'Otra') {
    input.style.display = 'initial';
   
    listaServ.style.display = 'none';
  }else {
    
    listaServ.style.display = 'none';
    input.style.display = 'none';
    escalonamiento.style.display = 'none'; 


  }
});

