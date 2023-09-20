/********************************************************* 
 * codigo de municipios
**********************************************************/
$("#miFormulario").on("change", "#municipioPaciente", function() {
var textoBusqueda = $(this).val();

console.log("textoBusqueda", textoBusqueda);

if (textoBusqueda != "") {
     $.post("verificar_codigo_municipio2.php", {
          valorBusqueda: textoBusqueda
     }, function(respuesta) {

          //console.log(respuesta);
          $("#codigoMunicipioPaciente2").val(respuesta);

     });
}else {
     $("#codigoMunicipioPaciente2").val('');
}

});
