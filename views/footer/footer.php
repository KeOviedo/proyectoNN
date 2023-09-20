<!-- jQuery -->
<script src="resource/AdminLTE-3.2.0/plugins/jquery/jquery.min.js"></script>
  <!-- jQuery UI 1.11.4 -->
  <script src="resource/AdminLTE-3.2.0/plugins/jquery-ui/jquery-ui.min.js"></script>
  <!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
  <script>
    $.widget.bridge('uibutton', $.ui.button)
  </script>
  <!-- Bootstrap 4 -->
  <script src="resource/AdminLTE-3.2.0/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
  <!-- ChartJS -->
  <script src="resource/AdminLTE-3.2.0/plugins/chart.js/Chart.min.js"></script>
  <!-- Sparkline -->
  <script src="resource/AdminLTE-3.2.0/plugins/sparklines/sparkline.js"></script>
  <!-- JQVMap -->
  <script src="resource/AdminLTE-3.2.0/plugins/jqvmap/jquery.vmap.min.js"></script>
  <script src="resource/AdminLTE-3.2.0/plugins/jqvmap/maps/jquery.vmap.usa.js"></script>
  <!-- jQuery Knob Chart -->
  <script src="resource/AdminLTE-3.2.0/plugins/jquery-knob/jquery.knob.min.js"></script>
  <!-- daterangepicker -->
  <script src="resource/AdminLTE-3.2.0/plugins/moment/moment.min.js"></script>
  <script src="resource/AdminLTE-3.2.0/plugins/daterangepicker/daterangepicker.js"></script>
  <!-- Tempusdominus Bootstrap 4 -->
  <script src="resource/AdminLTE-3.2.0/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js"></script>
  <!-- Summernote -->
  <script src="resource/AdminLTE-3.2.0/plugins/summernote/summernote-bs4.min.js"></script>
  <!-- overlayScrollbars -->
  <script src="resource/AdminLTE-3.2.0/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"></script>
  <!-- AdminLTE App -->
  <script src="resource/AdminLTE-3.2.0/dist/js/adminlte.js"></script>
  <!-- AdminLTE for demo purposes -->
  <script src="resource/AdminLTE-3.2.0/dist/js/demo.js"></script>
  <!-- AdminLTE dashboard demo (This is only for demo purposes) -->
  <script src="resource/AdminLTE-3.2.0/dist/js/pages/dashboard.js"></script>
  <script src="../resource/AdminLTE-3.2.0/dist/js/bootstrap.js"></script>
  <script src="../resource/AdminLTE-3.2.0/dist/js/summernote.js"></script>

<!-- dataTable -->
<script src="../resource/AdminLTE-3.2.0/plugins/datatables/jquery.dataTables.min.js"></script>
<script src="../resource/AdminLTE-3.2.0/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
<script src="../resource/AdminLTE-3.2.0/plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
<script src="../resource/AdminLTE-3.2.0/plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
<script src="../resource/AdminLTE-3.2.0/plugins/datatables-buttons/js/dataTables.buttons.min.js"></script>
<script src="../resource/AdminLTE-3.2.0/plugins/datatables-buttons/js/buttons.bootstrap4.min.js"></script>
<script src="../resource/AdminLTE-3.2.0/plugins/jszip/jszip.min.js"></script>
<script src="../resource/AdminLTE-3.2.0/plugins/pdfmake/pdfmake.min.js"></script>
<script src="../resource/AdminLTE-3.2.0/plugins/pdfmake/vfs_fonts.js"></script>
<script src="../resource/AdminLTE-3.2.0/plugins/datatables-buttons/js/buttons.html5.min.js"></script>
<script src="../resource/AdminLTE-3.2.0/plugins/datatables-buttons/js/buttons.print.min.js"></script>
<script src="../resource/AdminLTE-3.2.0/plugins/datatables-buttons/js/buttons.colVis.min.js"></script>
<script src="../resource/AdminLTE-3.2.0/dist/js/adminlte.min.js?v=3.2.0"></script>

<!-- select2 -->
<script src="../resource/AdminLTE-3.2.0/plugins/select2/js/select2.full.js"></script>
<!-- <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script> -->


  <script>
  $(function () {
    // Summernote
    $('#motivoConsulta').summernote()
    $('#enfermedadActual').summernote()
    // CodeMirror
    CodeMirror.fromTextArea(document.getElementById("codeMirrorDemo"), {
      mode: "htmlmixed",
      theme: "monokai"
    });
  })
</script>