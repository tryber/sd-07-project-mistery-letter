const criarCarta = document.querySelector('#criar-carta');
const cartaTexto = document.querySelector('#carta-texto');
const cartaGerada = document.querySelector('#carta-gerada');

criarCarta.addEventListener('click', () => {
    console.log(cartaTexto.value.trim());
  if (cartaTexto.value === '' || !cartaTexto.value.trim()) {
    alert('Por favor, digite o conteúdo da carta.');
  } else {
  
  }    
});
