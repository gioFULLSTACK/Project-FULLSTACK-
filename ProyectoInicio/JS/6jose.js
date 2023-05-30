

/*
*******************
    COMIENZO CLASE
*******************


!!!!!!!!!!!!!!!!!
REPASO DÍA ANTERIOR

    //ARROW FUNCTION
    //PASOS
    /*
        PARTIENDO DE LA DECLARACIÓN DE LA FUNCIÓN:

        ELIMINAR EL FUNCTION
        AÑADIR => FLECHA ANTES DE LA LLAVE DE APERTURA
        CUANDO SOLO SE TIENE UNA LINEA EN EL CUERPO DE LA FUNCIÓN PODEMOS ELIMINAR LAS LLAVES
            SI HAY MÁS DE UNA HYA QUE PONERLA {}
        CUANDO SOLO SE TIENE UN PARÁMETRO SE PUEDE ELIMINAR LOS PARÉNTESIS
            SI HAY MAS DE UN PARAMETRO, VACIO, O INICICIALIZADO HAY QUE PONERLO()
        EL RETURN VA IMPLICITO EN EL CUERPO DE LA FUNCIÓN, SE PUEDE OMITIR SU VA SOLO
            SI HAY MÁS DE UNA LINEA EN EL CUERPO DE LA FUNCIÓN HAY QUE PONERLO

        let triplicarFlecha = (numero=1) => console.log("VALOR DE TRIPLICAR CON ARROW FUNCTION",numero*numero*numero);

        triplicarFlecha(12);  

        MÉTODOS DE PROPIEDAD


FIN DEL REPASO
!!!!!!!!!!!!!!!! 

/*
EJERCICIO1.
CREAR UNA FUNCIÓN QUE SUME 3 NUMEROS DADOS. PONERLA CON EXPRESION, DECLARACIÓN Y COMO FUNCIÓN DE FLECHA
sumaExpresion
sumaDeclaracion
sumaFlecha

EJERCICI02
CREAR UNA FUNCIÓN QUE BUSQUE ELEMENTOS DE UN ARRAY NUMEROS DADOS. PONERLA CON EXPRESION, DECLARACIÓN Y COMO FUNCIÓN DE FLECHA
buscaExpresion
buscaDeclaracion
buscaFlecha

EJERCICIO3

CREAR UNA FUNCIÓN QUE SUME ME COMPRUEBE SI UN NUMERO ES MAYOR QUE OTRO
. PONERLA CON EXPRESION, DECLARACIÓN Y COMO FUNCIÓN DE FLECHA
comparadorExpresion
comparadorDeclaracion
comparadorFlecha


!!!!!!!!!!!!!
EJERCICIO4
CREAR UNA FUNCIÓN DE FLECHA QUE DADOS 2 PARÁMETROS 
ME DE 10 VECES LA SUMA DE AMBOS
*/

let ejercicio1 = (n1, n2) => console.log("resultado de la operacion", (n1 + n2) * 10);
ejercicio1(4, 7);





/*


!!!!!!!!!!!!!
EJERCICIO5
CREAR UNA FUNCIÓN DE FLECHA QUE DADO DOS PARÁMETROS
ME INDIQUE EL NÚMERO DE CARACTERES DE LOS DOS
*/

let ejercicio2 = (p1, p2) => console.log("resultado ejercicio2", (p1 + p2).length);

ejercicio2("nomre", "apellido");




 


// PASAMOS AL ARCHIVO 06.js








/* ESTRUCTURAS DE CONTROL

    RETIRADA DE DINERO
    PRIMERO: EL CAJERO COMPRUEBA QUE EL PIN ESTÁ OK
    DESPUES ME DA LAS OPCIONES: SELECCIONO RETIRAR
    A CONTINUACIÓN EL CAJERO COMPRUEBA QUE TENGO SALDO SUFICIENTE

    QUE SON TODO ESTOS? CONDICIONES

    EMPEZAREMOS CON EL IF() ES DECIR, SI SE CUMPLE ()

*/

const puntaje = 900; // UN SOLO IGUAL ASIGNAMOS VALOR A UNA VARIABLE

if (puntaje === 1000) { // DOS IGUALES ES UNA COMPARACIÓN
    console.log("Puntaje es 1000")
}
else {    // SI NO SE CUMPLE EL IF, EJECUTA EL ELSE
    console.log("Puntaje NO es 1000")
}

/* TIPOS DE COMPARADORES

    == IGUAL
    === EXACTAMENTE IGUAL. TIENE EN CUENTA EL TIPO DE DATO Y EL VALOR
    !== DIFERENTE
    <= MENOR IGUAL
    >= MAYOR IGUAL
    < MENOR ESTRICTO
    > MAYOR ESTRICTO



!!!!!!!!!!!!!!!!!!!
EJERCICIO
CREAR UNA ESTRUCTURA DE CONTROL QUE COMPRUEBE SI EL PIN ES CORRECTO

EJERCICIO
CREAR UNA ESTRUCTURA DE CONTROL QUE COMPRUEBE SI PUEDO RETIRAR EL DINERO


EJERCICIO COMPLETO DEL CAJERO
CREAR UNA FUNCIÓN Y EN EL CUERPO DE LA FUNCIÓN
UNA ESTRUCTURA DE CONTROL QUE COMPRUEBE SI EL PIN DE MI TARJETA
ES CORRECTO Y SI PUEDO SACAR LA CANTIDAD

pin correcto es 1234;
saldo en cuenta es de 49;

LA FUNCIÓN RECIBIRÁ COMO ARGUMENTOS pin, cantidadRetirar



*/

function cajero(pin, cantidadRetirar) {
    if (pin === 1234) {
        console.log("Pin Correcto")
        if (cantidadRetirar <= 49) {
            console.log("Retirando Dinero");
        }
        else {
            console.log("Saldo Insuficiente")
        }
    }
    else {
        console.log("Pin Correcto")
    }
}

cajero(1234, 51);


//USO DE ELSE IF, PARA HACER MÚLTIPLES COMPARACIONES

const rol = "Editor"; // UN SOLO IGUAL ASIGNAMOS VALOR A UNA VARIABLE

if (rol === "Administrador") { // DOS IGUALES ES UNA COMPARACIÓN
    console.log("Acceso a todo el sistema")
} else if (rol === "Editor") {    // SI NO SE CUMPLE EL IF, EJECUTA EL ELSE
    console.log("Solo puedes editar, pero no crear")
} else {
    console.log("No tienes acceso")
}

//EJERCICIO
// CREAR UNA ESTRUCTURA DE CONTROL QUE COMPARE EN QUE ESTACIÓN DEL AÑO ESTAMOS
// Y ME DIGA CUAL ES LA SIGUIENTE. PRIMAVERA-VERANO-OTOÑO-INVIERNO

 

// USO DE SWITCH, PARA HACER MÚLTIPLIES COMPARACIONES
// Y OPTIMIZAR EL USO DE TANTO ELSE IF

/*
FUNCIONAN CON CASE
NECESITA UN BREAK PARA FINALIZAR CADA CASE
DEFAULT ME MUESTRA EL CASO POR DEFECTO

*/

const metodoPago = "Tarjeta";

switch (metodoPago) {
    case "Tarjeta": console.log("Pagaste con tarjeta");
        break;
    case "En Mano": console.log("Pagaste en mano");
        break;
    case "Bizum": console.log("Pagaste con bizum");
        break;
    default: console.log("Pendiente de pago");
        break;
}





 /*
!!!!!!!!!!!!!
EJERCICIO3
CREAR UNA ESTRUCTURA DE CONTROL QUE ME COMPARE SI
UN NÚMERO AL MULTIPLICARLO POR SI MISMO ES MENOR
QUE 100. SI ES MENOR QUE 200, Y SI NO CUMPLE LAS
ANTERIORES
 
*/

const numero = 12;
if (numero * numero < 100) {
    console.log("el resultado es menor que 100");
} else if (numero * numero < 200 && numero * numero >= 100) {
    console.log("el resultado es menor que 200");
} else {
    console.log("el resultado es >= 200");
}

/*
 
 
 
!!!!!!!!!!!!
EJERCICIO4
CREAR UNA ESTRUCTURA DE CONTROL QUE ME COMPARE SI
UN NÚMERO + 10 ES:
=9
=12
=15
=100
RESTO DE POSIBILIDADES
 
*/

const numero2 = 5 + 10;
switch (numero2) {
    case 9: console.log("ES IGUAL A 9");
        break;
    case 12: console.log("ES IGUAL A 12");
        break;
    case 15: console.log("ES IGUAL A 15");
        break;
    case 100: console.log("ES IGUAL A 100");
        break;
    default: console.log("RESTO DE POSIBILIDADES");
        break;
}


/*
 
 
*************
FOR LOOP (BUCLE FOR) ITERADOR
VA A ESTAR EJECUTANDO EL CODIGO HASTA QUE SE DEJE DE
CUMPLIR O SE CUMPLA UNA CONDICIÓN
 
*/

console.log(1);
console.log(2);
console.log(3);
console.log(4);

// IRÁ EJECUTANDO EL CÓDIGO SIEMPRE QUE SE CUMPLE LA CONDICION

for (let i = 0; i <= 3; i++) {
    //i === ÍNDICE, SUELE EMPEZAR POR 0, PUES SE USA MUCHO PARA
    //RECORRER ARREGLOS
    //i<10 SERÁ LA CONDICIÓN. SE EJECUTA MIENTRAS SE CUMPLE
    //i++ ACTUALIZADOR
    console.log(i);

}


// EJERCICIO, MOSTRAR DEL 100 AL 200 POR PANTALLA
for (let i = 100; i <= 200; i++) {
    console.log(`El numero ${i} está entre el 100 y el 200`);
} // :) 

// PODEMOS USAR LOS COMPARADORES YA VISTOS, ===,<=,>=,<,>!==

/*
!!!!!!!!!!!!!!!!
EJERCICIO5
MOSTRAR EN ORDEN DESCENDENTE DEL 100 HASTA EL 0, PERO
DE 5 EN 5
INCLUIDOS AMBOS

*/
for (let i = 100; i >= 0; i -= 5) {
    console.log("De 100 a 0 de 5 en 5:", i)
};

/*



!!!!!!!!!!!!!!!
EJERCICIO6
MOSTRAR DEL 1 AL 20 TODOS LOS NÚMEROS PARES
INCLUIDOS AMBOS
NOTA: i%2===0 ME DA LA CONDICIÓN DE PAR
*/

for (let k = 1; k <= 20; k++) {
    if (k % 2 === 0) {
        console.log("numero pares desde 1", k)
    }
}



// for (let t = 1; t<=20, t%2===0; t++ ){
//     console.log("numeros pares t",t)
// }


/*

COPIAMOS EL ARRAY DE OBJETOS carrito


*/

let carrito = [
    {
        nombre: "TV",
        precio: 750
    },
    {
        nombre: "Tablet",
        precio: 350
    },
    {
        nombre: "Movil",
        precio: 550
    },
    {
        nombre: "PC",
        precio: 1750
    }
];

/* VAMOS A RECORRER ESE CARRITO DE COMPRAS
EN QUE POSICION INICIA UN ARRAY??
MOSTRAR LOS OBJETOS DE UNO EN UNO

*/

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i]);
    console.log(carrito[i].nombre);
}


