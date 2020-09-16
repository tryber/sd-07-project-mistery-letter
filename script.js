function criarCarta() {
  const cartaTexto = document.querySelector('#carta-texto') ;
  const cartaGerada = document.querySelector('#carta-gerada');
  let words = cartaTexto.value.split(' ');
  words.forEach(word => {
    const span = document.createElement('span');

    span.innerText = word;
    cartaGerada.appendChild(span);
  });
};
window.onload = function () {
  const criarCartaButton = document.querySelector('#criar-carta');

  criarCartaButton.addEventListener('click', criarCarta);
};
