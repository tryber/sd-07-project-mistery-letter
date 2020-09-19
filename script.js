const textInput = document.getElementById('carta-texto');
const generatedLetter = document.getElementById('carta-gerada');
const creationButton = document.getElementById('criar-carta');

function createSpan(word) {
  const newSpan = document.createElement('span');
  newSpan.innerHTML = word;
  generatedLetter.appendChild(newSpan);
  generatedLetter.innerHTML += ' ';
}

creationButton.addEventListener('click', function () {
  const letterArray = textInput.value.split(' ');
  if (textInput.value === '' || letterArray[0] === '') {
    alert('Por favor, digite o conteúdo da carta.');
    textInput.value = '';
    return;
  }
  generatedLetter.innerHTML = '';
  for (let index = 0; index < letterArray.length; index += 1) {
    createSpan(letterArray[index]);
  }
})
