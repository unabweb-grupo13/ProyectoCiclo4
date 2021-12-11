<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  global $datos;

  require("../base/conexion.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = conexion(); // CREA LA CONEXION
  
  // REALIZA LA QUERY A LA DB
  $resultado = mysqli_query($conexion, "SELECT * FROM usuarios");

  while($registros = mysqli_fetch_array ($resultado) ){
    $datos[] = $registros;
  }

  header('Content-Type: application/json');

  echo json_encode($datos); 
    