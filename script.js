const inputUser = document.querySelector('#carta-texto');

document.querySelector('button').addEventListener('click', function () {
  const frase = inputUser.value;
  const word = frase.split(' ');
  for (let i = 0; i < word.length; i += 1) {
    const showWord = document.createElement('span');
    document.querySelector('#carta-gerada').appendChild(showWord);
    showWord.innerText = word[i];
  }
})
