const botaoGerar = document.getElementById('criar-carta');
const paragrafo = document.getElementById('carta-gerada');
const qtdPalavras = document.getElementById('carta-contador');
const inputFrase = document.getElementById('carta-texto');
const groupStyle = ['newspaper', 'magazine1', 'magazine2'];
const groupSize = ['medium', 'big', 'reallybig'];
const groupRotation = ['rotateleft', 'rotateright'];
const groupSlop = ['skewleft', 'skewright'];

const criaEstilo = () => {
  const estiloUnico = [];
  estiloUnico.push(groupStyle[parseInt(((Math.random()) * 3), 0)]);
  estiloUnico.push(groupSize[parseInt(((Math.random()) * 3), 0)]);
  estiloUnico.push(groupRotation[parseInt(((Math.random()) * 2), 0)]);
  estiloUnico.push(groupSlop[parseInt(((Math.random()) * 2), 0)]);
  return estiloUnico;
};

function addEventClickOnSpan() {
  document.querySelectorAll('span').forEach((item) => {
    item.addEventListener('click', (event) => {
      const palavra = event.target;
      const classesEstilos = criaEstilo();
      palavra.classList = `${classesEstilos[0]} ${classesEstilos[1]} ${classesEstilos[2]} ${classesEstilos[3]}`;
    });
  });
}

const montaCarta = (array) => {
  if (array[0].length > 0) {
    for (let index = 0; index < array.length; index += 1) {
      const adiconaFilho = document.createElement('span');
      adiconaFilho.innerText = `${array[index]}`;
      const classesEstilos = criaEstilo();
      adiconaFilho.classList = `${classesEstilos[0]} ${classesEstilos[1]} ${classesEstilos[2]} ${classesEstilos[3]}`;
      paragrafo.appendChild(adiconaFilho);
      const adiconaEspaco = document.createElement('b');
      adiconaEspaco.innerText = ' ';
      paragrafo.appendChild(adiconaEspaco);
    }
  } else {
    paragrafo.innerText = 'Por favor, digite o conteúdo da carta.';
  }
  addEventClickOnSpan();
  qtdPalavras.innerText = document.querySelectorAll('span').length;
};

botaoGerar.addEventListener('click', function () {
  paragrafo.innerHTML = '';
  const frase = inputFrase.value;
  const arrayPalavras = frase.split(' ');
  montaCarta(arrayPalavras);
});
