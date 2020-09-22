const buttonComand = document.getElementById('criar-carta');
const pElement = document.getElementById('carta-gerada');

buttonComand.addEventListener ('click', function () {
  const inputAdd = document.getElementById('carta-texto').value;
  const wordSplitter = inputAdd.split(' ');
  
  for (let index = 0; index < wordSplitter.length; index += 1) {
    const textCreator = document.createElement('span');
    textCreator.innerHTML = wordSplitter[index] + " ";
    pElement.appendChild(textCreator);
  }
})