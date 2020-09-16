const createLetterButton = document.getElementById('criar-carta');

function generateLetterWord() {
  const letterWords = document.getElementById('carta-texto').value.split(' ');
  if (letterWords.length > 0) {
    const letterBody = document.getElementById('carta-gerada');
    for (let i = 0; i < letterWords.length; i += 1) {
      const word = document.createElement('span');
      word.innerText = letterWords[i];
      letterBody.appendChild(word);
    }
  } else {
      alert('Por favor, digite o conteúdo da carta.');
  }
}

createLetterButton.addEventListener('click', generateLetterWord);
