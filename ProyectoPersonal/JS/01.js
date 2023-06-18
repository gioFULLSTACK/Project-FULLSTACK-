



// ATTEMPT 2 AT LOGOS BRIGHTNESS
// Get all the price paragraphs
const prices = document.querySelectorAll('.popup .prices p');

// Get all the logo images
const logos = document.querySelectorAll('.prices a img');

// Loop through each price paragraph
prices.forEach((prices, index) => {
  const logo = logos[index];

  // Extract the price text from the paragraph
  // const pricesText = prices.textContent.trim();

  // Check if price text exists
  if (pricesText !== '/' && pricesText >= 1){
    logo.classList.remove('icon-dim');
    logo.classList.add('icon-bright');
  } else {
    logo.classList.remove('icon-bright');
    logo.classList.add('icon-dim');
  }
});
/* const links = document.querySelectorAll('.prices a');

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
}); */




