<?php 
include "../includes/sdk.php";
$sdk = new Garcia($_GET["lang"]);
$palabras = $sdk->getPalabras();
echo json_encode($palabras);