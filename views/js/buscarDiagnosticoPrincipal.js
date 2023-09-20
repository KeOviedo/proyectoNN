function buscarDiagnostico() {
    //el input donde se esta escribiendo la cedula
    var textoBusqueda = $("input#buscarDiagnosticoPrincipal").val();

    // se valida si no esta vacio que envie por post 
    // el valorBusqueda es el nombre con que se envia al post $_POST['valorBusqueda'];
    // la respuesta es lo que se recibe del print_r o echo y se muestra en el input 
    if (textoBusqueda != "") {
        $.post("verificar_diagnostico_principal.php", {
            valorBusqueda: textoBusqueda
        }, function(respuesta) {

            console.log("respuesta", respuesta);

            $("#mostrarDiagnosticoPrincipal").val(respuesta);
            //$("#mostrarCodigoDiagnosticoPrincipal").HTML(respuesta);

        });
    } else {
        $("#mostrarDiagnosticoPrincipal").val('');
        //$("#mostrarCodigoDiagnosticoPrincipal").val('');
    }
}


// $("#miFormulario").on("change", "#buscarDiagnosticoPrincipal", function() {
// 	var textoBusqueda = $(this).val();

//     //console.log("textoBusqueda", textoBusqueda);

//     if (textoBusqueda != "") {
//         $.post("verificar_diagnostico_principal.php", {
//             valorBusqueda: textoBusqueda
//         }, function(respuesta) {

//             //console.log(respuesta);
//             $("#mostrarDiagnosticoPrincipal").val(respuesta);

//         });
//     }else {
//         $("#mostrarDiagnosticoPrincipal").val('');
//     }

// });


