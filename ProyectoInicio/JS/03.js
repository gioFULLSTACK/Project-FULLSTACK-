"use strict"; //para que corra javascript de modo estricto. si hay algun error que me muestre el error por pantalla
//EJERCICIO OBJETOS
const producto= {
    nombreProducto:"Reloj", //dentro de las {} en lugar de = se usa : y todo minusculo
    precio:200,
    disponibilidad:false
                };

console.log("Producto", typeof producto);
console.log("Producto", producto);
console.table(producto); //no se puede poner un comentario o nombre entre comillas y dentro de () porque si no son table y texto y no aparece

producto.precio //para llamar a una proprierdad dentro de una variable.
console.log(producto.precio,typeof producto.precio)
console.log(`${producto.precio}, ${typeof producto.precio}`  )
console.log(producto["precio"],typeof producto ["precio"]) //otra forma de hacerlo menos utilizada

//modificar
producto.precio= 500; //llamando la propriedad con la sintaxis de punto y actualizamos su valor 
console.table(producto);
//añadir si llamas una categoria que no existe te la crea
producto.categoria="Relojes";
console.table(producto);
//borrar
delete producto.disponibilidad;
console.table(producto);

//destructuring
const precioProducto= producto.precio;
console.log("Destructuring de precio a producto:", precioProducto);

//ejercico destructuring
//forma n.1
// const nombreProducto =producto.nombreProducto
// console.log("crear variable desde propriedad n.2:", nombreProducto);
//forma n.2
let {nombreProducto, precio, categoria}=producto;
console.log(categoria);

let playa={
    nombre:"Grotta della Poesia",
    ubicacion:"Torre dell'Orso",
    recomendable:true,
    temperaturaAgua:48,
};
console.table(playa);
 
//ejercicio para hacer de dos formas diferentes el "crear objeto playa"
const {nombre, ubicacion, recomendable, temperaturaAgua}= playa
//sintaxis de punto
console.log(`Ubicacion Playa: ${playa.ubicacion} Nombre Playa: ${playa.nombre} Recomendacion Playa: ${playa.recomendable} Temperatura Playa: ${playa.temperaturaAgua}`);
//varibale
// let {nombre, ubicacion, recomendable, temperaturaAgua}= playa
console.log(`Ubicacion Playa: ${ubicacion} Nombre Playa: ${nombre} Recomendacion Playa: ${recomendable} Temperatura Playa: ${temperaturaAgua}`);
//modificar propriedad
playa.temperaturaAgua= 38;
console.table(playa);

//intento de añadir propriedad con Object.freeze puesto

//para evitar que se puedan modificar Object.freeze
Object.freeze(playa);
//intento añadir propriedad nueva despues de freeze
    // playa.sombrilla=true;
    // console.log(playa);
//como saber si un objeto es frozen o no
console.log("ESTA CONGELADO?", Object.isFrozen(playa));

//OBJECT.SEAL
Object.seal(playa)

//Spread operator
//los tres puntos :The spread (...) syntax allows an iterable, 
//such as an array or string, to be expanded in places where zero or more 
//arguments (for function calls) or elements (for array literals) are expected.
// In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.
let nuevoProducto={...producto,...playa};
console.log("Nuevo obejto con spread operator:",nuevoProducto);

//ejercicio medidas
let nuevoObjeto={
    alto:160,
    ancho:50,
    profundo:25,
};

nuevoObjeto.peso= 60;
nuevoObjeto.alto=165;
delete nuevoObjeto.profundo;

console.table(nuevoObjeto);

