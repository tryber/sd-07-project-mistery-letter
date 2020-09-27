const btnCriarCarta = document.getElementById('criar-carta');


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
  if (checkText()) {
    const inputCartaTexto = document.getElementById('carta-texto');
    let text = inputCartaTexto.value.split(' ');
    console.log(text);
    const elemPai = document.getElementById("carta-gerada");

    text.forEach(word => {
      const newSpan = criaSpan(word);
      elemPai.appendChild(newSpan);
    });
  } else {
    alert('Por favor, digite o conteúdo da carta.');
  }
}

window.onload = function () {
  btnCriarCarta.addEventListener('click', generateLetter);

}
