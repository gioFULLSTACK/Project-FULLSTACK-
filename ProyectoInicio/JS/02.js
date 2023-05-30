/*TIPOS DE DATOS EN JAVASCRIPT 
HACE REFERENCIA AL TIPO DE VALOR QUE VA A TENER ESA VARIBALE
NUMERO, TEXTO , BOOLEANO...
....STRING
REPRESENTAN UN TEXTO*/

const producto ="juego de mesa EL PUEBLO DUERME";
const producto2 = String("DOOBLE");
const producto3 = new String("UNO"); 


// //INDICACIONES DE LO QUE ESTAMOS MOSTRANDO
console.log ("PRODUCTO", producto);
console.log ("PRODUCTO2",  producto2);
console.log ("PRODUCTO3",  producto3);
//typeof PARA VER EL TIPO DE DATO QUE TIENE UNA VARIABLE
console.log ("PRODUCTO",typeof producto);
console.log ("PRODUCTO2", typeof producto2);
console.log ("PRODUCTO3", typeof producto3);



const numero100= "100";
const numero200= 200; //siccome abbiamo messo il 200 fuori dalle virgolette nel const=200 esce come typo numero mentre l'altro esce come string
console.log ("numero100", typeof numero100);
console.log ("numero200", typeof numero200);

/* 
METODOS PARA LOS STRING
SON FUNCIONES QUE PUEDES UTILIZAR PARA VARIAR EN FUNCIONES POR TIPO DE DATO*/
//metodos son funciones que me dicen
console.log("METODO LENGHT:",producto.length);
//me dice la longitud de la variable

/* INDEX OF BARA BUSCAR SI UNA PALABRA EXISTE EN UNA CADENA DE TEXTO Y ME DA LA POSICION*/

console.log("METODO INDEXOF:",producto.indexOf("DUERME"));
/* 0 o POSITIVO SI EXISTE EN LA CADENA DE TEXTO NEGATIVO SI NO EXISTE*/

// INCLUDES RETORNA TRUE O FALSE
console.log("METODO INCUDES:", producto.includes ("DUERME"));

let twitter= "Domingo en santiago con las ocas"
console.log("Twitter caracteres:", twitter.length);



//NUMBER : todos los numeros en javascript son tratados por
// igual dea igual que sean enteros, decimalesm negativos,frcciones.
let numero1= 100;
let numero2=200.25;
let numero3= "200";
let numero4=2/3;

console.log ("Type1:",  numero1);
console.log ("Type2:",  numero2);
console.log ("Type3:",  numero3);
console.log ("Type4:",  numero4);

console.log ("Type1:", typeof numero1);
console.log ("Type2:", typeof numero2);
console.log ("Type3:", typeof numero3);
console.log ("Type4:", typeof numero4);

//Applicacion de operaciones matematicas
//numero 1 y 2
console.log ("Suma",numero1+numero2);
console.log ("Resta",numero2-numero1);
console.log ("Multiplicacion",numero1*numero2);
console.log ("Division",numero1/numero2);
console.log ("Modulo", numero1%numero2);
//numero 1 y 3 (perche il 3 era un string e non un number)
console.log ("Suma",numero1+numero3);
console.log ("Resta",numero2-numero3);
console.log ("Multiplicacion",numero1*numero3);
console.log ("Division",numero1/numero3);
console.log ("Modulo", numero1%numero3);
//il tipo di dato che viene da questa operazione e' tipo string.

//METODOS PARA LOS NUMEROS (MATH)
let resultado=Math.random();
console.log ("Uso de metodo random:", resultado);


//EJERCICIO 5-10 RANDOM 
let resultado1= Math.random()*5+5;
console.log("Resultado numero aleatorio entre 5 y 10", resultado1);
console.log("Resultado redondeado",Math.round(resultado1));

//calcular area

let diameter=10
let Area=Math.PI*(Math.pow(diameter/2,2));
console.log("Area",Area);

//
let resultadoOrden=20+30*2;
console.log("MOSTRAR ORDEN DE LAS OPERACIONES", resultadoOrden);
 
let resultadoOrden2 = (20+30)*2;
console.log("MOSTRAR EL ORDEN DE LAS OPERACIONES 2",resultadoOrden2);

//Ejercicio descuento

let prenda1= 25
let prenda2=10
let prenda3=15
let descuento=30
let carrito= prenda1+prenda2+prenda3

let ahorroTotal=(carrito *(descuento/100))

console.log("Ahorro Total:",carrito*(descuento/100));
console.log("Total:", carrito);
console.log("Precio Final",carrito-ahorroTotal);


//INCREMENTOS/DECREMENETOS
let meGusta=0;
//  meGusta++;//increment en 1 el valor de meGusta

// console.log("USO DE INCREMENTOS, ME GUSTA", meGusta+=15);
// console.log("TRAS EL INCREMENTO", meGusta++);
console.log("TRAS EL INCREMENTO", meGusta);
console.log("++TRAS EL INCREMENTO", ++meGusta);
console.log("TRAS EL INCREMENTO++", meGusta++);
console.log("--TRAS EL INCREMENTO", --meGusta);
console.log("TRAS EL INCREMENTO--", meGusta--);
console.log("TRAS EL INCREMENTO", meGusta+=15);
//meGusta++ es igual a meGusta=meGusta+1

//CONCATENACION

const nombre = "Prototipo Nombre";
const email ="email@prototipo.com";

console.log("Explicacion concatenacion nombre e email"," Nombre: " +nombre+ " Correo: " +email)

//TEMPLATE STRING O STRING LITERALS
//HACE REFERENCAI A MEZCLAR TEXTO CON VARIABLES O FUNCIONES ES SUSTITUTO DE LAS SINTAXIS ANTERIOR
console.log(`Uso TEMPLATE STRING Nombre de usuario ${nombre} y su correo es ${email}`)

//BOOLEANOS
let boolean1= true
let boolean2= false
let boolean3= "true"
//let boolean4=new Boolean (true);
//console.log("TIPO DATO BOOLEAN4:", typeof boolean4)
console.log("Boolean1",typeof boolean1);
console.log("Boolean2",typeof boolean2);
console.log("Boolean3",typeof boolean3);

//OBJETOS
