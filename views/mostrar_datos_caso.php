<?php session_start();
// if ($_SESSION['usuario'] == null) {
//     header("location:../index.php");
// }




?>
<!DOCTYPE html>
<html lang="en">
<?php
include("../controller/caso_controller.php");
?>

<head>
    <?php
    include("head/head_views.php");
    ?>
    <title>SICO || Mostrar datos caso</title>

    <script src="../resource/AdminLTE-3.2.0/plugins/jquery/jquery-3.2.1.min.js"></script>
    <script src="../resource/AdminLTE-3.2.0/plugins/moment/moment.min.js"></script>
    <link rel="stylesheet" href="../resource/css/fullcalendar.min.css">
    <script src="../resource/js/fullcalendar.min.js"></script>
    <script src="../resource/js	/bootstrap-clockpicker.js"></script>
    <link rel="stylesheet" href="../resource/css/bootstrap-clockpicker.css">


    <script src="../resource/AdminLTE-3.2.0/plugins/bootstrap/js/bootstrap.min.js"></script>

    <!-- DataTables -->
    <link rel="stylesheet" href="../resource/AdminLTE-3.2.0/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css">
    <link rel="stylesheet" href="../resource/AdminLTE-3.2.0/plugins/datatables-responsive/css/responsive.bootstrap4.min.css">
    <link rel="stylesheet" href="../resource/AdminLTE-3.2.0/plugins/datatables-buttons/css/buttons.bootstrap4.min.css">


    <link rel="stylesheet" href="../resource/AdminLTE-3.2.0/plugins/tail-select/css/default/tail.select-light.css">

    <link rel="stylesheet" href="../resource/AdminLTE-3.2.0/plugins/select2/css/select2.min.css">

    <link rel="stylesheet" type="text/css" href="../resource/AdminLTE-3.2.0/dist/css/botones.css">

</head>

<body class="hold-transition sidebar-collapse sidebar-mini layout-fixed">
    <nav class="main-header navbar navbar-expand navbar-dark navbar-light">
        <!-- Left navbar links -->
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
            </li>
        </ul>
    </nav>
    <?php
    include("menu/menu_views.php");
    ?>


    

    <script src="../resource/AdminLTE-3.2.0/plugins/select2/js/select2.min.js"></script>
    <script src="../resource/js/selectMovil.js"></script>

    <script src="../resource/AdminLTE-3.2.0/plugins/tail-select/js/tail.select-full.js"></script>
    <script src="../resource/js/selectEps.js"></script>
    <script src="../resource/js/selectDiagnostico.js"></script>

    <!-- DataTables  & Plugins -->
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



    <!-- AdminLTE App -->
    <script src="../resource/AdminLTE-3.2.0/dist/js/adminlte.min.js"></script>
    <!-- AdminLTE for demo purposes -->
    <script src="../resource/AdminLTE-3.2.0/dist/js/demo.js"></script>

</body>

</html>