
// ABRIR Y CERRAR CYBERPUNK
let modal1 = document.getElementById("popupCyberpunk");
let btn1 = document.getElementById("abrirCyberpunk");

btn1.addEventListener("click", function() {
  modal1.style.display = "block";
});

window.addEventListener("click", function(event) {
  if (event.target === modal1) {
    modal1.style.display = "none";
  }
});


// ABRIR Y CERRAR LAST OF US START
let modal2 = document.getElementById("popupTLOU");
let btn2 = document.getElementById("abrirTLOU");

btn2.addEventListener("click", function() {
  modal2.style.display = "block";
});

window.addEventListener("click", function(event) {
  if (event.target === modal2) {
    modal2.style.display = "none";
  }
});



// ABRIR Y CERRAR STREET FIGHTER V
let modal3 = document.getElementById("popupStreetF");
let btn3 = document.getElementById("abrirStreetF");

btn3.addEventListener("click", function() {
  modal3.style.display = "block";
});

window.addEventListener("click", function(event) {
  if (event.target === modal3) {
    modal3.style.display = "none";
  }
});



// ABRIR Y CERRAR SKYRIM
let modal4 = document.getElementById("popupSkyrim");
let btn4 = document.getElementById("abrirSkyrim");

btn4.addEventListener("click", function() {
  modal4.style.display = "block";
});

window.addEventListener("click", function(event) {
  if (event.target === modal4) {
    modal4.style.display = "none";
  }
});

