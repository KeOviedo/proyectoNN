/***********************************************************************************************************
 * TAB CASO SEM: NUM. DE INCIDENTE aparece cuando medio de notificacion es linea 123
 ***********************************************************************************************************/

     const medioNotificacionSem = document.querySelector(".medioNotificacionSem");
     const numIncidenteSem = document.querySelector(".numIncidenteSem");
     const clasificacionSecad = document.querySelector(".clasificacionSecad");
     const codigoPire1Sem = document.querySelector("#codigoPire1Sem");
     
     const tipoEventoSem = document.querySelector(".tipoEventoSem");

     medioNotificacionSem.addEventListener("change", () => {
     if (medioNotificacionSem.value === "Linea 123") {
     numIncidenteSem.style.display = 'initial';
     clasificacionSecad.style.display = 'initial';

          codigoPire1Sem.addEventListener("change", () => {
               if(codigoPire1Sem.value === "I106.B" || codigoPire1Sem.value === "I73.C" || codigoPire1Sem.value === "I106.A"){
                    console.log(codigoPire1Sem.value);
                    tipoEventoSem.value = 'Accidente de Transito';
               }else if(codigoPire1Sem.value === "BB11.0" || codigoPire1Sem.value === "I31.0" || codigoPire1Sem.value === "I81.0" 
               || codigoPire1Sem.value === "I87.0" || codigoPire1Sem.value === "SL10.0" || codigoPire1Sem.value === "SL9.0"){
                    tipoEventoSem.value = 'Atencion Domiciliaria';
               }else if(codigoPire1Sem.value === 'I73.BK' || codigoPire1Sem.value === 'I86.A' || codigoPire1Sem.value === 'I89.0'){
                    tipoEventoSem.value = 'Atencion En Via Publica';
               }else{
                    tipoEventoSem.value="";
               }
          });
          

     } else {
     numIncidenteSem.style.display = 'none';
     clasificacionSecad.style.display = 'none';
     tipoEventoSem.value="";

     }
     });

     


/***********************************************************************************************************
 * TAB CASO SEM: NUM. DE AMBULANCIA aparece cuando medio de notificacion es Avantel
 ***********************************************************************************************************/

     const medioNotificacionSem1 = document.querySelector(".medioNotificacionSem");
     const numAmbulanciasSem = document.querySelector(".numAmbulanciasSem");


     medioNotificacionSem1.addEventListener("change", () => {
     if (medioNotificacionSem1.value === "Avantel") {
     numAmbulanciasSem.style.display = 'initial';
     }
     else {
     numAmbulanciasSem.style.display = 'none';
     }
     });

     /***********************************************************************************************************
 * TAB CASO SEM: TIPO EVENTO Si en el campo <Tipo de Evento> en la creacion del Caso el valor es "Accidente de Transito", la Confirmación_Caso debe quedar deshabilitado.
 ***********************************************************************************************************/


     const confirmacionTipoEvento = document.querySelector(".confirmacionTipoEvento");



     tipoEventoSem.addEventListener("change", () => {
     if (tipoEventoSem.value === "Accidente de Transito") {
     confirmacionTipoEvento.style.display = 'none';
     }
     else {
     confirmacionTipoEvento.style.display = 'initial';
     }
     });

/***********************************************************************************************************
 * TAB TELEASISTENCIA: Este aparece cuando el valor del campo <Soporte Telefonico> es "No"
 ***********************************************************************************************************/

     const soporteTelefonicoSem = document.querySelector(".soporteTelefonicoSem");
     const causaNoSoporteTel = document.querySelector(".causaNoSoporteTel");


     soporteTelefonicoSem.addEventListener("change", () => {
     if (soporteTelefonicoSem.value === "No") {
          causaNoSoporteTel.style.display = "initial";
     } else {
          causaNoSoporteTel.style.display = "none";
     }
     });


//  $("#teleAsistenciaSem").on("change", "#motivoConsultaSem", function() {
// 	var textoBusqueda = $(this).val();

//     console.log("textoBusqueda", textoBusqueda);

//     if (textoBusqueda != "") {
//         $.post("verificar_motivo_consulta_sem.php", {
//             valorBusqueda: textoBusqueda
//         }, function(respuesta) {

//             //console.log(respuesta);
//             $("#descripcionMotivoConsultaSem").val(respuesta);

//         });
//     }else {
//         $("#descripcionMotivoConsultaSem").val('');
//     }

// });

/***********************************************************************************************************
 * TAB TELEASISTENCIA: Campo dependiente del valor del campo <Clasificación Triage> (Triage 1 requiere ambulancia ; Triage 2, 3 y 4 no  requiere ambulancia)
 ***********************************************************************************************************/

     const clasificacionTriageSem = document.querySelector(".clasificacionTriageSem");
     const requiereAmbulancia = document.querySelector(".requiereAmbulancia");

     clasificacionTriageSem.addEventListener("change", () => {
     if (clasificacionTriageSem.value === "1") {
          requiereAmbulancia.style.display = "initial";
     } else {
          requiereAmbulancia.style.display = "none";
     }
     });

/***********************************************************************************************************
 * TAB TELEASISTENCIA: Este aparece cuando el valor del campo <Requiere Ambulancia> es "No"
 ***********************************************************************************************************/

     const requiereAmbulanciaSem = document.querySelector(".requiereAmbulanciaSem");
     const porqueNoReqAmbulancia = document.querySelector(".porqueNoReqAmbulancia");
     const recomendacion = document.querySelector(".recomendacion");
     const noRequiereTraslado = document.querySelector(".noRequiereTraslado");


     requiereAmbulanciaSem.addEventListener("change", () => {
     if (requiereAmbulanciaSem.value === "No") {
          porqueNoReqAmbulancia.style.display = "initial";
          recomendacion.style.display = "initial";
          noRequiereTraslado.style.display = "none";


     } else {
          porqueNoReqAmbulancia.style.display = "none";
          recomendacion.style.display = "none";
          noRequiereTraslado.style.display = "initial";


     }
     });

/***********************************************************************************************************
 * TAB TRASLADOS SEM
 ***********************************************************************************************************/

     const movilAsignadoPorSem = document.querySelector(".movilAsignadoPorSem");
     const movilAsignada = document.querySelector(".movilAsignada");
     const empresaMovilAsignado = document.querySelector(".empresaMovilAsignado");

     movilAsignadoPorSem.addEventListener("change", () => {
     if (movilAsignadoPorSem.value === "Si") {
          movilAsignada.style.display = "initial";
          empresaMovilAsignado.style.display = "initial";

     } else {
          movilAsignada.style.display = "none";
          empresaMovilAsignado.style.display = "none";

     }
     });

     /***********************************************************************************************************
 * TAB TRASLADOS SEM. Este aparece si el valor del campo <Causas> es "Cancelada por SEM"
 ***********************************************************************************************************/

     const  llegadaAlEventoSem= document.querySelector(".llegadaAlEventoSem");
     const  causaLleagaEvento= document.querySelector(".causaLleagaEvento");

     const causasSem = document.querySelector(".causasSem");
     const causaCancelacionPor = document.querySelector(".causaCancelacionPor");
     const generarNuevoTraslado = document.querySelector(".generarNuevoTraslado");

     const confirmacionDeTraslado = document.querySelector(".confirmarTranslado");


     llegadaAlEventoSem.addEventListener("change", () => {
          if(llegadaAlEventoSem.value === "No"){
               causaLleagaEvento.style.display = "initial";

               causasSem.addEventListener("change", () => {
                    if (causasSem.value === "Cancelada por SEM") {
                         causaCancelacionPor.style.display = "initial";
                         generarNuevoTraslado.style.display = "initial";
               
                    } else {
                         causaCancelacionPor.style.display = "none";
                         generarNuevoTraslado.style.display = "none";
                    }
                    });

          }else if (llegadaAlEventoSem.value === "Si"){
               causaLleagaEvento.style.display = "none";
               causaCancelacionPor.style.display = "none";
               generarNuevoTraslado.style.display = "none";
               confirmacionDeTraslado.style.display = "initial";
          }
     });

     
     /***********************************************************************************************************
 * TAB TRASLADOS SEM. Este aparece si el valor del campo <Confirmación de Traslado> es "No"
 ***********************************************************************************************************/

     const confirmacionDeTrasladoSem = document.querySelector(".confirmacionDeTrasladoSem");
     const causasConfirmacionTraslado = document.querySelector(".causasConfirmacionTraslado");
     const ipsAsignadaPor = document.querySelector(".ipsAsignadaPor");
     const cantidadDePaciente = document.querySelector(".cantidadDePaciente");



     confirmacionDeTrasladoSem.addEventListener("change", () => {
     if (confirmacionDeTrasladoSem.value === "No") {
          causasConfirmacionTraslado.style.display = "initial";
          ipsAsignadaPor.style.display = "none";
          cantidadDePaciente.style.display = "none";
          generarNuevoTraslado2.style.display = 'none';

     }
     else if (confirmacionDeTrasladoSem.value === "Si") {
          ipsAsignadaPor.style.display = "initial";
          cantidadDePaciente.style.display = "initial";
          causasConfirmacionTraslado.style.display = "none";
          mostrarSignosSem.style.display = 'none';


     } 
     else {
          causasConfirmacionTraslado.style.display = "none";
          ipsAsignadaPor.style.display = "none";
          cantidadDePaciente.style.display = "none";

     }
     });

/***********************************************************************************************************
 * TAB TRASLADOS SEM. El valor del campo <Confirmación Tipo de Evento> es <> a "Accidente de Transito" y
 * El valor del campo <Causas> es "No Amerita Traslado"
 ***********************************************************************************************************/
     const confirmacionTipoEventoSem = document.querySelector(".confirmacionTipoEventoSem");
     const causasConfirmacionTrasladoSem = document.querySelector(".causasConfirmacionTrasladoSem");
     const mostrarSignosSem = document.querySelector(".mostrarSignosSem");


     causasConfirmacionTrasladoSem.addEventListener("change", () => {
     if (causasConfirmacionTrasladoSem.value === "No Amerita Traslado" && confirmacionTipoEventoSem.value === "Accidente de Transito") {
     mostrarSignosSem.style.display = 'initial';

     }
     else {
     mostrarSignosSem.style.display = 'none';

     }
     });

/***********************************************************************************************************
 * TAB TRASLADOS SEM. Este aparece si el valor del campo <Cantidad de Pacientes> es <> a "1"
 ***********************************************************************************************************/
 const cantidadDePacienteSem = document.querySelector(".cantidadDePacienteSem");
 const generarNuevoTraslado2 = document.querySelector(".generarNuevoTraslado2");


 cantidadDePacienteSem.addEventListener("change", () => {
 if (cantidadDePacienteSem.value === "1") {
 generarNuevoTraslado2.style.display = 'initial';

 }
 else {
 generarNuevoTraslado2.style.display = 'none';

 }
 });

 /***********************************************************************************************************
 * TAB TRASLADOS SEM. Este aparece si el valor del campo <Se Notifica a IPS> es "No"
 ***********************************************************************************************************/
     const seNotificaIPSSem = document.querySelector(".seNotificaIPSSem");
     const causaNotificaIPS = document.querySelector(".causaNotificaIPS");

     seNotificaIPSSem.addEventListener("change", () => {
     if (seNotificaIPSSem.value === "No") {
     causaNotificaIPS.style.display = 'initial';

     }
     else {
     causaNotificaIPS.style.display = 'none';

     }
     });

/***********************************************************************************************************
 * TAB TRASLADOS SEM. Este aparece si el valor del campo <Movil Brinda Información> es "Si"
 ***********************************************************************************************************/

     const movilBrindaInfoSem = document.querySelector(".movilBrindaInfoSem");
     const tipoDocumento = document.querySelector(".tipoDocumento");
     const numIdentificacion = document.querySelector(".numIdentificacion");
     const mostrarNombre = document.querySelector(".mostrarNombre");
     const mostrarApellido = document.querySelector(".mostrarApellido");
     const mostrarPaciente = document.querySelector(".mostrarPaciente");
     const mostrarEdad = document.querySelector(".mostrarEdad");
     const mostrarTipoEdad = document.querySelector(".mostrarTipoEdad");
     const mostrarAseguradoraEps = document.querySelector(".mostrarAseguradoraEps");

     const noDatosPaciente = document.querySelector(".noDatosPaciente");
     // const metodoCrearPaciente = document.querySelector(".metodoCrearPaciente");

     movilBrindaInfoSem.addEventListener("change", () => {
     if (movilBrindaInfoSem.value === "Si") {
     tipoDocumento.style.display = 'initial';
     numIdentificacion.style.display = 'initial';
     mostrarNombre.style.display = 'initial';
     mostrarApellido.style.display = 'initial';
     mostrarPaciente.style.display = 'initial';
     mostrarEdad.style.display = 'initial';
     mostrarTipoEdad.style.display = 'initial';
     mostrarAseguradoraEps.style.display = 'initial';
     noDatosPaciente.style.display = "none";
     //metodoCrearPaciente.style.display = "initial";

     }
     else {
     tipoDocumento.style.display = 'none';
     numIdentificacion.style.display = 'none';
     mostrarNombre.style.display = 'none';
     mostrarApellido.style.display = 'none';
     mostrarPaciente.style.display = 'none';
     mostrarEdad.style.display = 'none';
     mostrarTipoEdad.style.display = 'none';
     mostrarAseguradoraEps.style.display = 'none';
     noDatosPaciente.style.display = "initial";
     //style.display.style.display = "none";

     }
     });

/***********************************************************************************************************
 * TAB TRASLADOS SEM. Este aparece si en teleasistencia el valor del campo <Confirmación Tipo de Evento> es "Accidente de Transito"
 ***********************************************************************************************************/

     const confirmacionTipoEventoSem2 = document.querySelector(".confirmacionTipoEventoSem");
     const aseguradoraSoatPaciente = document.querySelector(".aseguradoraSoatPaciente");
     const tipoRegimenPaciente = document.querySelector(".tipoRegimenPaciente");
     const aseguradoraSoat1 = document.querySelector(".aseguradoraSoat1");
     const tipoRegimen1 = document.querySelector(".tipoRegimen1");

     confirmacionTipoEventoSem2.addEventListener("change", () => {
     if (confirmacionTipoEventoSem2.value === "Accidente de Transito") {
     aseguradoraSoatPaciente.style.display = 'initial';
     tipoRegimenPaciente.style.display = 'initial';
     aseguradoraSoat1.style.display = 'initial';
     tipoRegimen1.style.display = 'initial';

     }
     else {
     aseguradoraSoatPaciente.style.display = 'none';
     tipoRegimenPaciente.style.display = 'none';
     aseguradoraSoat1.style.display = 'none';
     tipoRegimen1.style.display = 'none';


     }
     });

     /***********************************************************************************************************
 * TAB TRASLADOS SEM. Este aparece si el valor del campo <Brinda Información del Paciente> es "Si"
 ***********************************************************************************************************/

     const brindaInformacionPacienteSem = document.querySelector(".brindaInformacionPacienteSem");
     const tipoDocumentoPaciente = document.querySelector(".tipoDocumentoPaciente");
     const numIdentificacionPaciente = document.querySelector(".numIdentificacionPaciente");
     const generoPaciente = document.querySelector(".generoPaciente");
     const nombrePaciente = document.querySelector(".nombrePaciente");
     const apellidoPaciente = document.querySelector(".apellidoPaciente");
     const edadPaciente = document.querySelector(".edadPaciente");
     const tipoEdadPaciente = document.querySelector(".tipoEdadPaciente");
     const aseguradoraEpsPaciente = document.querySelector(".aseguradoraEpsPaciente");

     brindaInformacionPacienteSem.addEventListener("change", () => {
     if (brindaInformacionPacienteSem.value === "Si") {
     tipoDocumentoPaciente.style.display = 'initial';
     numIdentificacionPaciente.style.display = 'initial';
     generoPaciente.style.display = 'initial';
     nombrePaciente.style.display = 'initial';
     apellidoPaciente.style.display = 'initial';
     edadPaciente.style.display = 'initial';
     tipoEdadPaciente.style.display = 'initial';
     aseguradoraEpsPaciente.style.display = 'initial';

     }
     else {
     tipoDocumentoPaciente.style.display = 'none';
     numIdentificacionPaciente.style.display = 'none';
     generoPaciente.style.display = 'none';
     nombrePaciente.style.display = 'none';
     apellidoPaciente.style.display = 'none';
     edadPaciente.style.display = 'none';
     tipoEdadPaciente.style.display = 'none';
     aseguradoraEpsPaciente.style.display = 'none';

     }
     });