const inputText = document.getElementById('carta-texto');
const createLetterButton = document.getElementById('criar-carta');
const letterParagraph = document.getElementById('carta-gerada');

let paragraphChildren = letterParagraph.childNodes
console.log(paragraphChildren[1])

function clearParagraph () {
  let paragraphChildren = letterParagraph.childNodes
  console.log(paragraphChildren[0])
  for (let index = 0; index < paragraphChildren.length; index += 0) {
    console.log(index)
    letterParagraph.removeChild(paragraphChildren[0])
  }
}

function createLetter() {
  clearParagraph()
  if(inputText.value && inputText.value.trim() !== "") {
    let words = inputText.value.split(" ")
    for (let item = 0; item < words.length; item += 1) {
      let newParagraphElement = document.createElement('span');
      newParagraphElement.innerText = words[item]
      letterParagraph.appendChild(newParagraphElement)
    }
  } else {
    letterParagraph.innerText = 'Por favor, digite o conteúdo da carta.';
  }
}



createLetterButton.addEventListener('click', createLetter)