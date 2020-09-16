function randomClasses() {
  let classes = [];
  let randomNumber = Math.random();
  if (randomNumber < 0.33) {
    classes.push('newspaper');
  } else if (randomNumber < 0.66) {
    classes.push('magazine1');
  } else {
    classes.push('magazine2');
  }
  randomNumber = Math.random();
  if (randomNumber < 0.33) {
    classes.push('medium');
  } else if (randomNumber < 0.66) {
    classes.push('big');
  } else {
    classes.push('reallybig');
  }
  randomNumber = Math.random();
  if (randomNumber < 0.33) {
    classes.push('rotateleft');
  } else if (randomNumber < 0.66) {
    classes.push('rotateright');
  }
  randomNumber = Math.random();
  if (randomNumber < 0.33) {
    classes.push('skewleft');
  } else if (randomNumber < 0.66) {
    classes.push('skewright');
  }
  return classes.join(' ');
}
function criarCarta() {
  const cartaTexto = document.querySelector('#carta-texto');
  const cartaGerada = document.querySelector('#carta-gerada');
  const words = cartaTexto.value.split(' ');

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
