document.querySelector('#criar-carta').addEventListener('click', function () {
  const frase = document.querySelector('#carta-texto').value;
  const word = frase.split(' ');
  if (frase === '' || frase === ' ') {
    document.querySelector('#carta-gerada').innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    document.querySelector('#carta-gerada').innerText = '';
    for (let i = 0; i < word.length; i += 1) {
      const showWord = document.createElement('span');
      document.querySelector('#carta-gerada').appendChild(showWord);
      showWord.innerText = word[i];
      puttingStyle(showWord);
    }
  }
  let spanLength = document.querySelectorAll('span').length;
  document.querySelector('#carta-contador').innerText = spanLength;
});

function puttingStyle(spanHere) {
  // Math.random() * (max - min) + min; igual ou maior a min e menor que max;
  let stylingSpan = Math.floor(Math.random() * 6);
  spanHere.className = '';
  if (stylingSpan === 0) {
    spanHere.className = '';
    spanHere.classList.add('newspaper');
    spanHere.classList.add('medium');
    spanHere.classList.add('rotateleft');
  } else if (stylingSpan === 1) {
    spanHere.className = '';
    spanHere.classList.add('magazine1');
    spanHere.classList.add('big');
    spanHere.classList.add('shewleft');
  } else if (stylingSpan === 2) {
    spanHere.className = '';
    spanHere.classList.add('magazine2');
    spanHere.classList.add('reallybig');
    spanHere.classList.add('rotateright');
  } else if (stylingSpan === 3) {
    spanHere.className = '';
    spanHere.classList.add('newspaper');
    spanHere.classList.add('big');
    spanHere.classList.add('shewright');
  } else if (stylingSpan === 4) {
    spanHere.className = '';
    spanHere.classList.add('magazine1');
    spanHere.classList.add('reallybig');
    spanHere.classList.add('rotateleft');
  } else {
    spanHere.className = '';
    spanHere.classList.add('magazine2');
    spanHere.classList.add('medium');
    spanHere.classList.add('shewleft');
  }
}
