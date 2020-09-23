const style = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotate = ['rotateleft', 'rotateright'];
const inclination = ['skewleft', 'skewright'];

function styleGenerator(txt) {
  const num1 = Math.round(Math.random() * 2);
  const num2 = Math.round(Math.random() * 1);

  const x = style[num1];
  const y = size[num1];
  const z = rotate[num2];
  const w = inclination[num2];
  txt.className = `${x} ${y} ${z} ${w}`;
}


function createLetter(text) {
  const arrayWords = text.split(' ');
  for (let index = 0; index < arrayWords.length; index += 1) {
    const createTagSpan = document.createElement('span');
    createTagSpan.innerText = arrayWords[index];
    document.getElementById('carta-gerada').appendChild(createTagSpan);
    styleGenerator(createTagSpan);
  }
  document.querySelector('#carta-contador').innerText = arrayWords.length;
}


document.querySelector('#criar-carta').addEventListener('click', function () {
  const text = document.querySelector('#carta-texto').value;
  if (text === '' || text === ' ') {
    document.getElementById('carta-gerada').innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    document.getElementById('carta-gerada').innerHTML = '';
    createLetter(text);
  }
});
