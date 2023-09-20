<!DOCTYPE html>
<html lang="en">

<head>
<?php
    include("head/head_views.php");
    ?>
    <title>SICO || Login </title>
</head>

<body background="./resource/img/fondo.jpeg" style="pading-top:2%; background-size: 100%" class="hold-transition login-page">
<span style="margin-top:15%;"> <p class="login-box-msg" style="color:#ffffff; font-size:30px;">Inicia sesión en tu cuenta</p></span>
    <div class="login-box" style="margin-top:20%;">
        <!-- /.login-logo -->
        <!-- <img class="text-center"  src="./resource/img/Logo-SICO-2.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8"> -->
                        

                <form action="views/validar_login.php" method="post">
                    <div class="input-group mb-3">
                        <input id="usuarioLogin" name="usuarioLogin" type="text" class="form-control" placeholder="Usuario">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <i style="color:#152E66; border-color: #152E66;"><span class="fas fa-user"></span></i>
                            </div>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <input id="contraseñaLogin" name="contraseñaLogin" type="password" class="form-control" placeholder="Contraseña">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <i style="color:#152E66; border-color: #152E66;"><span class="fas fa-lock"></span></i>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <!-- /.col -->
                        <div style="margin-left: 30%;" class="col-5">
                            <button style="background-color: #1588D9; border-color: #1588D9;" type="submit" class="btn btn-dark btn-block">Ingresar</button>
                        </div>
                        <!-- /.col -->
                    </div>
                </form>

                <p style="padding-top: 10px; text-align: center;" class="mb-1">
                    <a  href="forgot-password.html" style="color:#ffffff;">¿Olvidaste tu contraseña?</a>
                </p>
               
                <div>
                    <footer>
                        <h6 style="text-align: center; padding-top: 20px; font-size: .7em;color:#ffffff;"><strong>Copyright &copy; 2022 <a href="">SICO</a>.</strong>
                        Todos los derechos reservados.</h6>
                        <div>
                        <h6 style="text-align: center; font-size: .7em"><b>Versión</b> 1.0</h6>
                        </div>
                    </footer>
                </div>
           
        <!-- /.card -->
    </div>
    <!-- /.login-box -->

</body>


</html>