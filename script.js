const cartaGerada = document.getElementById('carta-gerada');
const inputText = document.querySelector('#carta-texto');
const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
const sizeGroup = ['medium', 'big', 'reallybig'];
const rotationGroup = ['rotateleft', 'rotateright'];
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
  const arrayClassName = [];
  tag.classList.forEach((item) => {
    arrayClassName.push(item);
  });
  arrayClassName.forEach((item) => {
    tag.classList.remove(item);
  });
}

function createTagSpan(arrayWords) {
  for (let index = 0; index < arrayWords.length; index += 1) {
    const tagSpan = document.createElement('span');
    addClass(tagSpan);
    tagSpan.innerText = arrayWords[index];
    cartaGerada.appendChild(tagSpan);
  }
}

function generateArrayOfWords(phrase) {
  let arrayWords = [];
  if (phrase.length === 0) return arrayWords;
  arrayWords = phrase.split(' ');
  return arrayWords;
}

function generateLetter(boolean, phrase) {
  if (boolean) {
    cartaGerada.innerText = '';
    const arrayWords = generateArrayOfWords(phrase);
    createTagSpan(arrayWords);
  }
}

function checksInputEmpty(input) {
  input.value = input.value.trim();
  if (input.value === '' || input.value.length === undefined) {
    cartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
    return false;
  }
  return true;
}

function countWords() {
  const arrayWords = generateArrayOfWords(inputText.value);
  return arrayWords.length;
}

document.getElementById('criar-carta').addEventListener('click', function () {
  const resultBoolean = checksInputEmpty(inputText);
  generateLetter(resultBoolean, inputText.value);
  document.getElementById('carta-contador').innerText = `${countWords()}`;
});

cartaGerada.addEventListener('click', function (event) {
  const tag = event.target;
  removeClassTag(tag);
  addClass(tag);
});
