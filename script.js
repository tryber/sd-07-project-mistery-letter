document.querySelector('#criar-carta').addEventListener('click', function () {
  const frase = document.querySelector('#carta-texto').value;
  const word = frase.split(' ');
  if (frase === '' || frase === ' ') {
    document.querySelector('#carta-gerada').innerText = 'Por favor, digite o conteúdo da carta.'
  } else {
    for (let i = 0; i < word.length; i += 1) {
      const showWord = document.createElement('span');
      document.querySelector('#carta-gerada').appendChild(showWord);
      showWord.innerText = word[i];
    }
  }
});
