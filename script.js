const createLetterButton = document.getElementById('criar-carta');

function generateLetterWord() {
  const letterWords = document.getElementById('carta-texto').value.trim().split(' ');
  const letterBody = document.getElementById('carta-gerada');
  if (letterWords.length > 1 && letterWords[0] !== '') {
    for (let i = 0; i < letterWords.length; i += 1) {
      const word = document.createElement('span');
      word.innerText = letterWords[i];
      letterBody.appendChild(word);
    }
  } else {
      letterBody.innerText = 'Por favor, digite o conteúdo da carta.';
  }
}

createLetterButton.addEventListener('click', generateLetterWord);
