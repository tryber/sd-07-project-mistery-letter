const cartaGerada = document.getElementById('carta-gerada');

const arrayClass = ['newspaper', 'magazine1', 'magazine2', 'medium', 'big', 'reallybig', 'rotateleft', 'rotateright', 'skewleft', 'skewright'];

function positionClassRandom() {
  const positionClasseName = Math.floor(Math.random() * arrayClass.length);
  return positionClasseName;
}

function createTagSpan(arrayWords) {
  for(let index = 0; index < arrayWords.length; index += 1) {
    const tagSpan = document.createElement('span');
    const positionClasseName = positionClassRandom();
    tagSpan.classList.add(arrayClass[positionClasseName]);
    tagSpan.innerText = arrayWords[index];
    cartaGerada.appendChild(tagSpan);
  }
}

function generateArrayOfWords(phrase) {
  const arrayWords = phrase.split(" ");
  return arrayWords;
}

function generateLetter(boolean, phrase) {
  if(boolean){
    const arrayWords = generateArrayOfWords(phrase);
    createTagSpan(arrayWords);
  }
}

function checksInputEmpty(inputText) {
  if (inputText.value === "") {
    cartaGerada.innerText = 'Por favor, digite o conteúdo da carta';
    return false;
  }
  return true;
}

document.getElementById('criar-carta').addEventListener('click', function () {
  const inputText = document.querySelector('#carta-texto')
  const resultBoolean = checksInputEmpty(inputText);
  generateLetter(resultBoolean, inputText.value);
});
