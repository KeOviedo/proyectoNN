$(document).ready(function () {
$("#miFormPanelNotificacion").submit(function (event) {
event.preventDefault();
    // console.log('aqui pasa');

$.ajax({
  type: "POST",
  url: $(this).attr("action"),
  data: $(this).serialize(),
  success: function (data) {
    $("#tablaNotificaciones").load(" #tablaNotificaciones");
  },
  error: function (data) {
    //Cuando la interacción retorne un error, se ejecutará esto.
    console.log(data);
  },
});
});
});
