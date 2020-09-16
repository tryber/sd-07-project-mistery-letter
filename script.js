const styleGroup = { 1: 'newspaper', 2: 'magazine1', 3: 'magazine2' };
const sizeGroup = { 1: 'medium', 2: 'big', 3: 'reallybig' };
const rotateGroup = { 1: 'rotateleft', 2: 'rotateright' };
const inclinationGroup = { 1: 'skewleft', 2: 'skewright' };
const buttonCreateLetter = document.querySelector('#criar-carta');

function addRandomClass(element) {
  const classStyleGroup = styleGroup[Math.ceil(Math.random() * 3)];
  const classSizeGroup = sizeGroup[Math.ceil(Math.random() * 3)];
  const classRotateGroup = rotateGroup[Math.ceil(Math.random() * 2)];
  const classInclinationGroup = inclinationGroup[Math.ceil(Math.random() * 2)];
  element.className = `${classStyleGroup} ${classSizeGroup} ${classRotateGroup} ${classInclinationGroup}`;
}

function createSpan(word) {
  const spanElement = document.createElement('span');
  spanElement.innerText = `${word}`;
  addRandomClass(spanElement);
  return spanElement;
}

buttonCreateLetter.addEventListener('click', function () {
  const cartaGerada = document.querySelector('#carta-gerada');
  const letterText = document.querySelector('#carta-texto').value;
  if (letterText.trim() === '') {
    document.querySelector('#carta-gerada').innerText = ('Por favor, digite o conteúdo da carta.');
  } else {
    cartaGerada.innerHTML = '';
    const arrayLetterText = letterText.split(' ');
    let wordCount = 0;
    for (let index = 0; index < arrayLetterText.length; index += 1) {
      if (arrayLetterText[index] !== '') {
        cartaGerada.appendChild(createSpan(arrayLetterText[index]));
        wordCount += 1;
      }
    }
    document.querySelector('#carta-contador').innerText = wordCount;
  }
});

const cartaGeradaElement = document.querySelector('#carta-gerada');

cartaGeradaElement.addEventListener('click', function (event) {
  if (event.target.tagName === 'SPAN') {
    addRandomClass(event.target);
  }
});
