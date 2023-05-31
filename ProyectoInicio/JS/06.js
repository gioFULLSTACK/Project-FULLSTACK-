//CONTROL DE FLUJO
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

//same exercise but with switch

const number= 10

if (number*number===100){
    console.log("el resultado es menor de 100");
} else if (number*number===200){ //--> esta es la condicion si no se cumple la anterior osea que n*n =100
    console.log("resultado es 200")
} else{ //--> questo invece e`se nessuna delle condizioni anteriori si compiono che si compia questa
    console.log("ninguna de las anteriores")
}

switch (number*number){
    case 100:console.log("es igual a 100");
    break;
    case 200: console.log("es igual a 200");
    break;
    default: console.log("ninguno de los anteriores");
    break;
}

// !!!!!!!!!!!!
// EJERCICIO4
// CREAR UNA ESTRUCTURA DE CONTROL QUE ME COMPARE SI
// UN NÚMERO + 10 ES:
// =9
// =12
// =15
// =100
// RESTO DE POSIBILIDADES


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

//ESTRUCTURAS DE CONTROLO TIPO BUCKLE:
// for, while, while, do while, for each, map (for each y map son metodos para arrays)
                                        //FOR
// for(argumento){
//     cuerpo 
// }
    //  for (let i=0; i<10;    i++){}
                                                //plbr res indice/condicion/actualizador
//entra en el buckle variable valorada en 0, es i menor que 10? si porque es 0, 
//asi que i++ y i pasa a valer 1, y en buckle de nuevo i<10? si 
//entonces se pasa a i++ y vale 2
//realiza una funcion en buckle 

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

for (let indice=0; indice<4; indice++){
    console.log(indice+1)
}
 
for (let index=100; index<200; index+=5){
    console.log(index);
}

for (let index1=100; index1<=100, index1>=0; index1-=3){
    console.log(index1);
}

                            //WHILE
//diferencias entre while y for 
/*
-while tiene declaracion indice fuera de la funcion

 */
let i=0;
while(i<10){
    console.log("ejercicio while",i);
    i++;
}

let indice2=0;
while(indice2<4){
    console.log("Ejercicio while",indice2+1);
    indice2++;  // podriamos poner indice+=1
};

                        //DO WHILE
   //entra con la variable y me ejecuta el codigo y actualiza la variable.                     
let j=20;
do {
    console.log("ejercicio DO WHILE",j+1);
    j++;
}while(j<4);

for (let even=1; even<=50; even++){
    if(even%2===0){  //--> le ponemos con el if una condicion y la movida %2===0 para saber si son pares
    console.log(even);
}}



let carrito = [
    {
        nombre: "TV",
        precio: 340
    },
    {
        nombre: "Ipad",
        precio: 1200
    },
    {
        nombre: "Iphonz",
        precio: 1800
    },
    {
        nombre: "macbuc",
        precio: 2700
    }
]
console.table(carrito);



for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i]);
    console.log(carrito[i].nombre);
}

                    //FOR EACH Y MAP
carrito.forEach(function (producto){
    console.log(producto,producto.nombre);
})
//pasar a funcion flecha el foreach anterior
carrito.forEach =  producto => console.log(producto,producto.nombre);

//map se suele utilizar para crear arrays a partir de la lectura de otros arrays
//for each para leer o mostrar por consola informacion de array 
const arrayMap = carrito.map (producto => producto.nombre);
console.log(arrayMap);


//mostrar propriedad --> precio del carrito en while, for y do while
//FOR
console.log("Ej. con FOR",carrito[i]);
for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i]);
    
}
//WHILE
let c = 0; //--> para que empieze en el indice 0 osea el primer numero
while (c < carrito.length) {
  console.log("Ej. con WHILE",carrito[c].precio);
  c++;
}

//DO WHILE
let c1 = 0;

do {
  console.log("Ej. con DO WHILE",carrito[c1].precio);
  c1++;
} while (c1 < carrito.length);

//
