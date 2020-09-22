const criarCarta = document.querySelector('#criar-carta');
const cartaTexto = document.querySelector('#carta-texto');
const cartaGerada = document.querySelector('#carta-gerada');
const contador = document.querySelector('#carta-contador');

const est = ['newspaper', 'magazine1', 'magazine2'];
const tam = ['medium', 'big', 'reallybig'];
const rot = ['rotateleft', 'rotateright'];
const inc = ['skewleft', 'skewright'];

function geraClasses() {
  const estilos = est[Math.round(Math.random() * (est.length - 1))];
  const tamanhos = tam[Math.round(Math.random() * (tam.length - 1))];
  const rotacao = rot[Math.round(Math.random() * (rot.length - 1))];
  const inclina = inc[Math.round(Math.random() * (inc.length - 1))];
  const classes = [estilos, tamanhos, rotacao, inclina];
  const classesRandom = classes[Math.round(Math.random() * (classes.length - 1))];
  return classesRandom;
}

criarCarta.addEventListener('click', () => {
  if (cartaTexto.value === '' || !cartaTexto.value.trim()) {
    cartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    let count = 0;
    cartaGerada.innerText = '';
    const textoCarta = cartaTexto.value.trim().split(' ');
    for (let index = 0; index < textoCarta.length; index += 1) {
      const spans = document.createElement('span');
      spans.style.display = 'inline-block';
      spans.classList.add(geraClasses());
      spans.classList.add(geraClasses());
      spans.classList.add(geraClasses());
      spans.classList.add(geraClasses());
      if (textoCarta[index].trim()) {
        spans.innerText = textoCarta[index];
        cartaGerada.appendChild(spans);
        count += 1;
        contador.innerText = `${count}`;
      }
    }
  }
});

cartaGerada.addEventListener('click', (event) => {
  event.target.className = geraClasses();
});
