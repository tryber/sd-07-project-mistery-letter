function generateLetter() {
  
  const wordsOfLetter = (document.getElementById('carta-texto').value).toString().trim().split(' ');
  if (wordsOfLetter[0] !== '') {
    document.getElementById('carta-gerada').innerHTML = '';
    for (let indexWord in wordsOfLetter) {
      const wordSpan = document.createElement('span');
      wordSpan.innerText = wordsOfLetter[indexWord];
      wordSpan.style.display = 'inline-block';
      wordSpan.style.margin = '5px';
      wordSpan.addEventListener('click', applyNewRandomClass);
      applyRandomClass(wordSpan);
      document.getElementById('carta-gerada').appendChild(wordSpan);
    }
  } else {
    document.getElementById('carta-gerada').innerHTML = 'Por favor, digite o conteúdo da carta.';
  }
}

function applyRandomClass(element) { 
  const classGroupStyle = ['newspaper', 'magazine1', 'magazine2'];
  const classGroupLength = ['medium', 'big', 'reallybig'];
  const classGroupRotation = ['rotateleft', 'rotateright'];
  const classGroupSkew = ['skewleft', 'skewright'];
  const allClassGroup = [classGroupStyle, classGroupLength, classGroupRotation, classGroupSkew];

  const quantityOfClass = Math.ceil(Math.random() * allClassGroup.length);
  const classGroupApplied = [];
  for (let index = 0; index < quantityOfClass; index += 1) {
    let randomClassGroupIndex, randomClassIndex;
    do {
      randomClassGroupIndex = Math.floor(Math.random() * allClassGroup.length);
      randomClassIndex = Math.floor(Math.random() * allClassGroup[randomClassGroupIndex].length);
    }
    while (classGroupApplied.includes(allClassGroup[randomClassGroupIndex]));
    element.classList.add(allClassGroup[randomClassGroupIndex][randomClassIndex]);
    classGroupApplied.push(allClassGroup[randomClassGroupIndex]);
  }
}

function applyNewRandomClass(event) {
  event.target.className = '';
  applyRandomClass(event.target);
}

window.onload = function() {
  document.getElementById('criar-carta').addEventListener('click',generateLetter);

}