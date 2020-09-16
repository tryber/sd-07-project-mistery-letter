function generateLetter() {
  const wordsOfLetter = (document.getElementById('carta-texto').value).toString().trim().split(' ');
  if (wordsOfLetter[0] !== '') {
    document.getElementById('carta-gerada').innerHTML = '';
    for (let indexWord in wordsOfLetter) {
      const wordSpan = document.createElement('span');
      wordSpan.innerText = wordsOfLetter[indexWord];
      document.getElementById('carta-gerada').appendChild(wordSpan);
    }
  } else {
    alert('Por favor, digite o conteúdo da carta.');
  }
}

window.onload = function() {
  document.getElementById('criar-carta').addEventListener('click',generateLetter);
}