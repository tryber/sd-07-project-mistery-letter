const inputText = document.getElementById('carta-texto');
const createLetterButton = document.getElementById('criar-carta');
const letterParagraph = document.getElementById('carta-gerada');

function createLetter() {
  if(inputText.value) {
    let newParagraphElement = document.createElement('span');
    newParagraphElement.innerText = inputText.value
    letterParagraph.appendChild(newParagraphElement)
  } else {
    alert('Por favor, digite o conteúdo da carta.');
  }
}

createLetterButton.addEventListener('click', createLetter)