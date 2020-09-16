function generateLetter() {
  const wordsOfLetter = (document.getElementById('carta-texto').value).toString().split(' ');
  if (wordsOfLetter.length > 0) {
    for (let indexWord in wordsOfLetter) {
      const wordSpan = document.createElement('span');
      wordSpan.innerText = wordsOfLetter[indexWord];
      document.getElementById('carta-gerada').appendChild(wordSpan);
    }
  }
}

window.onload = function() {
  document.getElementById('criar-carta').addEventListener('click',generateLetter);
}