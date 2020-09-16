// Define constants
const button = document.querySelector('#criar-carta');
const classRotation = ['rotateleft', 'rotateright'];
const classInclination = ['skewleft', 'skewright'];
const classSize = ['medium', 'big', 'reallybig'];
const classStyle = ['newspaper', 'magazine1', 'magazine2'];
const paragraph = document.querySelector('#carta-gerada');
const inputText = document.querySelector('#carta-texto');

function styleText(event) {
  // Random constat to get numbers on arrays class
  const rotationClassValue = classRotation[Math.round(Math.random() * 1)];
  const inclinationClassValue = classInclination[Math.round(Math.random() * 1)];
  const classSizeValue = classSize[Math.round(Math.random() * 2)];
  const classStyleValue = classStyle[Math.round(Math.random() * 2)];

  event.className = `${rotationClassValue} ${inclinationClassValue} ${classSizeValue} ${classStyleValue}`;
}

function eventListenerWords() {
  const words = document.querySelectorAll('#words');

  for (let index = 0; index < words.length; index += 1) {
    words[index].addEventListener('click', function () {
      styleText(words[index]);
    });
  }
}

function createLetter() {
  if (inputText.value.trim() !== '') {
    const letterPrhase = inputText.value.split(' ');
    document.querySelector('#titulo-carta-contador').innerText = 'Quantidade de Palavras';
    const wordCountShow = document.querySelector('#carta-contador');
    const wordCount = letterPrhase.length;
    wordCountShow.innerText = wordCount;

    for (let index = 0; index < letterPrhase.length; index += 1) {
      const span = document.createElement('span');
      span.id = 'words';
      paragraph.appendChild(span);
      paragraph.lastElementChild.innerText = letterPrhase[index];
      styleText(paragraph.lastElementChild);
    }
    eventListenerWords();
  } else {
    paragraph.innerText = 'Por favor, digite o conteúdo da carta.';
  }
}

function clearLetter() {
  const words = document.querySelectorAll('#words');

  for (let index = 0; index < words.length; index += 1) {
    paragraph.removeChild(words[index]);
  }
}

button.addEventListener('click', function () {
  clearLetter();
  createLetter();
});
