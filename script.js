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
    let insertedText = document.getElementById('carta-texto').value;
    
    let elemPai = document.getElementById("carta-gerada");
    //elemPai.textContent = '';

    let newSpan;

    if (checkText()) {    
     insertedText = insertedText.split(' ');
     console.log(insertedText)
     insertedText.forEach(word => {
            newSpan = criaSpan(word);
            elemPai.appendChild(newSpan);      
    });

  } else {
    newSpan = criaSpan('Por favor, digite o conteúdo da carta.');
    elemPai.appendChild(newSpan);
  }
  
}

window.onload = function () {
  btnCriarCarta.addEventListener('click', generateLetter);
}
