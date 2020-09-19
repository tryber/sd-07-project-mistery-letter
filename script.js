const textInput = document.getElementById('carta-texto');
const generatedLetter = document.getElementById('carta-gerada');
const creationButton = document.getElementById('criar-carta');
const wordCont = document.getElementById('carta-contador');
const StyleGroupClasses = [`newspaper`, `magazine1`, `magazine2`];
const sizeGroupClasses = [`medium`, `big`, `reallybig`];
const rotationGroupClasses = [`rotateleft`, `rotateright`];
const skewGroupClasses = [`skewleft`, `skewright`];

function createSpan(word) {
  const newSpan = document.createElement('span');
  newSpan.innerHTML = word;
  generatedLetter.appendChild(newSpan);
  generatedLetter.innerHTML += ' ';
}

creationButton.addEventListener('click', function () {
  const letterArray = textInput.value.split(' ');
  wordCont.innerHTML = 0;
  if (textInput.value === '' || letterArray[0] === '') {
    generatedLetter.innerHTML = 'Por favor, digite o conteúdo da carta.'
    textInput.value = '';
    return;
  }
  generatedLetter.innerHTML = '';
  for (let index = 0; index < letterArray.length; index += 1) {
    createSpan(letterArray[index]);
  }
  const allWords = document.querySelectorAll('#carta-gerada span');
  wordCont.innerHTML = allWords.length;
});
