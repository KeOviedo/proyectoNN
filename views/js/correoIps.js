$("#MiformsNotificacion").on("change", "#listadoIpsPrestadores", function() {
	var textoBusqueda = $(this).val();

    //console.log("textoBusqueda", textoBusqueda);

    if (textoBusqueda != "") {
        $.post("verificar_correo.php", {
            valorBusqueda: textoBusqueda
        }, function(respuesta) {

            //console.log(respuesta);
            $("#correoIps").val(respuesta);

        });
    }else {
        $("#correoIps").val('');
    }

});

