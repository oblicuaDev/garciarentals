<?php 
include "../includes/sdk.php";
$sdk = new Garcia($_GET["lang"]);
$categoria= isset($_GET["cat"]) ? $_GET["cat"] : NULL;

$equipos = $sdk->gEquipos($categoria);

echo json_encode($equipos);