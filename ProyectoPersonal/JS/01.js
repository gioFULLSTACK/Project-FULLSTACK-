
// ABRIR Y CERRAR CYBERPUNK
let modal1 = document.getElementById("popupCyberpunk");
let btn1 = document.getElementById("abrirCyberpunk");

btn1.addEventListener("click", function () {
  modal1.style.display = "block";
  console.log(" se abre")
});

window.addEventListener("click", function (event) {
  if (event.target === modal1) {
    modal1.style.display = "none";
  }
});


// ABRIR Y CERRAR LAST OF US START
let modal2 = document.getElementById("popupTLOU");
let btn2 = document.getElementById("abrirTLOU");

btn2.addEventListener("click", function () {
  modal2.style.display = "block";
});

window.addEventListener("click", function (event) {
  if (event.target === modal2) {
    modal2.style.display = "none";
  }
});



// ABRIR Y CERRAR STREET FIGHTER V
let modal3 = document.getElementById("popupStreetF");
let btn3 = document.getElementById("abrirStreetF");

btn3.addEventListener("click", function () {
  modal3.style.display = "block";
});

window.addEventListener("click", function (event) {
  if (event.target === modal3) {
    modal3.style.display = "none";
  }
});



// ABRIR Y CERRAR SKYRIM
let modal4 = document.getElementById("popupSkyrim");
let btn4 = document.getElementById("abrirSkyrim");

btn4.addEventListener("click", function () {
  modal4.style.display = "block";
});

window.addEventListener("click", function (event) {
  if (event.target === modal4) {
    modal4.style.display = "none";
  }
});


// ATTEMPT 2 AT LOGOS BRIGHTNESS
// Get all the price paragraphs
// const prices = document.querySelectorAll('.popup .prices p');

// // Get all the logo images
// const logos = document.querySelectorAll('.prices a img');

// // Loop through each price paragraph
// prices.forEach((prices, index) => {
//   const logo = logos[index];

//   // Extract the price text from the paragraph
//   // const pricesText = prices.textContent.trim();

//   // Check if price text exists
//   if (pricesText !== '/' && pricesText >= 1){
//     logo.classList.remove('icon-dim');
//     logo.classList.add('icon-bright');
//   } else {
//     logo.classList.remove('icon-bright');
//     logo.classList.add('icon-dim');
//   }
// });
const links = document.querySelectorAll('.prices a');

// Recorrer todos los enlaces
links.forEach(link => {
  // Obtener el texto del enlace
  const text = link.textContent.trim();

  // Verificar si el texto es un número
  if (!isNaN(text)) {
    // Cambiar la opacidad del fondo del enlace para activarlo (puedes ajustar el valor de la opacidad según tus necesidades)
    link.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  } else {
    link.style.backgroundColor = 'transparent';
  }
});