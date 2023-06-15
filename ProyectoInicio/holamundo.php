<!-- FORMAS DE MOSTRAR POR PANTALLA/ESCRIBIR EN PHP 
FORMA 1 -->
<!-- <h1> hola mundo </h1>;-->
<!-- FORMA 2 -->
<?php
    echo "Hola Mundo";
?>
<!-- FORMA 3 -->
<?php
    echo "<h1>Hola Mundo</h1>";
?>
<!-- FORMA 4 -->
<?php
    echo ("Hola Mundo");
?>
<!-- FORMA 5 -->
<?php
    print "Hola Mundo";
?>
<!-- FORMA 6 -->
<?php
    var_dump("Hola Mundo");
?>

<!-- FORMA DE CONECTAR PHP A OTRO PHP CON HEADER 
solo per evitare di avere un php enorme e dividi le sezioni in diversi php -->
<?php
    include "header.php"
?>