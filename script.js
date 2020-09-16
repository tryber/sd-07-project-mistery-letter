function criarCarta() {
  const cartaTexto = document.querySelector('#carta-texto');
  const cartaGerada = document.querySelector('#carta-gerada');
  const  words = cartaTexto.value.split(' ');

  cartaGerada.innerHTML = '';
  
  if (words.join('') === '') {
    words.forEach((word) => {
      const span = document.createElement('span');

      span.innerText = word;
      cartaGerada.appendChild(span);
    });
  } else {
    cartaGerada.innerText = 'Por favor, digite o conteúdo da carta';
  }
}
window.onload = function () {
  const criarCartaButton = document.querySelector('#criar-carta');

  criarCartaButton.addEventListener('click', criarCarta);
};
