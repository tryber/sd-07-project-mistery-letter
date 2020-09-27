const btnCriarCarta = document.getElementById('criar-carta');

const grupoEstilo = ['newspaper', 'magazine1', 'magazine2'];
const grupoTamanho = ['medium', 'big', 'reallybig'];
const grupoRotacao = ['rotateleft', 'rotateright'];
const grupoInclinacao = ['skewleft', 'skewright'];

const criaSpan = function (str) {
  let newSapn = document.createElement('span');
  newSapn.textContent = str;

  return newSapn;
}

const checkText = function () {
    let inputText = document.getElementById('carta-texto').value;
    inputText = inputText.trim();

    if (inputText.length === 0) {
      return false;
    }
    return true;
  }

const generateLetter = function () {
    const inputCartaTexto = document.getElementById('carta-texto');
    let elemPai = document.getElementById("carta-gerada");
    //elemPai.textContent = '';

    let newSpan;

    if (checkText()) {    
    let text = inputCartaTexto.value.split(' ');
        text.forEach(word => {
            newSpan = criaSpan(word);      
    });

  } else {
    newSpan = criaSpan('Por favor, digite o conteúdo da carta.');
  }
  elemPai.appendChild(newSpan);
}

window.onload = function () {
  btnCriarCarta.addEventListener('click', generateLetter);
}
