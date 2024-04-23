<?php 
include "../includes/sdk.php";
$sdk = new Garcia($_GET["lang"]);
$categoria= isset($_GET["cat"]) ? $_GET["cat"] : NULL;
$exclude= isset($_GET["exclude"]) ? $_GET["exclude"] : NULL;
$equipos = $sdk->gEquipos($categoria, $exclude);

echo json_encode($equipos);