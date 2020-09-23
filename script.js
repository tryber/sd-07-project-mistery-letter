var inputText = document.getElementById('carta-texto');
var text;

var generateLetter = document.getElementById('carta-gerada');
var btn = document.getElementById('criar-carta');

const style = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotate = ['rotateleft', 'rotateright'];
const inclination = ['skewleft', 'skewright'];


function styleGenerator(text) {
  const x = style[Math.round(Math.random()*2)];
  const y = size[Math.round(Math.random()*2)];
  const z = rotate[Math.round(Math.random()*1)];
  const w = inclination[Math.round(Math.random()*1)];
  text.className = `${x} ${y} ${z} ${w}`;
}


btn.addEventListener('click', function () {
  text = inputText.value;
  if (text === '' || text === ' ') {
    generateLetter.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    span(text);
  }
});

function span(text) {
  const arrayWords = text.split(' ');
  for (let index = 0; index < arrayWords.length; index += 1) {
    const createTagSpan = document.createElement('span');
    createTagSpan.innerText = arrayWords[index]; 
    generateLetter.appendChild(createTagSpan);
    styleGenerator(createTagSpan);
  } 
}