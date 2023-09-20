/********************************************************* 
 * codigo de municipios
**********************************************************/
$("#miFormulario").on("change", "#municipioPaciente", function() {
	var textoBusqueda = $(this).val();

    console.log("textoBusqueda", textoBusqueda);

    if (textoBusqueda != "") {
        $.post("verificar_codigo_municipio.php", {
            valorBusqueda: textoBusqueda
        }, function(respuesta) {

            //console.log(respuesta);
            $("#codigoMunicipioPaciente").val(respuesta);

        });
    }else {
        $("#codigoMunicipioPaciente").val('');
    }

});

