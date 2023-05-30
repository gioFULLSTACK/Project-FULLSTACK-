//FUNCIONES EN JAVASCRIPT
function sumar (n1, n2){
    //cuerpo funcion
    console.log(n1+n2)
};
sumar(3,7);
sumar(20,251);


//expresion de la funcion
const sumar2=function(n3,n4){
    console.log(n3+n4);
}

sumar2(3,9);

//IIFE sintaxis un poco diferente
(function(){
    console.log("Esto es una funcion")
})(); //--> ese () solito es autollamada


//javascript se ejecuta en dos vueltas
//PRIMERA ETAPA, LEE LA CREACION DE FUNCIONES. SE REGISTRAN LAS FUNCIONES. ETAPA DE CREACION
//SEGUNDA ETAPA, LEE LA LLAMADA. SE REGISTRAN LAS LLAMADAS, ETAPA DE EJECUCIÓN.
    
//LA EXPRESIÓN DE LA FUNCIÓN LA DETECTA COMO UNA VARIABLE MÁS QUE COMO UNA FUNCIÓN
//POR ESO SI LLAMAMOS A LA FUNCIÓN ANTES DE LA CREACIÓN NO FUNCIONA


//DIFERENCIA ENTRE METODO Y FUNCION
//ACABAN SIENDO PRACTICAMENTE LO MISMO

//ES MAS EL CONTEXTO EN EL QUE SE UTILIZAN

//ejercicio restar
function restar(n1,n2,n3,n4){
    console.log("Ej Restar:", n1-n2-n3-n4)
    console.log(`restar: n1:${n1} n2:${n2} n3:${n3} n3:${n4} ye el resultado es ${n1-n2-n3-n4}`)
};
restar (4,6,7,8);

//ejercicio 
console.log("Diferencia entre metodos y funciones")
const numero1=20;
const numero2="20";

console.log(parseInt(numero2)); //parseInt es una FUNCION
console.log(numero1.toString()); //toString() es un METODO

//eje color
function color(color){
    console.log(`El color elejido es: ${color}`)
};
color("Red");
color("Amarillo");

//eje descuent

function blackFriday(importe,descuento){
    console.log(`Descuento total:${descuento*importe/100}€`)
    console.log(`Precio total:${importe-descuento}€`)
};
blackFriday(100,20);

//eje ecuacion segudno grado

function ecuacionSegundo(A,B,C){
    console.log("Resultado operacion segundo Grado +:",(-B + Math.sqrt(B*B - 4*A*C))/(2*A));
    console.log("Resultado operacion segundo Grado -:",(-B - Math.sqrt(B*B - 4*A*C))/(2*A));
};

ecuacionSegundo(2,2,0);
ecuacionSegundo(2,10);

//
function tweet(texto,palabra){
    console.log("longitud del texto tiene:", texto.includes(palabra))
};

tweet("this is the lenght of the text", "text");

//ejercicio añadir elementos a un array
// function ejeArray(array,elemento){
//     console.log("ARRAY:", array.push(elemento))
// };

// ejeArray("jose,manuel,pedro"); 


//ejercico capitalize
// function ejercicio(texto){
//     return(texto.toUpperCase);
   
// }
// let ejercicio= toUpperCase("this is a text");
// console.log(ejercicio);


function ejercicioMay(texto) {
    return texto.toUpperCase();
  }
  
  let resultado = ejercicioMay("this is a text");
  console.log(resultado);


  //concatenar dos arreglos dados
  //funcion que reciba 2 arreglos y como resultado 
  //un array nuevo concatenadondo los 2 nteriores
function dosArreglos(array1,array2){
    return[...array1,...array2];
}
array1=[1,2,3,4,5];
array2= ["lunes","martes","miercoles"];
let resultadoConcatenado= dosArreglos (array1,array2);
console.log(resultadoConcatenado);

//obtener el ultimo elemento de un array
// function ultimo (...meses){
//     return[...meses.length(),4]
// };

// console.log(ultimo);
// meses= ["Jan","Feb","Mar","April","May"]

function ultimo(...meses) {
    return meses[meses.length -1];
  }
  
  const meses = ["Jan", "Feb", "Mar", "April", "May"];
  const ultimo_mes = ultimo(...meses);
  console.log(ultimo_mes);

//Generar un numero aleatorio entre dos numerso dados n1<n2


function generarNumeroAleatorio(n1, n2) {
    return Math.floor(Math.random() * (n2 - n1 + 1)) + n1;
  }
  
  const numeroAleatorio = generarNumeroAleatorio(1, 10);
  console.log("Resultado dados:",numeroAleatorio);


function aleatorio (a,b){
    let random=Math.random()*(b-a+1)+a
    console.log(Math.round(random));  
}
aleatorio(1,5);

//comprobar si un elemento existe en un array formato texto
function ultimo(mesecitos, palabra){
    return mesecitos.includes(palabra);

};
let findMonth= ultimo(meses, "May");
    console.log (findMonth);


//mostrar el minimo de tres numeros dados
function numeroMenor (n1,n2,n3){
    return Math.min (n1,n2,n3);
}
var numeroMenor = numeroMenor(5,10,9);
console.log(numeroMenor);

//MOSTRAR EL MAXIMO DE 4 NUMEROS DADO
function numeroMayor (n1,n2,n3,n4){
    return Math.max (n1,n2,n3,n4);
}
var numeroMayor = numeroMayor(5,10,9,15);
console.log(numeroMayor);

//convertidor de horas
function cambiarHora (hora){
    return hora-1;

};
let resultadoHorario=cambiarHora(8);
console.log(resultadoHorario);

//convertir grados fahrenheit a celsius

function fahrenheit (grados){
    return ((grados-32)*5/9);

};
let temperature = fahrenheit(100);
console.log(temperature);

//convertir de celsius a fahrenheit

function celsius (grado){
    return((grado*9/5)+32);
}
let temperature1 = celsius(38);
console.log (temperature1);

//calcular el perimetro de un triangulo de lados A B C
function perimetro (a,b,c){
    return(a+b+b);
}
let lados= perimetro(2,3,4);
console.log(lados);

//calcular area de un triangulo dadas la base y la altura
// function area(altura,base){
//     return((altura*base)/2);
// };
// let calculoArea=area(4,6)
// console.log(calculoArea);

//calcular el area de un circulo dado el radio
function circulo(radio){
    return((radio*radio)*Math.PI);
};
let areaCirculo=circulo(7)
console.log(areaCirculo);


//CREAR UNA FUNCION QUE ME CALCULE LA POTENCIA DADA DE UN NUMERO
function potenza(base,potencia){
    return (Math.pow(base, potencia));
};
let resultadoFinal = potenza(2,10);
console.log(resultadoFinal);

//Redondear un numero al entero superior argumento un decimal
function redondear (decimal){
    return(Math.ceil(decimal));
};
let resRed=redondear(3.59);
console.log(resRed);


//ELLIMINAR ESPACIOS EN BLANCO AL INICIO Y AL FINAL DE UN STRING  : .trim()
//trim() te quita los espacios al principio y al final no los espacios en el medio
// let espacio =" hola "
// console.log(espacio.trim());

function espacio(p1){
    return p1.trim();
}
let resultadoEspacio= espacio (" hola ")
console.log(resultadoEspacio)

//REEMPLAZAR UNA PALABRA DE UN STRING POR OTRA DADA
//3 ARGUMETNOS DE ENTRADA, CADENA, PALABRA VIEJA, PALABRA NUEVA
function reemplazarPalabra(frase,palabrabusca,palabrareemplaza){
    return frase.replace(palabrabusca,palabrareemplaza);
}
let resultadoReemplazar=reemplazarPalabra(
    "frase que contiene perro","perro", "gatto");
    console.log(resultadoReemplazar);

//COMPROBAR SI UN USUARIO ES MAYOR DE 18
function edad(usuario,limite){
    return usuario>=limite;
}    
let resultadoEdad= edad(19,18);
console.log(resultadoEdad);

//OBTENER LOS PRIMEROs N CARACTER DE UN STRING
// 2 ARGUMENTOS UN STRING Y EL NUMERO DE CARACTERES
function firstn(string,numero){
    return string.slice(0,numero);
}
let result= firstn("Murcielago",4);
console.log(result);

////OBTENER LOS Ultimos N CARACTER DE UN STRING
// 2 ARGUMENTOS UN STRING Y EL NUMERO DE CARACTERES  
//para que empieze desde el final de la frase a contar pones -n dentro dela
function lastn(s,n){
    return s.slice(-n);
}
let resultLast=lastn("Murcielago",6)
console.log(resultLast);

//COMPROBAR SI UN NUMERO ES PAR. 
function even(num){
    return num%2===0;
};
let evenNum= even(8548);
console.log(evenNum);

////COMPROBAR SI UN NUMERO ES IMPAR
function odd(numb){
    return numb%2!==0 ;
};
let oddNum= odd(15);
console.log(oddNum);

//CONCATENAR 2 STRING Y PONERLOS TODO EN MAYUSCULAS
//2 ARGUMENTOSM STRING1 STRING2
function stringM (string1, string2){
    return (string1+string2).toUpperCase()
}
let nuevoString=stringM("gato","perro");
console.log(nuevoString);


//COMPROBAR SI VAR ES TIPO BOOLEANA O NO
function boolean(presencia){
    return typeof presencia === `boolean`;
}
let isItBoolean = boolean(true);
console.log (isItBoolean);


//FUNCION QUE ME PASE MINUTOS A SEGUNDOS
function time (minutes,seconds){
    return ((minutes)*seconds);
}
let timeChange=time (10,60);
console.log(timeChange);


//METODOS DE PROPRIEDAD

const reproductor={
    reproducir:function(nc){
        console.log(`Reproduccion cancion:${nc}`)
    },
    pausar:function(){ //this function is empty cuz its gonna pause whatever it doesnt matter which argument
        console.log(`Pausando cancion:${nc}`)
    },
    crearPlaylist:function(nc){                   
        console.log(`Playlist nueva:${nc}`)
    }
};
reproductor.reproducir(16);
//para añadir un nuevo objeto fuera del cuerpo repito todo pero creando la categoria primero quindi reproductor.borrarCancion e poi tutto uguale
reproductor.borrarCancion= function(nc){
console.log(`Borrar Cancion:${nc}`)}

reproductor.borrarCancion(16);


//EXPRESION DE LA FUNCION




