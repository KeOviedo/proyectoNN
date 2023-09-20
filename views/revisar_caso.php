<?php session_start();
// if ($_SESSION['usuario'] == null) {
//     header("location:../index.php");
// }

?>


<!DOCTYPE html>
<html lang="en">
<?php
//include("../controller/caso_controller.php");
//include("../controller/caso_contra_controller.php");
include("../model/caso_model2.php");


?>

<head>
    <?php
    include("head/head_views.php");
    ?>
    <title>SICO || Revisar Caso </title>
    <!-- Google Font: Source Sans Pro -->
    <!-- <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script> -->
    <script src="../resource/AdminLTE-3.2.0/plugins/jquery/jquery-3.2.1.min.js"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&amp;display=fallback">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="../resource/AdminLTE-3.2.0/plugins/fontawesome-free/css/all.min.css">
    <!-- DataTables -->
    <link rel="stylesheet" href="../resource/AdminLTE-3.2.0/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css">
    <link rel="stylesheet" href="../resource/AdminLTE-3.2.0/plugins/datatables-responsive/css/responsive.bootstrap4.min.css">
    <link rel="stylesheet" href="../resource/AdminLTE-3.2.0/plugins/datatables-buttons/css/buttons.bootstrap4.min.css">

    <!-- DataTables -->
    <link rel="stylesheet" href="../resource/AdminLTE-3.2.0/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css">
    <link rel="stylesheet" href="../resource/AdminLTE-3.2.0/plugins/datatables-responsive/css/responsive.bootstrap4.min.css">
    <link rel="stylesheet" href="../resource/AdminLTE-3.2.0/plugins/datatables-buttons/css/buttons.bootstrap4.min.css">

    <link rel="stylesheet" href="../resource/css/btnModeDark.css">

</head>

<body class="hold-transition sidebar-collapse sidebar-mini layout-fixed">
    <?php
    $_SESSION['maxCaso'] = 1;
    ?>
    <!-- <div class="wrapper"> -->
    <!-- Preloader -->
    <!-- <div class="preloader flex-column justify-content-center align-items-center">
      <img class="animation__shake" src="resource/AdminLTE-3.2.0/dist/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60">
    </div> -->
    <!-- Navbar -->
    <?php include('menu/menu_horizontal.php') ?>
    <!-- /.navbar -->
    <!-- Main Sidebar Container -->
    <?php
    include("menu/menu_views.php");
    ?>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <!--Preloader-->
        <div class="preloader flex-column justify-content-center align-items-center">
            <img class="animation__shake" src="img/1.gif" alt="eseCentro" height="250" width="250">
        </div>
        <div class="row " style="padding-top:2%;">
            <div class="col-md-12">




            </div>
        </div>
    </div>

    </div>
    <!-- /.content-wrapper -->

    <!-- Control Sidebar -->
    <aside class="control-sidebar control-sidebar-dark">
        <!-- Control sidebar content goes here -->
    </aside>
    <!-- /.control-sidebar -->
    </div>


    <?php
    include("footer/footer_views.php");
    ?>
    <script src="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/alertify.min.js"></script>
    <script src="js/btnModeDark.js"></script>
    <!-- jQuery -->
    <!-- <script src="../resource/AdminLTE-3.2.0/plugins/jquery/jquery.min.js"></script> -->
    <!-- <script src="../resource/AdminLTE-3.2.0/plugins/jquery/jquery-3.2.1.min.js"></script> -->
    <!-- Bootstrap 4 -->
    <script src="../resource/AdminLTE-3.2.0/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
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
    <!-- Page specific script -->



    



</body>

</html>