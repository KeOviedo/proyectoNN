<?php

require('conexion.php');

class CasoModel
{


    /*=================================================================================
	MODELO ACTUALIZAR ESTADO PANEL NOTIFICACION
	=====================================================================================*/

    // static public function mdlActualizarEstadoPanelNotificacion($estado, $idCasoPanelNotificacion)
    // {
    //     try {
    //         $stmt = "UPDATE notificacion_red_prestadores_seguimiento
    //         SET estado = :estado
    //         WHERE id_notificacion_red_prestadores = :idCasoPanelNotificacion
    //         ";
    //         $stmt = Conexion::conectar()->prepare($stmt);
    //         $stmt->bindParam(':estado', $estado );
    //         $stmt->bindParam(':idCasoPanelNotificacion', $idCasoPanelNotificacion );
    //         $stmt->execute();
    //         return $stmt->fetchAll(PDO::FETCH_OBJ);
    //         echo "error";
    //     } catch (Exception $e) {
    //         die($e->getMessage());
    //     }
    // }

    //    
}
