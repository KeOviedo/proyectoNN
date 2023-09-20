 //AL SELECIONAR UNA OPCION CAMBIA AL CODIGO ASIGNADO EN VALUE - FUNCIONA COMO ESTA
 function cambiaTexto(elemento){
     if(elemento.value === "")  return
     elemento.selectedOptions[0].firstChild.textContent = elemento.value;
}



// $("#miFormulario").on("#codigoConsulta", function cambiaTexto(elemento){
//      if(elemento.value === ""){
//           return elemento.selectedOptions[0].firstChild.textContent = elemento.value;
//      }
// });


