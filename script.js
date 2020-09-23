function rnd(N) {
  return (Math.floor(parseInt(Math.random() * N, 10)));
}

const inpLetterText = document.getElementById('carta-texto');
const butCreateLetter = document.getElementById('criar-carta');
const pEmptyInput = document.getElementById('input-vazio');
const pAccountantLetter = document.getElementById('carta-contador');
// let pNumberOfWords = document.getElementById('numero-palavras');
const pGeneratedLetter = document.getElementById('carta-gerada');


const arrStyle = ['newspaper', 'magazine1', 'magazine2']; // (Grupo estilo)
const arrSize = ['medium', 'big', 'reallybig']; // (Grupo tamanho)
const arrRotation = ['rotateleft', 'rotateright']; // (Grupo rotação)
const arrIncline = ['skewleft', 'skewright']; // (Grupo inclinação)

function addClass(Obj) {
  Obj.classList.add(arrStyle[rnd(arrStyle.length)]);
  Obj.classList.add(arrSize[rnd(arrSize.length)]);
  Obj.classList.add(arrRotation[rnd(arrRotation.length)]);
  Obj.classList.add(arrIncline[rnd(arrIncline.length)]);
}

pGeneratedLetter.addEventListener('click', function (event) {
  event.target.className = ' ';
  if (event.target.tagName === 'SPAN') {
    addClass(event.target);
  }
});

butCreateLetter.addEventListener('click', function () {
  if (inpLetterText.value.trim() !== '') {
    // Quebra a frase em palavras
    // Dividindo a regex e replace em partes:
    // \s - qualquer espaço em branco
    // {2,} - em quantidade de dois ou mais
    // g - apanhar todas as ocorrências, não só a primeira
    // depois o replace faz a subsituição desses grupos de espaços pelo que fôr passado
    // no segundo parâmetro. Neste caso um espaço simples , ' ');
    // O trim tira os espaços no inicio e no final da string
    const phrase = inpLetterText.value.trim().replace(/\s{2,}/g, ' ');
    const words = phrase.split(' ');

    // Coloca na tela o número de palavras
    pAccountantLetter.innerText = words.length;
    // pAccountantLetter.firstElementChild.innerText = 'Sua carta possui '
    // pNumberOfWords.innerText = words.length;
    // if (words.length === 1) {
    //   pAccountantLetter.lastElementChild.innerText = ' palavra';
    // } else {
    //   pAccountantLetter.lastElementChild.innerText = ' palavras';
    // }

    // Limpa a frase ja escrita
    pGeneratedLetter.innerHTML = '';

    // Imprime o novo texto
    for (let i = 0; i < words.length; i += 1) {
      const span = document.createElement('span');
      addClass(span);
      span.innerText = words[i];
      pGeneratedLetter.appendChild(span);
    }
  } else {
    // pEmptyInput.innerText = 'Por favor, digite o conteúdo da carta.';
    pGeneratedLetter.innerText = 'Por favor, digite o conteúdo da carta.';
  }
});

inpLetterText.addEventListener('input', function () {
  if (inpLetterText.value.trim() === '') {
    // pEmptyInput.innerText = 'Por favor, digite o conteúdo da carta.';
    pGeneratedLetter.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    pEmptyInput.innerText = '';
  }
  // Limpa da tela o número de palavras
  // pAccountantLetter.firstElementChild.innerText = '';
  // pNumberOfWords.innerText = '';
  // pAccountantLetter.lastElementChild.innerText = '';
  // pAccountantLetter.innerText = '';
});
