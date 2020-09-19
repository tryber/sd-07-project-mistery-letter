const textInput = document.getElementById('carta-texto');
const generatedLetter = document.getElementById('carta-gerada');
const creationButton = document.getElementById('criar-carta');
const wordCont = document.getElementById('carta-contador');
const styleGroupClasses = ['newspaper', 'magazine1', 'magazine2'];
const sizeGroupClasses = ['medium', 'big', 'reallybig'];
const rotationGroupClasses = ['rotateleft', 'rotateright'];
const skewGroupClasses = ['skewleft', 'skewright'];

function addRandomClasses(createdSpan) {
  const randomStyle = Math.floor(Math.random() * styleGroupClasses.length);
  const randomSize = Math.floor(Math.random() * sizeGroupClasses.length);
  const randomRotation = Math.floor(Math.random() * rotationGroupClasses.length);
  const randomSkew = Math.floor(Math.random() * skewGroupClasses.length);
  createdSpan.classList = `${styleGroupClasses[randomStyle]} ${sizeGroupClasses[randomSize]} ${rotationGroupClasses[randomRotation]} ${skewGroupClasses[randomSkew]}`;
}

function createSpan(word) {
  const newSpan = document.createElement('span');
  newSpan.innerHTML = word;
  addRandomClasses(newSpan);
  generatedLetter.appendChild(newSpan);
  generatedLetter.innerHTML += ' ';
}

creationButton.addEventListener('click', function () {
  const letterArray = textInput.value.split(' ');
  wordCont.innerHTML = 0;
  if (textInput.value === '' || letterArray[0] === '') {
    generatedLetter.innerHTML = 'Por favor, digite o conteúdo da carta.';
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
