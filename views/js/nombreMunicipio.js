/********************************************************* 
 * MOSTRAR EL NOMBRE DEL MUNICIPIO
**********************************************************/
$("#miFormulario").on("change", "#municipioPaciente", function() {
    var textoBusqueda = $(this).val();

    console.log("textoBusqueda", textoBusqueda);

    if (textoBusqueda != "") {
        $.post("verificar_nombre_municipio.php", {
            valorBusqueda: textoBusqueda
        }, function(respuesta) {

            //console.log(respuesta);
            $("#nombreMunicipioPaciente").val(respuesta);

        });
    }else {
        $("#nombreMunicipioPaciente").val('');
    }

});

