<?php 
header('Content-Type: application/json; charset=utf-8');
extract($_POST);
include "../includes/sdk.php";
$array = array();
$sdk = new Garcia($_GET["lang"]);
// Convert datepicker format
$date1 = DateTime::createFromFormat('d/m/Y', $datepicker);
$converted_datepicker = $date1->format('n/j/Y');

// Convert datepicker2 format
$date2 = DateTime::createFromFormat('d/m/Y', $datepickerend);
$converted_datepicker2 = $date2->format('n/j/Y');
$data = '{
    "title": "'.$name.'",
    "content": "'.$content.'",
    "status": "publish",
    "fields": {
        "correo": "'.$email.'",
        "telefono": "'.$phone.'",
        "fecha_inicial_de_rodaje": "'.$converted_datepicker.'",
        "fecha_final_de_rodaje": "'.$converted_datepicker2.'",
        "equipos":['.$equipos.'],
        "idioma":"'.$idioma.'"
    }
  }';

$leadCreated = $sdk->createLead($data);

$curl = curl_init();
curl_setopt_array($curl, array(
CURLOPT_URL => 'https://api.createsend.com/api/v3.2/transactional/smartemail/1341fb84-9d3d-4544-99f6-da96cfa7a257/send',
CURLOPT_RETURNTRANSFER => true,
CURLOPT_ENCODING => '',
CURLOPT_MAXREDIRS => 10,
CURLOPT_TIMEOUT => 0,
CURLOPT_FOLLOWLOCATION => true,
CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
CURLOPT_CUSTOMREQUEST => 'POST',
CURLOPT_POSTFIELDS =>'{
    "To": ["hernanavelino.coo@garciarental.co"],
    "ConsentToTrack": "yes"
}',
CURLOPT_HTTPHEADER => array(
    'Content-Type: application/json',
    'Authorization: Basic ZUg3czhIdEJXQlhYQlVtS2Q4U2tvc3hLZVZLL3RuVFMyQi9tcDUvWHp0M1dXZDJ0dVJYclVsOGxENnlOa1Zld2t4dnI2RHFLWmtPcS9TbEJJYUlkd1JQejBLU245cTcrcDFyMnVSUStFWXRRZE9Tak85VjdTVmhKYnV2TCtKeVMrMnFrTFR6RlFhRE9zbG9GdjlLcTFnPT06'
),
));
$response = curl_exec($curl);

curl_close($curl);

$array['data'] = $data;
$array['leadCreated'] = $leadCreated;
$array['response'] = $response;

echo json_encode($array);