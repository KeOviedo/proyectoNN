/**************************************************************************************
 * SEGUIMIENTO CASO CONTRA
 **************************************************************************************/
 const tipoSeguimientoContra = document.querySelector(".tipoSeguimientoContra");
 const verificacionDerechosContra = document.querySelector(".verificacionDerechosContra");
 
 tipoSeguimientoContra.addEventListener("change", () => {
 
     verificacionDerechosContra.style.display = "none";
 
 });
 
 /*******************************************************************************
  * VALIDACION DE DERECHOS: EPS CONVENIO -> NO
  *******************************************************************************/
 const epsValidacionContra = document.querySelector(".epsValidacionContra");
 const cancelarRemisionNoContra = document.querySelector(".cancelarRemisionNoContra");
 const cancelarRemisionLabelContra = document.querySelector(".cancelarRemisionLabelContra");
 
 
 epsValidacionContra.addEventListener("change", () => {
 
 if (epsValidacionContra.value === "Si") {
     cancelarRemisionNoContra.style.display = 'initial';
     cancelarRemisionLabelContra.style.display = 'initial';
 
     }
     else if(epsValidacionContra.value === "No"){
         cancelarRemisionNoContra.style.display = 'none';
         cancelarRemisionLabelContra.style.display = 'none';
         // observacionesValidacionSi.style.display = 'none';
 
     }
     else {
     cancelarRemisionNoContra.style.display = 'none';
     cancelarRemisionLabelContra.style.display = 'none';
 
     }
 
 });
 
 /*******************************************************************************
  * VALIDACION DE DERECHOS: CANCELAR REMISION -> SI
  *******************************************************************************/
 const cancelarRemisionContra = document.querySelector(".cancelarRemisionContra");
 const observacionesValidacionSiContra = document.querySelector(".observacionesValidacionSiContra");
 const tipoRegimenNoLabelContra = document.querySelector(".tipoRegimenNoLabelContra");
 const tipoRegimenNoContra = document.querySelector(".tipoRegimenNoContra");
 const aseguradoraVerificarLabelContra = document.querySelector(".aseguradoraVerificarLabelContra");
 const aseguradoraVerificarContra = document.querySelector(".aseguradoraVerificarContra");
 const lugarCapitaNoLabelContra = document.querySelector(".lugarCapitaNoLabelContra");
 const lugarCapitaNoContra = document.querySelector(".lugarCapitaNoContra");
 const lugarCapitaNoLabelNombreContra = document.querySelector(".lugarCapitaNoLabelNombreContra");
 
 cancelarRemisionContra.addEventListener("change", () => {
 if (cancelarRemisionContra.value === "Si") {
     observacionesValidacionSiContra.style.display = 'initial';
     tipoRegimenNoLabelContra.style.display = 'none';
     tipoRegimenNoContra.style.display = 'none';
     aseguradoraVerificarLabelContra.style.display = 'none';
     aseguradoraVerificarContra.style.display = 'none';
     lugarCapitaNoLabelContra.style.display = 'none';
     lugarCapitaNoContra.style.display = 'none';
     lugarCapitaNoLabelNombreContra.style.display = 'none';
 
 }
 else if(cancelarRemisionContra.value === "No"){
     observacionesValidacionSiContra.style.display = 'none';
     tipoRegimenNoLabelContra.style.display = 'initial';
     tipoRegimenNoContra.style.display = 'initial';
     aseguradoraVerificarLabelContra.style.display = 'initial';
     aseguradoraVerificarContra.style.display = 'initial';
     lugarCapitaNoLabelContra.style.display = 'initial';
     lugarCapitaNoContra.style.display = 'initial';
     lugarCapitaNoLabelNombreContra.style.display = 'initial';
 
 }
 else {
     observacionesValidacionSiContra.style.display = 'none';
     tipoRegimenNoLabelContra.style.display = 'none';
     tipoRegimenNoContra.style.display = 'none';
     aseguradoraVerificarLabelContra.style.display = 'none';
     aseguradoraVerificarContra.style.display = 'none';
     lugarCapitaNoLabelContra.style.display = 'none';
     lugarCapitaNoContra.style.display = 'none';
     lugarCapitaNoLabelNombreContra.style.display = 'none';
 
 }
 });