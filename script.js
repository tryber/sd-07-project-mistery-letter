const classGroup = {
  styleGroup: ['newspaper', 'magazine1', 'magazine2'],
  sizeGroup: ['medium', 'big', 'reallybig'],
  rotateGroup: ['rotateleft', 'rotateright'],
  skewGroup: ['skewleft', 'skewright']
};

const button = document.querySelector('#criar-carta');

function randomIndex(position) {
  return (Math.floor(Math.random() * (classGroup[position].length)));
}

function giveAClass(paragraph) {
  let classes;
  const paragraphArray = paragraph.children
  for (let index = 0; index < paragraphArray.length; index += 1) {
    classes = '';
    for (let key in classGroup) {
      classes += `${(classGroup[key])[randomIndex(key)]} `;
    }
    paragraphArray[index].className = classes;
  }
}

function createSpanForMisteryLetter(textArray) {
  const paragraph = document.querySelector('#carta-gerada');
  paragraph.innerText = '';
  for (let index = 0; index < textArray.length; index += 1) {
    const newSpan = document.createElement('span');
    newSpan.innerText = textArray[index];
    paragraph.appendChild(newSpan);
  }
  giveAClass(paragraph);
}

function countWord(textArray) {
  const count = document.querySelector('#carta-contador');
  let numbersOfWords = 0;
  for (let index = 0; index < textArray.length; index += 1) {
    numbersOfWords += 1;
  }
  count.innerText = `Total de ${numbersOfWords} palavras!`
}

function testInput(textArray) {
  let count = 0;
  for (let index = 0; index < textArray.length; index += 1) {
    if(textArray[index] === '') {
      count += 1;
    }
  }
  return count;
}

button.addEventListener('click', function () {
  const input = document.querySelector('#carta-text');
  let inputValue = input.value;
  let pieceOfText =  inputValue.split(' ');
  let continueOrPause = testInput(pieceOfText); 
  if (continueOrPause !== pieceOfText.length) {
    createSpanForMisteryLetter(pieceOfText);
    countWord(pieceOfText);
  } else {
    alert('ERRO! Verifique se o campo de texto está preenchido');
  }
});
