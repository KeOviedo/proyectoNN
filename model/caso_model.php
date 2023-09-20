<?php

require('conexion.php');

class CasoModel
{


    // static public function mdlTrasladosDespachados()
    // {
    //     $sql = "SELECT DISTINCT trasconfir.translado_cronicos_fkey,trasconfir.finalizar_traslado,pac.id_pacientes_cronicos,pac.tipo_documento,pac.numero_documento,pac.nombres,pac.apellidos,pac.edad,pac.intervalo_edad,pac.telefono,pac.celular,pac.email,pac.eps,pac.ips_origen,pac.poblacion_migrante,
    //     agd.id_agendamientos_cronicos,agd.tipo_transporte,agd.ciudad_agenda,agd.descripcion_agenda,agd.hora,agd.direccion_origen,agd.barrio_origen,agd.direccion_origen,agd.barrio_destino,agd.color,agd.title,agd.start,agd.ips_destino,agd.diagnostico,agd.dependencia,agd.fecha_cita,
    //     agd.paciente_cronico,i.id_ips,i.nombre_ips,movil.movil,traslado.id_translado_cronicos,traslado.estado_ida,traslado.ambulancia,ipsr.nombre_ips as ipsdestino,rt.consecutivo,rt.movil_ambulancia,rt.estado as estadoretorno,movilr.movil as movilretorno
    //     FROM pacientes_cronicos AS pac
    //     LEFT JOIN agendamientos_cronicos AS agd ON (pac.id_pacientes_cronicos=agd.paciente_cronico)
    //     LEFT JOIN translado_cronicos AS traslado ON (agd.id_agendamientos_cronicos=traslado.agenda_id)
    //     LEFT JOIN ambulancia_movil AS movil ON (traslado.ambulancia::int=movil.id_ambulancia)
    //     LEFT JOIN translado_cronicos_confirmacion AS trasconfir ON (traslado.id_translado_cronicos=trasconfir.translado_cronicos_fkey)
    //     LEFT JOIN ips as i ON (pac.ips_origen::int=i.id_ips)
    //     LEFT JOIN ips as ipsr ON (agd.ips_destino::int=ipsr.id_ips)
    //     LEFT JOIN translado_cronicos_retorno as rt ON (traslado.id_translado_cronicos=rt.traslado)
    //     LEFT JOIN ambulancia_movil AS movilr ON (rt.movil_ambulancia::int=movilr.id_ambulancia)";

    //     $conexion = Conexion::conectar()->prepare($sql);

    //     $conexion->execute();
    //     return $conexion->fetchAll(PDO::FETCH_ASSOC);
    // }
}
