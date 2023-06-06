
// CARTA 1
let modal1 = document.getElementById("popup1");
let btn1 = document.getElementById("openPopup1");
let modalclose = document.getElementById("fondo1");
let boton1der1 = document.getElementById("botonder");
let boton2izq1 = document.getElementById("botonizq");

btn1.addEventListener("click", function() {
  modal1.style.display = "block";
});

window.addEventListener("click", function(event) {
  if (event.target === modal1) {
    modal1.style.display = "none";
  }
});
window.addEventListener("click", function(event) {
  if (event.target === modalclose) {
    modal1.style.display = "none";
  }
});

boton1der1.addEventListener("click", function() {
  modal1.style.display = "none";
  modal2.style.display = "block";
});

boton2izq1.addEventListener("click", function() {
  modal1.style.display = "none";
  modal5.style.display = "block";
});


// CARTA2
let modal2 = document.getElementById("popup2");
let btn2 = document.getElementById("openModal2");
let modalclose2 = document.getElementById("fondo2");
let boton1der2 = document.getElementById("botonder2");
let boton2izq2 = document.getElementById("botonizq2");

btn2.addEventListener("click", function() {
  modal2.style.display = "block";
});

window.addEventListener("click", function(event) {
  if (event.target === modal2) {
    modal2.style.display = "none";
  }
});
window.addEventListener("click", function(event) {
  if (event.target === modalclose2) {
    modal2.style.display = "none";
  }
});

boton1der2.addEventListener("click", function() {
  modal2.style.display = "none";
  modal3.style.display = "block";
});

boton2izq2.addEventListener("click", function() {
  modal2.style.display = "none";
  modal1.style.display = "block";
});


// CARTA3
let modal3 = document.getElementById("popup3");
let btn3 = document.getElementById("openModal3");
let modalclose3 = document.getElementById("fondo3");
let boton1der3 = document.getElementById("botonder3");
let boton2izq3 = document.getElementById("botonizq3");

btn3.addEventListener("click", function() {
  modal3.style.display = "block";
});

window.addEventListener("click", function(event) {
  if (event.target === modal3) {
    modal3.style.display = "none";
  }
});

window.addEventListener("click", function(event) {
  if (event.target === modalclose3) {
    modal3.style.display = "none";
  }
});

boton1der3.addEventListener("click", function() {
  modal3.style.display = "none";
  modal4.style.display = "block";
});

boton2izq3.addEventListener("click", function() {
  modal3.style.display = "none";
  modal2.style.display = "block";
});




// CARTA 6
let modal6 = document.getElementById("popup6");
let btn6 = document.getElementById("openPopup6");
let modalclose6 = document.getElementById("fondo6");

btn6.addEventListener("click", function() {
  modal6.style.display = "block";
});

window.addEventListener("click", function(event) {
  if (event.target === modal6) {
    modal6.style.display = "none";
  }
});
window.addEventListener("click", function(event) {
  if (event.target === modalclose6) {
    modal6.style.display = "none";
  }
});


// CARTA 7
let modal7 = document.getElementById("popup7");
let btn7 = document.getElementById("openPopup7");

btn7.addEventListener("click", function() {
  modal7.style.display = "block";
});

window.addEventListener("click", function(event) {
  if (event.target === modal7) {
    modal7.style.display = "none";
  }
});





