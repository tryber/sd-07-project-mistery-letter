const inputText = document.getElementById('carta-texto');
const createLetterButton = document.getElementById('criar-carta');
const letterParagraph = document.getElementById('carta-gerada');

letterParagraph.childNodes.length

function clearParagraph () {
  let paragraphChildren = letterParagraph.childNodes
  for (let index = 0; index < paragraphChildren.length; index += 1) {
    letterParagraph.removeChild(paragraphChildren[index])
  }
}

function createLetter() {
  if(inputText.value && inputText.value.trim() !== "") {
    clearParagraph()
    let newParagraphElement = document.createElement('span');
    newParagraphElement.innerText = inputText.value
    letterParagraph.appendChild(newParagraphElement)
  } else {
    letterParagraph.innerText = 'Por favor, digite o conteúdo da carta.';
  }
}

createLetterButton.addEventListener('click', createLetter)