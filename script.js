function generateLetter() {
  
  const wordsOfLetter = (document.getElementById('carta-texto').value).toString().trim().split(' ');
  if (wordsOfLetter[0] !== '') {
    document.getElementById('carta-gerada').innerHTML = '';
    for (let indexWord in wordsOfLetter) {
      const wordSpan = document.createElement('span');
      wordSpan.innerText = wordsOfLetter[indexWord];
      wordSpan.style.display = 'inline-block';
      applyRandomClass(wordSpan);
      document.getElementById('carta-gerada').appendChild(wordSpan);
    }
  } else {
    alert('Por favor, digite o conteúdo da carta.');
  }
}

function applyRandomClass(element) { 
  const classGroupStyle = ['newspaper', 'magazine1', 'magazine2'];
  const classGroupLength = ['medium', 'big', 'reallybig'];
  const classGroupRotation = ['rotateleft', 'rotateright'];
  const classGroupSkew = ['skewleft', 'skewright'];
  const allClassGroup = [classGroupStyle, classGroupLength, classGroupRotation, classGroupSkew];

  const quantityOfClass = Math.ceil(Math.random() * allClassGroup.length);
  for (let index = 0; index < quantityOfClass; index += 1) {
    let randomClassGroupIndex, randomClassIndex;
    do {
      randomClassGroupIndex = Math.floor(Math.random() * allClassGroup.length);
      randomClassIndex = Math.floor(Math.random() * allClassGroup[randomClassGroupIndex].length);
    }
    while (element.classList.contains(allClassGroup[randomClassGroupIndex][randomClassIndex]));
    element.classList.add(allClassGroup[randomClassGroupIndex][randomClassIndex]);
  }
}

window.onload = function() {
  document.getElementById('criar-carta').addEventListener('click',generateLetter);

}