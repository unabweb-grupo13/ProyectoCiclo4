<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  require("../base/conexion.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB
  
  $conexion = conexion(); // CREA LA CONEXION
  
  // REALIZA LA QUERY A LA DB
  mysqli_query($conexion, "SELECT count(*)  FROM usuario WHERE email=$_GET[email] and contrasena=~$GET[contrasena]");
    
	$resultado = mysqli_affected_rows($conexion);
	
	//echo $resultado;
  class Result {}
  $response = new Result();

	if($resultado >0 ){
    $response->resultado = 'OK';
    $response->mensaje = 'EL USUARIO SE REGISTRO CON EXITO ';
  }else{
    $response->resultado = 'NO';
    $response->mensaje = 'EL USUARIO NO SE PUEDE REGISTRAR';
  }

  // GENERA LOS DATOS DE RESPUESTA
  header('Content-Type: application/json');

  echo json_encode($response); // MUESTRA EL JSON GENERADO*/
?>