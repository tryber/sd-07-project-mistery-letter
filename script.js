function rnd(N) {
  return (Math.floor(parseInt(Math.random() * N, 10)));
}

let inpLetterText = document.getElementById('carta-texto');
let butCreateLetter = document.getElementById('criar-carta');
let pEmptyInput = document.getElementById('input-vazio');
let pAccountantLetter = document.getElementById('carta-contador');
let pNumberOfWords = document.getElementById('numero-palavras');
let pGeneratedLetter = document.getElementById('carta-gerada');


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
  if (event.target.tagName == 'SPAN') {
    addClass(event.target);

    // event.target.classList.add(arrStyle[rnd(arrStyle.length)]);
    // event.target.classList.add(arrSize[rnd(arrSize.length)]);
    // event.target.classList.add(arrRotation[rnd(arrRotation.length)]);
    // event.target.classList.add(arrIncline[rnd(arrIncline.length)]);
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
    let phrase = inpLetterText.value.trim().replace(/\s{2,}/g, ' ');
    let words = phrase.split(' ');

    // Coloca na tela o número de palavras
    console.log(pAccountantLetter.firstElementChild)
    pAccountantLetter.firstElementChild.innerText = 'Sua carta possui '
    pNumberOfWords.innerText = words.length;
    if (words.length === 1) {
      pAccountantLetter.lastElementChild.innerText = ' palavra'
    } else {
      pAccountantLetter.lastElementChild.innerText = ' palavras'
    }

    // Limpa a frase ja escrita
    pGeneratedLetter.innerHTML = '';

    // Imprime o novo texto
    for (let i = 0; i < words.length; i += 1) {
      let span = document.createElement('span');
      addClass(span);

      // span.classList.add(arrStyle[rnd(arrStyle.length)]);
      // span.classList.add(arrSize[rnd(arrSize.length)]);
      // span.classList.add(arrRotation[rnd(arrRotation.length)]);
      // span.classList.add(arrIncline[rnd(arrIncline.length)]);
      span.innerText = words[i];
      pGeneratedLetter.appendChild(span);
    }
  } else {
    pEmptyInput.innerText = 'Por favor, digite o conteúdo da carta.';
  }
});

inpLetterText.addEventListener('input', function () {
  if (inpLetterText.value.trim() === '') {
    pEmptyInput.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    pEmptyInput.innerText = '';
  }
  // Limpa da tela o número de palavras
  pAccountantLetter.firstElementChild.innerText = ''
  pNumberOfWords.innerText = ''
  pAccountantLetter.lastElementChild.innerText = ''
});
