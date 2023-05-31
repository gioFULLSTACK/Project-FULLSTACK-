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


//mostrar propriedad --> precio del carrito en while, for y do while
//FOR
for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i]);
    console.log("Ej. con FOR", carrito[i].precio);
}
//WHILE
let c = 0;
while (c < carrito.length) {
    console.log("Ej. con WHILE", carrito[c].precio);
    c++;
}

//DO WHILE
let c1 = 0;

do {
    console.log("Ej. con DO WHILE", carrito[c1].precio);
    c1++;
} while (c1 < carrito.length);

//CREAR UNA FUNCION QUE ME DIGA SI UN NUMERO ES POSITIVO, NEGATIVO, CERO
// let ej
// for (let ej=0; ej<=100; ej++){
//     if(Math.sign(ej)){
//         console.log(ej)
//     }
//     if (Math.sign(ej)){
//         console.log(ej)
//     }
//     if (ej=0){
//         console.log(ej)
//     }
// }



function verificarNumero(numero) {
    if (numero > 0) {
        return "El número es positivo.";
    } else if (numero < 0) {
        return "El número es negativo.";
    } else {
        return "El número es cero.";
    }
}

// Ejemplos de uso:
console.log(verificarNumero(5));     // El número es positivo.
console.log(verificarNumero(-3));    // El número es negativo.
console.log(verificarNumero(0));     // El número es cero.


//CREAR UNA FUNCION QUE YO LE PASE UN MES Y ME DIGA CUANTOS DIAS TIENE EL MES

//METODO 1
function obtenerDiasDelMes(mes) {
    mes = mes.toLowerCase();

    if (mes === "enero" || mes === "marzo" || mes === "mayo" || mes === "julio" || mes === "agosto" || mes === "octubre" || mes === "diciembre") {
        return 31;
    } else if (mes === "febrero") {
        return 28;
    } else if (mes === "abril" || mes === "junio" || mes === "septiembre" || mes === "noviembre") {
        return 30;
    } else {
        return "Mes inválido";
    }
}

console.log(obtenerDiasDelMes("febrero"));   // 28
console.log(obtenerDiasDelMes("enero"));     // 31
console.log(obtenerDiasDelMes("noviembre")); // 30
console.log(obtenerDiasDelMes("abcd"));      // Mes inválido

//METODO 2
function getMonth(month) {
    switch (month) {
        case "gennaio":
        case "marzo":
        case "maggio":
        case "luglio":
        case "agosto":
        case "ottobre":
        case "dicembre":
            return 31;
        case "febbraio":
            return 28;
        case "aprile":
        case "giugno":
        case "settembre":
        case "novembre":
            return 30;
        default:
            return "mes invalido";
    }
}

console.log(getMonth("febbraio"));


//nov apri giugn sette 30
//feb 28
//gen marz maggio luglio agosto ottobre dicembre31


//FUNCION QUE ME CUENTE LAS VOCALES DE UN STRING DADO
let contadorVocales = 0;
function contarVocales(texto) {
    for (let i = 0; i < texto.length; i++) {
        if (texto.charAt(i) === `a` || texto.charAt(i) === `e` ||
            texto.charAt(i) === `i` || texto.charAt(i) === `o` ||
            texto.charAt(i) === `u`) {
            contadorVocales++;
        }

    }
}
contarVocales("perejil");
console.log(contadorVocales);


//FUNCION QUE DADA UNA CADENA ME TIENE QUE DEVOLVER LA FUNCION INVERSA
let stringInvertido=""
function reversarCadena(cadena) {
    for (i = cadena.length - 1; i >= 0; i--) {
        stringInvertido+= cadena.charAt(i); //-->este es otro actualizador
        //al que le estamos diciendo que i+= anche scritto come i++
        
}
}
reversarCadena("juan");
console.log(stringInvertido);