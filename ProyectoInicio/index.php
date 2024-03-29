<<<<<<< HEAD
<?php 
    require "consultas.php";
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tu Carrera Digital</title>
    <!-- Questa parte dopo l'abbiamo presa da google fonts per copiare un font. va prima del link reload
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Sigmar&display=swap" rel="stylesheet"> -->

    <!-- la parte de linr rel="preload" sirve a que se cargue antes de que se lo pida. 
        lo de href es para conectarlo a la carpeta donde yo puse los estilos. y la relacion eso es  -->
    <link rel="preload" href="css/normalize.css" as="style">
    <link href="css/normalize.css" rel="stylesheet">


    <link rel="preload" href="css/style.css" as="style">
    <link href="css/style.css" rel="stylesheet">
   
</head>

<!-- <h1>Primer Titulo </h1>
    <h6>Hola Mundo</h6>
    <p> Primera clase de Fullstack</p> 
            <p>parrafo hijo</p>
    
    <h3>Objectivos clase de 28 Abril 2023</h3> -->


<body>

    <h1> VAMOS A PONER DBAJO DE MIS SERVICIOS CON PHP </h1>
    <?php
        while ($servicio = mysqli_fetch_assoc($consulta)){
    ?>
        <div>
            <h3>
                <?php
                echo($servicio["nombre"]);
                ?>
            </h3>
            <p>
                <?php
                echo($servicio["precio"]);
                ?>
            </p>
        </div>    
        <?php     
    }
    ?>




    <!-- <div class="EjercicioFlex">
        <a href="#">ENLACE 1</a>
        <a href="#"> ENLACE2 </a>
        <a href="#"> ENLACE3 </a>
    </div> -->



    <!-- <div class="EjBoxModel">
    <h2>
        EJERCICIO BOX MODEL
    </h2>
</div> -->

<!-- EJERCICIO GRID -->
    <!-- <section class="EjercicioGrid contenedor">
        <div class="Hijo1"></div>
        <div class="Hijo2"></div>
        <div class="Hijo3"></div>
    </section> -->

    <section class="EjeGrid2 contenedor">
        <div class="bb1"></div>
        <div class="bb2"></div>
        <div class="bb3"></div>
    </section>

    <header class="Login contenedor">
        <a href="#"> Login Alumnos </a>
        <a class="Separador">|</a>
        <!-- entre a y href se podria poner lo de class="" pero se tiene que aplicar a todos los elementos,
            si lo pones en el header lo aplicas a todos los hijos-->
        <a href="#">Login Empresas</a>
    </header>
                                                    <a id="boton" href="#"> Ver Notificacion</a>
    <nav class="MenuPrincipal contenedor">
        <div Class="MenuImagen">
            <a href="#">
                <img alt="cursos digitales" src="Img/Tu-carrera-digital-general.png">
            </a>
        </div>

        <div class="MenuEnlaces">
            <a class="Info1" href="#"> CURSOS</a>
            <a class="Info1" href="#"> SOBRE NOSOTROS</a>
            <a class="Info2" href="#"> INFORMATE</a>
        </div>
    </nav>

    <section class="banner PrimeraSeccion">
        <div class="contenedor">

            <h1 class="Titulo">
                <strong>Descubre nuestros</strong>
                <strong> cursos gratuitos y </strong>
                <strong> formate en las disciplinas </strong>
                <strong> mas demandadas</strong>
                <strong> del mercado </strong>
            </h1>
                                                                    <a class="cta" href="#">VER CURSOS</a>      
        </div>

    </section>

    <section>
        <div class="contenedor">
            <div class="logos">
                <div class="Logosoficiales">
                    <img src="Img/Logos-oficiales.png">
                </div>

                <div class="LogosAdecco">
                    <img src="Img/Logo-Adecco.png">
                </div>
            </div>

        </div>
    </section>

    <section class="contenedor Cursos">
        <h3>
            CURSOS
        </h3>
        <h2>
            CONECTAMOS PERSONAS Y EMPLEO
        </h2>
        <div>
            <a class="Vertodo" href="#"> VER TODO</a>
            <a href="#"> Bilbao</a>
            <a href="#"> Gijon</a>
            <a href="#"> La Coruña</a>
            <a href="#"> Oviedo</a>
            <a href="#"> Santander</a>
            <a href="#"> Vigo</a>
            <a href="#"> Vitoria-Gasteiz</a>
        </div>
    </section>

    <section class="SeccionFichas contenedor">
        <!-- <div class="BottoneIscriviM"> -->
        <div class="CursoMarketing">
            <h2>MARKETING DIGITAL</h2>
            <a href="/zona-norte/curso-marketing-digital#cursos"> INSCRIBEME
            </a>
        </div>
        <!-- </div> -->

        <!-- <div class="BottoneIscriviP"> -->
        <div class="CursoFullstack">
            <h2> PROGRAMACION WEB FULLSTACK</h2>
            <a href="/zona-norte/cursos-programcion-web-full-stack#cursos">INSCRIBEME
            </a>
            <!-- </div> -->
        </div>

    </section>

    <section>
        <div class="contenedor textosegundario">
            <h3>
                <strong> ¿Te interesa algun curso en tu ciudad? </strong>
            </h3>
            <a class="button contenedor " href="javascript:void('0')">¡PIDENOSLO!</a>
        </div>
    </section>

    <section class="contenedor">
        <div class="SeccionVideo">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/bkyWeUcNZuQ"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </div>
    </section>

    <section class="contenedor Secciontexto">
        <div class="textoizquierda">
            <h3 class="para">¿PARA QUIEN SON ESTOS CURSOS?</h3>

            <h2 class="boldbody">
                Si quieres dar un giro a tu carrera profesional y
                formarte en profesiones digitales con futuro, este es tu lugar.
            </h2>
            <p class="bodyslim">
                Cuando eliges un curso en
                <b> Tu carrera digital</b>
                ,estás dando el paso definitivo hacia las profesiones con más
                demanda del momento, como Marketing Digital, Desarrollo Web Full Stack y Programación de Videojuegos,
                Diseño
                3D y
                Realidad Virtual. Nosotros te ofrecemos formación con docentes expertos y contenidos alineados a las
                necesidades de
                las empresas. Queremos que saques el máximo partido a estos cursos y que potencies tus posibilidades de
                encontrar un
                empleo.
            </p>
            <h4>
                <b> PARA PARTICIPAR, NECESITARAS ESTAR INSCRITO EN GARANTIA JUVENIL</b>
            </h4>
            <a class="greenlink"
                href="https://www.sepe.es/HomeSepe/Personas/encontrar-trabajo/Garantia-Juvenil/que-es-garantia-juvenil">IR
                A
                LA WEB DE GARANTIA JUVENIL</a>

            <p class="Infonografia">
                Descargate esta infografia en la que te mostamos como descargar tu certificado de Garantia Juvenil :
            </p>
            <a class="SegundoEnlace" href="/assets/infografia-S.G.J.pdf"> DESCARGAR INFOGRAFIA ADJUNTA</a>
        </div>
        <div class="textoderecha">
            <h3>
                <p>¿Eres mayor de 16 años</p>
                <p> y menor de 30?</p>
                <p>¿Estas sin trabajar? </p>
                <p>¿Estas sin cursar formacion? </p>

                <a href="@"> Dale forma a tu futuro y despega tu carrera digital</a>

            </h3>
        </div>
    </section>

    <section class="location">
        <div class="contenedor">

            <h2>Localizaciones</h2>
            <div class="ciudadeslocation">
                <div>
                    <h3> Vigo</h3>
                    <p>AVENIDA DEL ALCALDE GREGORIO ESPINO 50 36205, GALICIA, PONTEVEDRA</p>
                    <p>CALLE SANTA MARTA S/N 36202, GALICIA, PONTEVEDRA</p>
                </div>
                <div>
                    <h3>Gijon</h3>
                    <p>CALLE AZCARRAGA 16 33208, ASTURIAS,ASTURIAS</p>
                </div>
                <div>
                    <h3>Bilbao</h3>
                    <p>CALLE MANUEL IRADIER 17 01005, EUSKADI, ALAVA</p>
                </div>
                <div>
                    <h3>Oviedo</h3>
                    <p>CALLE FUENTE DE LA PLATA 103 33013, ASTURIAS, ASTURIAS</p>
                </div>
                <div>
                    <h3>La Coruña</h3>
                    <p>CALLE MARQUES DE AMBOAGE 12 15006, GALICIA, LA CORUÑA</p>
                </div>
                <div>
                    <h3>Santander</h3>
                    <p>CALLE VARGAS 65 39010, CANTABRIA, CANTABRIA</p>
                </div>

            </div>
        </div>
    </section>

    <!-- EJERCICIO PARA APRENDER A HACER CSSS GRID -->
    <!-- <section class="location">
        <div class="contenedor">

            <h2>Localizaciones</h2>
            <div class="ciudadeslocationGrid">
                <div>
                    <h3> Vigo</h3>
                    <p>AVENIDA DEL ALCALDE GREGORIO ESPINO 50 36205, GALICIA, PONTEVEDRA</p>
                    <p>CALLE SANTA MARTA S/N 36202, GALICIA, PONTEVEDRA</p>
                </div>
                <div>
                    <h3>Gijon</h3>
                    <p>CALLE AZCARRAGA 16 33208, ASTURIAS,ASTURIAS</p>
                </div>
                <div>
                    <h3>Bilbao</h3>
                    <p>CALLE MANUEL IRADIER 17 01005, EUSKADI, ALAVA</p>
                </div>
                <div>
                    <h3>Oviedo</h3>
                    <p>CALLE FUENTE DE LA PLATA 103 33013, ASTURIAS, ASTURIAS</p>
                </div>
                <div>
                    <h3>La Coruña</h3>
                    <p>CALLE MARQUES DE AMBOAGE 12 15006, GALICIA, LA CORUÑA</p>
                </div>
                <div>
                    <h3>Santander</h3>
                    <p>CALLE VARGAS 65 39010, CANTABRIA, CANTABRIA</p>
                </div>

            </div>
        </div>
    </section> -->

    <section class="Seccioncontactos">
        <div class="contenedor">
            <h3>Contactar </h3>
            <h2>¿tienes dudas? habla con nosotros:</h2>
            <div class="Contenedorcontacto">
                <div class="Contacto1">
                    <p>LLAMANOS</p>
                    <a href="tel:616290460">616290460</a>
                </div>
                <div class="Contacto2">
                    <p> ESCRIBENOS</p>
                    <a href="maito:immaculada.fernandez@adecco.com">immaculada.fernandez@adecco.com</a>
                </div>

            </div>
            <!-- <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone-calling" width="64"
                height="64" viewBox="0 0 24 24" stroke-width="2" stroke="#00b341" fill="none" stroke-linecap="round"
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                    d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                <line x1="15" y1="7" x2="15" y2="7.01" />
                <line x1="18" y1="7" x2="18" y2="7.01" />
                <line x1="21" y1="7" x2="21" y2="7.01" />
            </svg> -->

            <!-- <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="64" height="64"
                viewBox="0 0 24 24" stroke-width="2" stroke="#00b341" fill="none" stroke-linecap="round"
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <polyline points="3 7 12 13 21 7" />
            </svg> -->


        </div>
    </section>

    <form>
        <fieldset>
             ejercicio Formulario
            <legend>Titulo del Formulario</legend>
            <div>
                <div>
                    <label>Nombre</label>
                    <input id="nombre" type="text" placeholder="Tu nombre">
                </div>
                <div>
                    <label>Mensaje</label>
                    <textarea id="mensaje" type="text" placeholder="escribiendo mensaje"></textarea>
                </div>
                <div>
                    <label>Correo</label>
                    <input id="correo" type="email" placeholder="Tu correo electronico">
                </div>

            </div>
            <input type="submit" value="Enviar tu informacion">

        </fieldset>
    </form>

    <footer class="contenedor">
        <div class="MenuFooter">
            <a href="#">CURSOS ZONA-NORTE </a>
            <a href="#">SOBRE NOSOSTROS</a>
        </div>
        <div class="paginaslegales">
            <a href="#">Preguntas Frecuentes (FAQ)</a>
            <a href="#">Politica de Cookies</a>
            <a href="#">Politica de Privacidad</a>
            <a href="#">Aviso Legal</a>
        </div>
    </footer>

    <section class="botonInformateFijo">
        <a href="#">
            <img src="Img/CTA-informate.png">
        </a>
    </section>
    <section class="botonarriba">
        <a href="#">
            <img src="icons/up-top.png">
        </a>
    </section>

    <section class="SeccionFija">
        <p> INFORMATE </p>
        <a href="#"><img src="icons/ico-informate.png"></a>
        
    </section>
<!-- <script src="JS/script.js"> </script> -->
<!-- <script src="JS/01.js"></script> -->

<script src="JS/interaccion.js"></script>

</body>

</html>