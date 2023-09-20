const legadaAIps = document.querySelector(".legadaAIps");
const observacion = document.querySelector("[name=observacion]");
const motivoCancelacion = document.querySelector("[name=motivoCancelacion]");

const otroTraslado = document.querySelector(".otroTraslado");
const otroObservacion = document.querySelector("[name=otroObservacion]");

const saleDeIps = document.querySelector(".saleDeIps");
const medicoAcompana = document.querySelector("[name=medicoAcompana]");

const confirMamedicoAcompana = document.querySelector(".confirMamedicoAcompana");
const observacionMedico = document.querySelector("[name=observacionMedico]");
const motivoFallido = document.querySelector("[name=motivoFallido]");

const otroTrasladoIps = document.querySelector(".otroTrasladoIps");
const observacionSaleIps = document.querySelector("[name=observacionSaleIps]");

const llegadaIpsDestino = document.querySelector(".llegadaIpsDestino");
const crearContrareferencia = document.querySelector("[name=crearContrareferencia]");

const confirmaCrearContra = document.querySelector(".confirmaCrearContra");
const motivoContrareferencia = document.querySelector("[name=motivoContrareferencia]");
const causaNoLlegada = document.querySelector("[name=causaNoLlegada]");

const otroTrasladoIpsDestin = document.querySelector(".otroTrasladoIpsDestin");
const observTrasladoIpsDestino = document.querySelector("[name=observTrasladoIpsDestino]");

const causaNoLlegadaIpsDestino = document.querySelector(".causaNoLlegadaIpsDestino");
const describaOtraCausaNoLlegada = document.querySelector("[name=describaOtraCausaNoLlegada]");


/********************************************************************************************************************************
 *DESPACHADO LEGADA A LA IPS
 ********************************************************************************************************************************/
legadaAIps.addEventListener("change", () => {
  if (legadaAIps.value === "Si") {

    observacion.style.display = 'initial';
    motivoCancelacion.style.display = 'none';

  }else if (legadaAIps.value === "No") {

     motivoCancelacion.style.display = 'initial';
     observacion.style.display = 'none';

  } else {
    observacion.style.display = 'none';
    motivoCancelacion.style.display = 'none';

  }
});

/********************************************************************************************************************************
 *DESPACHADO CREAR OTRO TRASLADO
 ********************************************************************************************************************************/
otroTraslado.addEventListener("change", () => {
     if (otroTraslado.value === "Si") {
          otroObservacion.style.display = "initial";
     } else {
          otroObservacion.style.display = "none";
     }
});

/********************************************************************************************************************************
 *LLEGADA A LA IPS ORIGEN
 ********************************************************************************************************************************/
saleDeIps.addEventListener("change", () => {
     if (saleDeIps.value === "Si") {

          medicoAcompana.style.display = "initial";
          motivoFallido.style.display = 'none';

     }else if (saleDeIps.value === "No") {

          motivoFallido.style.display = 'initial';
          medicoAcompana.style.display = 'none';

     }else {
          medicoAcompana.style.display = "none";
          motivoFallido.style.display = 'none';
     }
});

/********************************************************************************************************************************
 *LLEGADA A LA IPS ORIGEN MEDICO ACOMPAÑA
 ********************************************************************************************************************************/
 confirMamedicoAcompana.addEventListener("change", () => {
     if (confirMamedicoAcompana.value === "Si") {
          observacionMedico.style.display = "initial";
     } else {
          observacionMedico.style.display = "none";
     }
});

/********************************************************************************************************************************
 *LLEGADA A LA IPS ORIGEN CREAR OTRO TRASLADO
 ********************************************************************************************************************************/
otroTrasladoIps.addEventListener("change", () => {
     if (otroTrasladoIps.value === "Si") {
          observacionSaleIps.style.display = "initial";
     } else {
          observacionSaleIps.style.display = "none";
     }
});


/********************************************************************************************************************************
 *LLEGADA A LA IPS DESTINO
 ********************************************************************************************************************************/
 llegadaIpsDestino.addEventListener("change", () => {
     if (llegadaIpsDestino.value === "Si") {
          crearContrareferencia.style.display = "initial";
          causaNoLlegada.style.display = 'none';
     } else {
          crearContrareferencia.style.display = "none";
          causaNoLlegada.style.display = 'initial';
     }
});

/********************************************************************************************************************************
 *LLEGADA A LA IPS DESTINO
 ********************************************************************************************************************************/
 confirmaCrearContra.addEventListener("change", () => {
     if (confirmaCrearContra.value === "Si") {

          motivoContrareferencia.style.display = "initial";

     }else {
          motivoContrareferencia.style.display = "none";
     }
});

/********************************************************************************************************************************
 *LLEGADA A LA IPS DESTINO CREAR OTRO TRASLADO
 ********************************************************************************************************************************/
 otroTrasladoIpsDestin.addEventListener("change", () => {
     if (otroTrasladoIpsDestin.value === "Si") {
          observTrasladoIpsDestino.style.display = "initial";
     } else {
          observTrasladoIpsDestino.style.display = "none";
     }
});

/********************************************************************************************************************************
 *LLEGADA A LA IPS DESTINO CREAR OTRO MOTIVO
 ********************************************************************************************************************************/
 causaNoLlegadaIpsDestino.addEventListener("change", () => {
     if (causaNoLlegadaIpsDestino.value === "Otro") {
          describaOtraCausaNoLlegada.style.display = "initial";
     } else {
          describaOtraCausaNoLlegada.style.display = "none";
     }
});

