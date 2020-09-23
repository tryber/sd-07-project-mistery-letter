let inputText = document.getElementById('carta-texto');
let generateLetter = document.getElementById('carta-gerada');
let text;


const style = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotate = ['rotateleft', 'rotateright'];
const inclination = ['skewleft', 'skewright'];


function styleGenerator(txt) {
  const x = style[Math.round(Math.random() * 2)];
  const y = size[Math.round(Math.random() * 2)];
  const z = rotate[Math.round(Math.random() * 1)];
  const w = inclination[Math.round(Math.random() * 1)];
  txt.className = `${x} ${y} ${z} ${w}`;
}


document.getElementById('criar-carta').addEventListener('click', function () {
  text = inputText.value;
  if (text === '' || text === ' ') {
    generateLetter.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    const arrayWords = text.split(' ');
    for (let index = 0; index < arrayWords.length; index += 1) {
    const createTagSpan = document.createElement('span');
    createTagSpan.innerText = arrayWords[index];
    generateLetter.appendChild(createTagSpan);
    styleGenerator(createTagSpan);
  }
    document.querySelector('#carta-contador').innerText = arrayWords.length;
  }
});
