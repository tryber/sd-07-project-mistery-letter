const buttonCreateLetter = document.querySelector('#criar-carta');

function createSpan(word) {
  const spanElement = document.createElement('span');
  spanElement.innerText = ` ${word}`;
  return spanElement;
}

buttonCreateLetter.addEventListener('click', function () {
  const cartaGerada = document.querySelector('#carta-gerada');
  const letterText = document.querySelector('#carta-texto').value;
  if (letterText.trim() === '') {
    document.querySelector('#carta-gerada').innerText = ('Por favor, digite o conteúdo da carta.');
  } else {
    cartaGerada.innerHTML = '';
    const arrayLetterText = letterText.split(' ');
    for (let index = 0; index < arrayLetterText.length; index += 1) {
      if (arrayLetterText[index] !== '') {
        cartaGerada.appendChild(createSpan(arrayLetterText[index]));
      }
    }
  }
});
