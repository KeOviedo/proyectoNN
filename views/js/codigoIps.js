/********************************************************* 
 * codigo de ips
**********************************************************/
$("#miFormulario").on("change", "#nombreIpsPaciente", function() {
	var textoBusqueda = $(this).val();

    //console.log("textoBusqueda", textoBusqueda);

    if (textoBusqueda != "") {
        $.post("verificar_codigoIps.php", {
            valorBusqueda: textoBusqueda
        }, function(respuesta) {

            //console.log(respuesta);
            $("#codigoIpsPaciente").val(respuesta);

        });
    }else {
        $("#codigoIpsPaciente").val('');
    }

});


