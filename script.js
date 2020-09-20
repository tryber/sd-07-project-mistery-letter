function puttingStyle(spanHere) {
  // Math.random() * (max - min) + min; igual ou maior a min e menor que max;
  const styleClass = ['newspaper', 'magazine1', 'magazine2'];
  const sizeClass = ['medium', 'big', 'reallybig'];
  const rotateClass = ['rotateleft', 'rotateright'];
  const skewClass = ['skewleft', 'skewright'];
  const from0to3 = Math.floor(Math.random() * 3); // para gerar o índice aleatório;
  const from0to2 = Math.floor(Math.random() * 2);
  const style = styleClass[from0to3]; // para a linha 29 fica com menos de 100 (Code Climate);
  const rotate = rotateClass[from0to2];
  spanHere.className = `${style} ${sizeClass[from0to3]} ${rotate} ${skewClass[from0to2]}`;
}

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
  document.querySelector('#carta-contador').innerText = document.querySelectorAll('span').length;
});
