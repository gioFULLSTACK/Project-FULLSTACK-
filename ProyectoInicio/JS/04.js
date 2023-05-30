/*ARRAYS AND FOREACH*/
// LISTADO DE AMIGOS EN FACEBOOK POR EJEMPLO


const numeros = [10, 20, 30, 40, 50];
console.log("MI PRIMER ARRAY", numeros);
console.table(numeros);



const meses = new Array("Enero", "Febrero", "Marzo");
console.table(meses);

let diaSemana = ["lunes", "martes", "miercoles", "jueves"];

let ejercicio5 = {
    texto: "string",
    numero: 20,
    boolean: true,
}

ejercicio5.diaDisponible = diaSemana;

const { texto, numero, boolean, diaDisponible } = ejercicio5;

console.log("resultado ejercicio 5", texto, numero, boolean, diaSemana)
console.log("LONGITUD DEL ARRAY", meses.length)

console.log("Show exercise 5:", ejercicio5);
console.table(ejercicio5);


// let ejercicio6={
//     nombre:"juan",
//     edad:40,
//     trabajando:false,
// }
// ejercicio6.diasDisponibles=diassemana
// console.table (ejercicio6)


diaSemana.forEach(function (dia) {
    console.log(dia);
});

// COMO ELIMINAR/MODIFICAR Y AÑADIR ELEMENTOS A LOS ARRAYS

numeros[5] = 60;

//  SI NO EXISTE ESE INDICE ME LO AGREGARÁ, PERO ESTA FORMA NO ES MUY
// // USADA, PUES DEBEMOS SABER LA EXTENSIÓN DEL ARREGLO

numeros[2] = 120;  // SI ESTE INDICE EXISTE, NOS MODIFICA EL VALOR

console.table(numeros);

numeros.push(70); // AÑADE 70 AL FINAL DEL ARRAY
numeros.push(80, 90, 100);  // PUEDES AÑADIR TANTOS VALORES COMO DESEES
console.table(numeros);

numeros.unshift(-10, 129020, -30); // AÑADE ELEMENTOS AL INICIO
console.table(numeros);

// // ELIMINAR ELEMENTOS DE UN ARRAY
numeros.pop(); // ME ELIMINA EL ULTIMO ELEMENTO DEL ARRAY
numeros.shift(); // ELIMINA EL PRIMER ELEMENTO
numeros.splice(2, 3); // (INDICE, VALORES A ELIMINAR)
console.table(numeros);

// // LAS DESVENTAJAS ES QUE ESTAMOS MODIFICANDO EL ARRAY ORIGINAL
// // PARA EVITAR ESO, CREAMOS UN ARRAY NUEVO CON REST/SPREAD OPERATOR
const nuevoArreglo = [...numeros, 1540];
console.table(nuevoArreglo);

let estaciones = ["Verano"];
estaciones.unshift("Primavera");
estaciones.push("Otoño", "Invierno");
console.table(estaciones);

//Ejercicio carrito
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

let resultado;
resultado = meses.includes("Mayo");
console.log("USO DE INCLUDES PARA BUSCAR EN ARRAY PLANO", resultado);
//el metodo includes se puede utilizar solo por array plano como el de meses 

//alternativa por arrays no planos (objetos)
resultado=carrito.some(function(producto) {
    return producto.nombre==="Ipad" //TRES IGUALES PORQUE SIGNIFICA EXATAMENTE IGUAL
});
console.log("RESULTADI DE FUNCION SOME IDEAL", resultado);

// some(function(aqui va argumento){aqui va cuerpo})
 // COMO SABER EL TOTAL DEL CARRITO. REDUCE
resultado=carrito.reduce(function(total,producto) { // PARA ITERAR
   // TOTAL, PRODUCTO SON LOS PARAMETROS DE LA FUNCION
    return total + producto.precio 
},0);  // EL VALOR DONDE INICIA

console.log("USO DE REDUCE", resultado);


// FILTER, PARA FILTRAR
// // EL MÁS UTILIZADO

resultado = carrito.filter(function (producto) {
    return producto.precio > 400
 });
console.log("USO DE FILTER", resultado);

// // === IGUALES
// // !== DIFERENTES
// // < MENOR QUE
// // <= MENOR IGUAL
// // > MAYOR QUE
// // >= MAYOR IGUAL