<?php
$dir = "/home3/newlab/public_html/garciarental/cache";
$log  = "Caché eliminado ".date("F j, Y, g:i a").PHP_EOL.
        "-------------------------".PHP_EOL;
file_put_contents('refresh.log', $log, FILE_APPEND);
deleteDirectory($dir);
function deleteDirectory($dir) {
    if (!file_exists($dir)) {
        return true;
    }

    if (!is_dir($dir)) {
        return unlink($dir);
    }

    foreach (scandir($dir) as $item) {
        if ($item == '.' || $item == '..') {
            continue;
        }

        if (!deleteDirectory($dir . DIRECTORY_SEPARATOR . $item)) {
            return false;
        }

    }

    return rmdir($dir);
}

?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Caches Eliminadas</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      margin: 0;
      padding: 0;
      min-height: 100vh;
      display: grid;
      align-items: center;
      justify-content: center;
      grid-template-rows: 1fr;
    }
    h2 {
      font-size: 24px;
      color: #333;
    }
    a {
      display: inline-block;
      margin-top: 20px;
      padding: 10px 20px;
      background-color: #007bff;
      color: #fff;
      text-decoration: none;
      border-radius: 5px;
      transition: background-color 0.3s ease;
    }
    a:hover {
      background-color: #0056b3;
    }
  </style>
</head>
<body>
    <div class="container">
        <h2>¡Las caches han sido eliminadas!</h2>
        <a href="https://admin.nlabph.com/wp-admin/">Volver al Administrador</a>

    </div>
</body>
</html>
