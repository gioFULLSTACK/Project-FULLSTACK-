<?php
// ***************************************MYSQLi***********************************************
//variables se inician con $nombre variable
//primero se connecta y despues se ... localhost, nombre usuario, password,base de datos
$db= mysqli_connect ("localhost","root","FullstackVigo","peluqueria");

//COMPROBAR SI LA CONEXION SE HA REALIZADO:
if (!$db){
    echo "error en la conexion";
    exit; //si  
} else {
    echo "conexion correcta";
}




?> 