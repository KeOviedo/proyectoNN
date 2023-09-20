/********************************************************* 
 * codigo de eps
**********************************************************/
$("#miFormulario").on("change", "#nombreEpsPaciente", function() {
	var textoBusqueda = $(this).val();

    //console.log("textoBusqueda", textoBusqueda);

    if (textoBusqueda != "") {
        $.post("verificar_codigo.php", {
            valorBusqueda: textoBusqueda
        }, function(respuesta) {

            //console.log(respuesta);
            $("#codigoEpsPaciente").val(respuesta);

        });
    }else {
        $("#codigoEpsPaciente").val('');
    }

});


