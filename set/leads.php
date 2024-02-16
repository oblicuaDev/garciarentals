<?php 
header('Content-Type: application/json; charset=utf-8');
extract($_POST);
include "../includes/sdk.php";
$array = array();
$sdk = new Garcia($_GET["lang"]);
$data = '{
    "title": "'.$name.'",
    "content": "'.$content.'",
    "status": "publish",
    "fields": {
        "correo": "'.$email.'",
        "telefono": "'.$phone.'",
        "fecha_inicial_de_rodaje": "'.$datepicker.'",
        "fecha_final_de_rodaje": "'.$datepicker2.'",
        "equipos":['.$equipos.'],
        "idioma":"'.$idioma.'"
    }
  }';

$leadCreated = $sdk->createLead($data);

$array['data'] = $data;
$array['leadCreated'] = $leadCreated;

echo json_encode($array);