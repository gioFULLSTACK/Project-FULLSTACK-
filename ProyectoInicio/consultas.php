<?php
//  include "includes/header.php"

//COMO CONSULTABAOS NUESTRA BASE DE DATOS 
// SELECT * FROM servicios;
 // VAMOS A AHCER ALGO EN PHP QUE ES LO MISMO QUE ESO PERO EN PHP

 // siempre van 4 cosas importantes : Importar conexion, escribir codigo SQL, obtener resutlados, Cerrar conexion

 function obtenerservicios(){
    try{  //FUNCIONA IGUAL QUE EN JAVFASCRIPT SE USA PARA PUTNSO CRITICOS COMO EN ESTE CASO, CONSULTAS A BASE DE DATOS
         // IMPORTAR COENXION
        require "conexiones.php";
    // ESCRIBIR CODIGO SQL
    
    global $sql;
    global $consulta;
       $sql= "SELECT * FROM servicios;";
       $consulta=mysqli_query($db,$sql);

    // OBTENER RESULTADOS
    // echo "<pre>";
    // var_dump(mysqli_fetch_all($consulta));
    // echo "</pre>";

    // CERRAR LA CONEXION
        mysqli_close($db);

 } catch (\Throwable $th) {
    var_dump($th);
 }

 }
 obtenerservicios ();


 include "includes/footer.php"
?>