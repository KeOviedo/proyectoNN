function preguntar(event) {
     event.preventDefault();
     const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
               confirmButton: 'btn btn-success',
               cancelButton: 'btn btn-danger'
          },
          buttonsStyling: false
     })

     swalWithBootstrapButtons.fire({
          title: '¿Está seguro?',
          text: "No podrás revertir esto.!",
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Si, guardar!',
          cancelButtonText: 'No, cancelar!',
          reverseButtons: false
     }).then((result) => {
          if (result.isConfirmed) {
               var form = $('#miFormulario');
               form.submit();

               // swalWithBootstrapButtons.fire(
               //      'Guardado!',
               //      'El caso ha sido guardado',
               //      'success'
               // )

               Swal.fire({
                    //position: 'top-end',
                    icon: 'success',
                    title: 'Guardado!',
                    showConfirmButton: false,
                    timer: 3000
               })

               Herders(10);
               //window.location.href = "/views/revisar_caso.php";
               window.location.href= "https://referencia-sico.com/01.SICO/views/revisar_caso.php";

          } else if (
               /* Read more about handling dismissals below */
               result.dismiss === Swal.DismissReason.cancel
          ) {
               swalWithBootstrapButtons.fire(
                    'Cancelado',
                    'Se cancelo el envio del formulario',
                    'error'
               )
          }
     })

}
