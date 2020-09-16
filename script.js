const createLetterButton = document.getElementById('criar-carta');

function generateLetterWord() {
  const letterWords = document.getElementById('carta-texto').value;
  if (letterWords.trim() !== '') {
    const letterBody = document.getElementById('carta-gerada');
    const word = document.createElement('span');
    word.innerText = letterWords;
    letterBody.appendChild(word);
  } else {
      alert('Por favor, digite o conteúdo da carta.');
  }
}

createLetterButton.addEventListener('click', generateLetterWord);
