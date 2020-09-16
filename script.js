
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

  console.log(rotationClassValue);
  console.log(inclinationClassValue);
  console.log(classSizeValue);
  console.log(classStyleValue);

  event.className = `${rotationClassValue} ${inclinationClassValue} ${classSizeValue} ${classStyleValue}`;
}

function eventListenerWords() {
  const words = document.querySelectorAll('#words');

  for (let index = 0; index < words.length; index += 1) {
    words[index].addEventListener('click', function () {
      styleText(words[index]);
      console.log('entrei no loop');
    });
  }
}

function createLetter() {
  const letterPrhase = inputText.value.split(" ");
  for (let index = 0; index < letterPrhase.length; index += 1) {
    const span = document.createElement('span');
    span.id = 'words';
    paragraph.appendChild(span);
    paragraph.lastElementChild.innerText = letterPrhase[index];
    styleText(paragraph.lastElementChild);
  }

  eventListenerWords();
}

button.addEventListener('click', createLetter);
