const cartaGerada = document.getElementById('carta-gerada');
const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
const sizeGroup = ['medium', 'big', 'reallybig'];
const  rotationGroup = ['rotateleft', 'rotateright'];
const tiltGroup = ['skewleft', 'skewright'];

function positionClassRandom(array) {
  const positionClasseName = Math.floor(Math.random() * array.length);
  return positionClasseName;
}

function addClass(tag) {
  tag.classList.add(styleGroup[positionClassRandom(styleGroup)]);
  tag.classList.add(sizeGroup[positionClassRandom(sizeGroup)]);
  tag.classList.add(rotationGroup[positionClassRandom(rotationGroup)]);
  tag.classList.add(tiltGroup[positionClassRandom(tiltGroup)]);
}

function removeClassTag(tag) {
  arrayClassName = [];
  tag.classList.forEach((item) => {
    arrayClassName.push(item);
  });
  arrayClassName.forEach((item) => {
    tag.classList.remove(item);
  });
}

function createTagSpan(arrayWords) {
  for(let index = 0; index < arrayWords.length; index += 1) {
    const tagSpan = document.createElement('span');
    addClass(tagSpan);
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

cartaGerada.addEventListener('click', function (event) {
  tag = event.target;
  removeClassTag(tag);
  addClass(tag);
});
