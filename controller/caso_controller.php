<?php

include("../model/caso_model.php");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../resource/PHPMailer/Exception.php';
require '../resource/PHPMailer/PHPMailer.php';
require '../resource/PHPMailer/SMTP.php';

class CasoController
{

    // static public function ctrAgregarPanelNotificacion()
    // {

    //     if (isset($_POST["idCasoPanelTraslado"])) {

    //         $idCaso =  $_POST["idCasoPanelTraslado"];
    //         $estadoAceptacion = $_POST["estadoAceptacion"];
    //         $codigoAceptacion = $_POST["codigoAceptacion"];
    //         $fechaAceptacion = $_POST["fechaAceptacion"];
    //         $idUsuario = $_POST['idUsuario'];
    //         $idCasoPanelNotificacion = $_POST["idCasoPanelNotificacion"];

    //         //$crearseguimiento = CasoModel::mdlCrearAceptacion($estadoAceptacion, $codigoAceptacion, $fechaAceptacion, $idCaso, $idUsuario, $idCasoPanelNotificacion);
    //     }
    // }
}
