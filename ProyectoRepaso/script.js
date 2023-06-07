//crear elemento, selecionar elemetno referencia, añadir el elemento creado
//qui vogliamo che difianco a "PAgina de: appaia il testo che vogliamo
let titulo = document.createElement("h1");
//aqui van las informaciones del elemetno que hemos creado
// titulo.textContent=""
//  querySelector, querySelectAll,

let selectorNombre = document.querySelector(".padreh1");
selectorNombre.appendChild(titulo);

let selectorInput =document.querySelector(".tuNombre");


selectorInput.addEventListener ("input", function(evento){
    titulo.textContent=evento.target.value;
})

// let button = document.createElement("button");
// let buttonInput = document.querySelector(".nombre")
// button.textContent = "Enviar";
// buttonInput.appendChild(button);

// button.addEventListener("click", function () {
//     let inputValue = input.value;

//     let result = document.createElement("p");
//     result.textContent = inputValue;

//     parentElement.appendChild(result);
// });
