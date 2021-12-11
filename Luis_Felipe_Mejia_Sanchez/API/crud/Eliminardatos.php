<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  require("../base/conexion.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

  $conexion = conexion(); // CREA LA CONEXION
  
  // REALIZA LA QUERY A LA DB
  mysqli_query($conexion, "DELETE FROM usuarios WHERE cedula=$_GET[cedula]");
    
	$resultado = mysqli_affected_rows($conexion);
	
	//echo $resultado;
  class Result {}
  $response = new Result();

	if($resultado >0){
    $response->resultado = 'OK';
    $response->mensaje = 'EL USUARIO SE ELIMINO EXITOSAMENTE';
  }else{
    $response->resultado = 'NO';
    $response->mensaje = 'EL USUARIO NO SE ENCONTRO PARA ELIMINAR';
  }

  // GENERA LOS DATOS DE RESPUESTA
  header('Content-Type: application/json');

  echo json_encode($response); // MUESTRA EL JSON GENERADO*/
?>