/*********************************************************
 * nivel de ips
**********************************************************/
$("#miFormulario").on("change", "#nombreIpsPaciente", function() {
     var textoBusqueda = $(this).val();

     //console.log("textoBusqueda", textoBusqueda);

     if (textoBusqueda != "") {
          $.post("verificar_nivel_ips.php", {
               valorBusqueda: textoBusqueda
          }, function(respuesta) {

               //console.log(respuesta);
               $("#clasificacionSede").val(respuesta);

          });
     }else {
          $("#clasificacionSede").val('');

     }

});
