function generationLetter(phrase) {
  console.log(phrase);
}

document.getElementById('criar-carta').addEventListener('click',function () {
  const inputText = document.querySelector('#carta-texto')
  if (inputText.value === "") return alert('Por favor, digite o conteúdo da carta');
  generationLetter(inputText.value);
  return true;
});
