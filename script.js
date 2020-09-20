const criarCarta = document.querySelector('#criar-carta');
const cartaTexto = document.querySelector("#carta-texto");

criarCarta.addEventListener('click', () => {
  if (cartaTexto.value === '') {
    alert('Por favor, digite o conteúdo da carta.');
  }    
})