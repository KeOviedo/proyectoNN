const tipoSeguimiento = document.querySelector(".tipoSeguimiento");
const verificacionDerechos = document.querySelector(".verificacionDerechos");


tipoSeguimiento.addEventListener("change", () => {

    verificacionDerechos.style.display = "none";

});


/*******************************************************************************
 * VALIDACION DE DERECHOS: EPS CONVENIO -> NO
 *******************************************************************************/
const epsValidacion = document.querySelector(".epsValidacion");
const cancelarRemisionNo = document.querySelector(".cancelarRemisionNo");
const cancelarRemisionLabel = document.querySelector(".cancelarRemisionLabel");


epsValidacion.addEventListener("change", () => {

if (epsValidacion.value === "No") {
    cancelarRemisionNo.style.display = 'initial';
    cancelarRemisionLabel.style.display = 'initial';

    }
    else if(epsValidacion.value === "Si"){
    cancelarRemisionNo.style.display = 'initial';
    cancelarRemisionLabel.style.display = 'initial';

    // observacionesValidacionSi.style.display = 'initial';
    // tipoRegimenNoLabel.style.display = 'initial';
    // tipoRegimenNo.style.display = 'initial';
    // aseguradoraVerificarLabel.style.display = 'initial';
    // aseguradoraVerificar.style.display = 'initial';
    // lugarCapitaNoLabel.style.display = 'initial';
    // lugarCapitaNo.style.display = 'initial';
    // lugarCapitaNoLabelNombre.style.display = 'initial';

    }
    else {
    cancelarRemisionNo.style.display = 'none';
    cancelarRemisionLabel.style.display = 'none';

    // observacionesValidacionSi.style.display = 'none';
    // tipoRegimenNoLabel.style.display = 'none';
    // tipoRegimenNo.style.display = 'none';
    // aseguradoraVerificarLabel.style.display = 'none';
    // aseguradoraVerificar.style.display = 'none';
    // lugarCapitaNoLabel.style.display = 'none';
    // lugarCapitaNo.style.display = 'none';
    // lugarCapitaNoLabelNombre.style.display = 'none';

    }

});


/*******************************************************************************
 * VALIDACION DE DERECHOS: CANCELAR REMISION -> SI
 *******************************************************************************/
const cancelarRemision = document.querySelector(".cancelarRemision");

const motivoDeCancelacionDerechoLabel  = document.querySelector(".motivoDeCancelacionDerechoLabel"); 
const motivoDeCancelacionDerechoSelect = document.querySelector(".motivoCancelacionSelect"); 

cancelarRemision.addEventListener("change", () => {
if (cancelarRemision.value === "Si") {
    motivoDeCancelacionDerechoLabel.style.display = 'initial';
    motivoDeCancelacionDerechoSelect.style.display = 'initial';
    

}
else if(cancelarRemision.value === "No"){
    motivoDeCancelacionDerechoLabel.style.display = 'none';
    motivoDeCancelacionDerechoSelect.style.display = 'none';
    

}else{
    motivoDeCancelacionDerechoLabel.style.display = 'none';
    motivoDeCancelacionDerechoSelect.style.display = 'none';
}

});

/*******************************************************************************
 * RELLAMADA: CAUSA RETRASO -> SI
 *******************************************************************************/

const causaRetrasoRellamada = document.querySelector(".causaRetrasoRellamada"); 
const porqueCausaRetradoDiv = document.querySelector(".porqueRetraso");
causaRetrasoRellamada.addEventListener("change", () => {
    if(causaRetrasoRellamada === "Si"){
        porqueCausaRetradoDiv.style.display = 'initial';
    }else if(causaRetrasoRellamada === "No"){
        porqueCausaRetradoDiv.style.display = 'none';
    }else{
        porqueCausaRetradoDiv.style.display = 'none';
    }
});



/*******************************************************************************
 * VALIDACION DE DERECHOS: COMENTARIO IPS -> CUANDO SELECCIONO ACEPTACION: SI
 *******************************************************************************/

// const requiereTrasladoComentarioIps = document.querySelector(".requiereTrasladoComentarioIps");
// const miDivTraslado = document.querySelector(".miDivTraslado");
// const miDivTraslado1 = document.querySelector(".miDivTraslado1");
// const miDivTraslado2 = document.querySelector(".miDivTraslado2");
// const miDivTraslado3 = document.querySelector(".miDivTraslado3");
// const miDivTriage = document.querySelector(".miDivTriage");



// requiereTrasladoComentarioIps.addEventListener("change", () => {
// if (requiereTrasladoComentarioIps.value === "No") {

//     miDivTraslado.style.display = 'none';
//     miDivTraslado1.style.display = 'none';
//     miDivTraslado2.style.display = 'none';
//     miDivTraslado3.style.display = 'none';
//     miDivTriage.style.display = 'none';

// } else if (requiereTrasladoComentarioIps.value === "Si"){
    
//     miDivTraslado.style.display = 'initial';
//     miDivTraslado1.style.display = 'initial';
//     miDivTraslado2.style.display = 'initial';
//     miDivTraslado3.style.display = 'initial';
//     miDivTriage.style.display = 'initial';

// }
// else {

//     miDivTraslado.style.display = 'none';
//     miDivTraslado1.style.display = 'none';
//     miDivTraslado2.style.display = 'none';
//     miDivTraslado3.style.display = 'none';
//     miDivTriage.style.display = 'none';
// }
// });


/*******************************************************************************
 * RELLAMADA: CAUSA RETRASO -> SI
 *******************************************************************************/

// const continuaReferenciaSi = document.querySelector(".continuaReferenciaSi"); 
// const motivoCancelacionTeleconsultaLabel = document.querySelector(".motivoCancelacionTeleconsultaLabel");
// const motivoCancelacionTeleconsulta = document.querySelector(".motivoCancelacionTeleconsulta");


// continuaReferenciaSi.addEventListener("change", () => {
//     if(continuaReferenciaSi === "Si"){
//         motivoCancelacionTeleconsultaLabel.style.display = 'initial';
//         motivoCancelacionTeleconsulta.style.display = 'initial';

//     }else if(continuaReferenciaSi === "No"){
//         motivoCancelacionTeleconsultaLabel.style.display = 'none';
//         motivoCancelacionTeleconsulta.style.display = 'none';

//     }else{
//         motivoCancelacionTeleconsultaLabel.style.display = 'none';
//         motivoCancelacionTeleconsulta.style.display = 'none';
        
//     }
// });
