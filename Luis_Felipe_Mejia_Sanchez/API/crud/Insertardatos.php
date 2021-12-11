<?php
 header('Access-Control-Allow-Origin: *');
 header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
 header("Access-Control-Allow-Methods: POST");

if($_SERVER['REQUEST_METHOD'] === 'POST'){

$json =file_get_contents('php://input');

$params = json_decode($json);

require("../base/conexion.php");


echo $params->fname;
echo $params->lname;
echo $params->contrasena;
echo $params->email;
echo $params->phone;

$conexion = conexion();

mysqli_query($conexion, "INSERT INTO usuario (fname,lname,contrasena,email,phone) VALUES ('$params->fname','$params->lname','$params->contrasena','$params->email','$params->phone')");

class Result{}

$response = new Result();
$response -> resultado ='OK';
$response -> mensaje = 'Se registro con exito el usuario';

header('Content-Type: application/json');

echo json_encode($response); 

}





 
 ?>
