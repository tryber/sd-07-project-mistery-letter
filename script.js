function randomNumber(maxValue) {
  return Math.floor(Math.random() * maxValue)
}

function stringToArray() {
  let textOrigin = inputLetter.value;
  let arrayText = textOrigin.split(' ')

  return arrayText
}

function createSpan(textElement) {
  const spanElement = document.createElement('span')
  spanElement.textContent = textElement
  stylizeComponent(spanElement)

  return spanElement
}

function stylizeComponent(elementToStylize) {
  elementToStylize.classList.add(classTypes.styleGroup[randomNumber(3)]);
  elementToStylize.classList.add(classTypes.sizeGroup[randomNumber(3)]);
  elementToStylize.classList.add(classTypes.rotateGroup[randomNumber(2)]);
  elementToStylize.classList.add(classTypes.skewGroup[randomNumber(3)]);
}

function createLetter() {
  let arrayText = stringToArray();

  for (let index = 0; index < arrayText.length; index += 1) {
    const element = createSpan(arrayText[index])
    stylizedLetter.appendChild(element)
  }
}


const classTypes = {
  styleGroup: ['newspaper', 'magazine1', 'magazine2'],
  sizeGroup : ['medium', 'big', 'reallybig'],
  rotateGroup: ['rotateleft', 'rotateright'],
  skewGroup: ['skewleft', 'skewright'],
};

const buttonGenerateLetter = document.querySelector('#criar-carta');
const inputLetter = document.querySelector('#carta-texto');
const stylizedLetter = document.querySelector('#carta-gerada');
const countWords = document.querySelector('#carta-contador');

buttonGenerateLetter.addEventListener('click', createLetter)
