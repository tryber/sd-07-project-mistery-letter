var inputText = document.getElementById('carta-texto');
var text;
var words = [];
var generateLetter = document.getElementById('carta-gerada');
var btn = document.getElementById('criar-carta');

btn.addEventListener('click', function () {
  text = inputText.value;
  if (text === '' || text === ' ') {
    generateLetter.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    span(text);
  }
});

function span(text) {
  const arrayWords = text.split(' ');
  for (let index = 0; index < arrayWords.length; index += 1) {
    const createTagSpan = document.createElement('span');
    createTagSpan.innerText = arrayWords[index]; 
    generateLetter.appendChild(createTagSpan);
  }
}