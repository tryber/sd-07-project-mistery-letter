function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}
function randomClasses() {
  const classes = [];
  classes.push(randomItem(['newspaper', 'magazine1', 'magazine2']));
  classes.push(randomItem(['medium', 'big', 'reallybig']));
  classes.push(randomItem(['rotateleft', 'rotateright']));
  classes.push(randomItem(['skewleft', 'skewright']));
  return classes.join(' ');
}
function criarCarta() {
  const cartaTexto = document.querySelector('#carta-texto');
  const cartaGerada = document.querySelector('#carta-gerada');
  const words = cartaTexto.value.replace(/\t/g, ' ').split(' ');
  const letterCounter = document.querySelector('#carta-contador');

  letterCounter.innerText = `${words.length}`;

  cartaGerada.innerHTML = '';

  if (words.join('') !== '') {
    words.forEach((word) => {
      const span = document.createElement('span');
      span.className = randomClasses();
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
