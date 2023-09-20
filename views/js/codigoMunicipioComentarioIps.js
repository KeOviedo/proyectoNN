/********************************************************* 
 * codigo de municipios
**********************************************************/
$("#MiformsComentarioIps").on("change", "#municipioComentario", function() {
	var textoBusqueda = $(this).val();

    console.log("textoBusqueda", textoBusqueda);

    if (textoBusqueda != "") {
        $.post("verificar_codigo_municipio_com.php", {
            valorBusqueda: textoBusqueda
        }, function(respuesta) {

            //console.log(respuesta);
            // $("#municipioComentarioIps").val(respuesta);
            $("#CodigomunicipioComentarioIps").val(respuesta);

        });
    }else {
        // $("#municipioComentarioIps").val('');
        $("#CodigomunicipioComentarioIps").val('');
    }

});


/********************************************************* 
 * SEGUIMIENTO CASO CONTRA - codigo de municipios
**********************************************************/
$("#MiformsComentarioIpsContra").on("change", "#municipioComentarioContra", function() {
	var textoBusqueda = $(this).val();

     //console.log("textoBusqueda", textoBusqueda);

    if (textoBusqueda != "") {
        $.post("verificar_codigo_municipio_com_contra.php", {
            valorBusqueda: textoBusqueda
        }, function(respuesta) {

            //console.log(respuesta);
            $("#municipioComentarioIpsContra").val(respuesta);
            $("#CodigomunicipioComentarioIpsContra").val(respuesta);

        });
    }else {
        $("#municipioComentarioIpsContra").val('');
        $("#CodigomunicipioComentarioIpsContra").val('');
    }

});