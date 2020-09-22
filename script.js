function createTagSpan(size) {
  console.log(size);
}

function generatingArrayOfWords(phrase) {
  const arrayWords = phrase.split(" ");
  return arrayWords;
}

function generationLetter(boolean, phrase) {
  if(boolean){
    const arrayWords = generatingArrayOfWords(phrase);
    createTagSpan(arrayWords.length);
  }
}

function checksInputEmpty(inputText) {
  if (inputText.value === "") {
    document.getElementById('carta-gerada').innerText = 'Por favor, digite o conteúdo da carta';
    return false;
  }
  return true;
}

document.getElementById('criar-carta').addEventListener('click', function () {
  const inputText = document.querySelector('#carta-texto')
  const resultBoolean = checksInputEmpty(inputText);
  generationLetter(resultBoolean, inputText.value);
});
