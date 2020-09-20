const inputText = document.getElementById('carta-texto');
const createLetterButton = document.getElementById('criar-carta');
const letterParagraph = document.getElementById('carta-gerada');

let paragraphChildren = letterParagraph.childNodes
console.log(paragraphChildren[1])

function clearParagraph () {
  let paragraphChildren = letterParagraph.childNodes
  for (let index = 0; index < paragraphChildren.length; index += 0) {
    letterParagraph.removeChild(paragraphChildren[0])
  }
}

function createLetter() {
  clearParagraph()
  if(inputText.value && inputText.value.trim() !== "") {
    let words = inputText.value.split(" ")
    wordCounter(words)
    for (let item = 0; item < words.length; item += 1) {
      let newParagraphElement = document.createElement('span');
      newParagraphElement.innerText = words[item]
      letterParagraph.appendChild(newParagraphElement)
      addRandomClass(newParagraphElement)
      addClickListener(newParagraphElement)
    }
  } else {
    letterParagraph.innerText = 'Por favor, digite o conteúdo da carta.';
  }
}

createLetterButton.addEventListener('click', createLetter)

function addRandomClass(newWord) {
  const styleGroup = ["newspaper", "magazine1", "magazine2"]
  const sizeGroup = ["medium", "big", "reallybig"]
  const rotationGroup = ["rotateleft", "rotateright"]
  const inclinationGroup = ["skewleft", "skewright"]

  let randomStyle = Math.ceil(Math.random() * styleGroup.length)
  let randomSize = Math.ceil(Math.random() * sizeGroup.length)
  let randomRotation = Math.ceil(Math.random() * rotationGroup.length)
  let randomInclination = Math.ceil(Math.random() * inclinationGroup.length)
  
  newWord.classList.add(styleGroup[randomStyle - 1])
  newWord.classList.add(sizeGroup[randomSize - 1])
  newWord.classList.add(rotationGroup[randomRotation - 1])
  newWord.classList.add(inclinationGroup[randomInclination - 1])
}


function addClickListener(newWord) {
  newWord.addEventListener('click', function () {
    const styleGroup = ["newspaper", "magazine1", "magazine2"]
    let randomStyle = Math.ceil(Math.random() * styleGroup.length)

    if (newWord.classList.contains(styleGroup[0])) {
      newWord.classList.remove(styleGroup[0])
    } else if (newWord.classList.contains(styleGroup[1])) {
      newWord.classList.remove(styleGroup[1])
    } else if (newWord.classList.remove(styleGroup[2])) {
      newWord.classList.remove(styleGroup[2])
    }
    newWord.classList.add(styleGroup[randomStyle - 1])
  })
}

function wordCounter(words) {
  let counter = document.getElementById('carta-contador')
  counter.innerText = words.length
}