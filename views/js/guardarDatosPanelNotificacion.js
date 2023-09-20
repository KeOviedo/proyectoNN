function pregunta(event) {
  event.preventDefault();
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  swalWithBootstrapButtons
    .fire({
      title: "¿Está seguro de aceptar la notificación?",
      text: "No podrás revertir esto.!",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Si, guardar!",
      cancelButtonText: "No, cancelar!",
      reverseButtons: false,
    })
    .then((result) => {
      if (result.isConfirmed) {
        var form = $("#miFormPanelNotificacion");
        form.submit();

        swalWithBootstrapButtons.fire(
          "Guardado!",
          "La notificación ha sido aceptado",
          "success",
          window.location = "../views/panel_notificacion.php"
        );

      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          "Cancelado",
          "Se cancelo la aceptación",
          "error"
        );
      }
    });
}
