const classGroup = {
  styleGroup: ['newspaper', 'magazine1', 'magazine2'],
  sizeGroup: ['medium', 'big', 'reallybig'],
  rotateGroup: ['rotateleft', 'rotateright'],
  skewGroup: ['skewleft', 'skewright'],
};

const button = document.querySelector('#criar-carta');
const paragraph = document.querySelector('#carta-gerada');
const count = document.querySelector('#carta-contador');


function randomIndex(position) {
  return (Math.floor(Math.random() * (classGroup[position].length)));
}

function giveAClassPartTwo(index, paragraphArray) {
  let classes = '';
  const keys = Object.keys(classGroup);

  keys.forEach(function (key) {
    if (key === 'skewGroup') {
      classes += `${(classGroup[key])[randomIndex(key)]}`;
    } else {
      classes += `${(classGroup[key])[randomIndex(key)]} `;
    }
  });
  paragraphArray[index].className = classes;
}

function giveAClassPartOne() {
  const paragraphArray = paragraph.children;

  for (let index = 0; index < paragraphArray.length; index += 1) {
    giveAClassPartTwo(index, paragraphArray);
  }
}

function createSpanForMisteryLetter(textArray) {
  for (let index = 0; index < textArray.length; index += 1) {
    const newSpan = document.createElement('span');
    newSpan.innerText = textArray[index];
    paragraph.appendChild(newSpan);
  }
  giveAClassPartOne(paragraph);
}

function countWord(textArray) {
  let numbersOfWords = 0;
  for (let index = 0; index < textArray.length; index += 1) {
    numbersOfWords += 1;
  }
  count.innerText = numbersOfWords;
}

function testInput(textArray) {
  let countParagraph = 0;
  for (let index = 0; index < textArray.length; index += 1) {
    if (textArray[index] === '') {
      countParagraph += 1;
    }
  }
  return countParagraph;
}

button.addEventListener('click', function () {
  const input = document.querySelector('#carta-texto');
  paragraph.innerText = '';
  paragraph.classList.remove('erro');
  const inputValue = input.value;
  const pieceOfText = inputValue.split(' ');
  const continueOrPause = testInput(pieceOfText);
  if (continueOrPause !== pieceOfText.length) {
    createSpanForMisteryLetter(pieceOfText);
    countWord(pieceOfText);
  } else {
    count.innerText = '';
    paragraph.innerText = 'Por favor, digite o conteúdo da carta.';
    paragraph.classList.add('erro');
  }
});
