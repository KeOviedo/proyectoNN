document.getElementById("selectDiagnostico").onchange = function () {
     alerta1();
};

function alerta1() {
     // Creando el objeto para hacer el request
     var request = new XMLHttpRequest();

     // Objeto PHP que consultaremos
     request.open("POST", "modelo_atencion.php");

     // Definiendo el listener
     request.onreadystatechange = function () {
          // Revision si fue completada la peticion y si fue exitosa
          if (this.readyState === 4 && this.status === 200) {
               // Ingresando la respuesta obtenida del PHP

               miArray = this.responseText;

               document.getElementById("modeloAtencion").value = miArray;

          }
     };

     // Recogiendo la data del HTML
     var miForm = document.getElementById("miFormulario");
     var formData = new FormData(miForm);

     // Enviando la data al PHP
     request.send(formData);
}
