const createLetterButton = document.getElementById('criar-carta');
const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
const sizeGroup = ['medium', 'big', 'reallybig'];
const rotateGroup = ['rotateleft', 'rotateright'];
const tiltgroup = ['skewleft', 'skewright'];
const couterText = document.getElementById('carta-contador');
let counter = 0;

function generateLetterWord() {
  const letterWords = document.getElementById('carta-texto').value.trim().split(' ');
  const letterBody = document.getElementById('carta-gerada');
  letterBody.innerText = '';
  if (letterWords.length > 1 && letterWords[0] !== '') {
    counter = letterWords.length;
    for (let i = 0; i < letterWords.length; i += 1) {
      const word = document.createElement('span');
      word.innerText = letterWords[i];
      letterBody.appendChild(word);
    }
  } else {
    letterBody.innerText = 'Por favor, digite o conteúdo da carta.';
  }
  couterText.innerText = counter;
}

function setRandomClasses() {
  const spanList = document.getElementsByTagName('span');
  for (let i = 0; i < spanList.length; i += 1) {
    const j = Math.floor(Math.random() * styleGroup.length);
    const k = Math.floor(Math.random() * sizeGroup.length);
    const l = Math.floor(Math.random() * rotateGroup.length);
    const m = Math.floor(Math.random() * tiltgroup.length);
    spanList[i].classList.add(styleGroup[j]);
    spanList[i].classList.add(sizeGroup[k]);
    spanList[i].classList.add(rotateGroup[l]);
    spanList[i].classList.add(tiltgroup[m]);
  }
}

createLetterButton.addEventListener('click', generateLetterWord);
createLetterButton.addEventListener('click', setRandomClasses);
