function subirArchivo(event) {
    event.preventDefault();
    Swal.fire({
        //position: 'top-end',
        icon: 'success',
        title: 'Guardado!',
        showConfirmButton: false,
        timer: 3000
    });

    Herders(10);
    //window.location.href = "/views/revisar_caso.php";
    window.location.replace= "http://31.220.109.113/01.SICO/views/mostrar_datos_caso.php";

}