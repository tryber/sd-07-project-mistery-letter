const textInput = document.getElementById('carta-texto');
const generatedLetter = document.getElementById('carta-gerada');
const creationButton = document.getElementById('criar-carta');

function splitSentence(string) {
  let arrayString = [];
  let word = '';

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === ' ' && word !== '') {
      arrayString.push(word);
      word = '';
    } else if (string[i] !== ' ') {
      word += string[i];
    }
  }
  arrayString.push(word);
  return arrayString;
}

function createSpan(word) {
  const newSpan = document.createElement('span');
  newSpan.innerHTML = word;
  generatedLetter.appendChild(newSpan);
  generatedLetter.innerHTML += ' ';
}

creationButton.addEventListener('click', function () {
  const letterArray = splitSentence(textInput.value);
  for (let index = 0; index < letterArray.length; index += 1) {
    createSpan(letterArray[index]);
  }
})