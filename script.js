function generationLetter(phrase) {
  console.log(phrase);
}

function checksInputEmpty(inputText) {
  if (inputText.value === "") {
    document.getElementById('carta-gerada').innerText = 'Por favor, digite o conteúdo da carta';
  }
}

document.getElementById('criar-carta').addEventListener('click', function () {
  const inputText = document.querySelector('#carta-texto')
  checksInputEmpty(inputText);
  generationLetter(inputText.value);
  return true;
});
