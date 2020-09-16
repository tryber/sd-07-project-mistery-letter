const style = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rot = ['rotateleft', 'rotateright'];
const inc = ['skewleft', 'skewright'];
document.querySelector('#criar-carta').addEventListener('click', function () {
  if (document.querySelector('#carta-texto').value === '') {
    document.querySelector('#carta-gerada').innerText = 'Por favor, digite o conteúdo da carta.';
    return;
  }
  const str = document.querySelector('#carta-texto').value.split(' ');
  const div = document.createElement('div');
  for (let index = 0; index < str.length; index += 1) {
    const word = document.createElement('span');
    word.innerText = str[index];
    word.classList.add(style[Math.floor(Math.random() * 3)]);
    word.classList.add(size[Math.floor(Math.random() * 3)]);
    word.classList.add(rot[Math.floor(Math.random() * 2)]);
    word.classList.add(inc[Math.floor(Math.random() * 2)]);
    div.appendChild(word);
  }
  document.querySelector('#carta-gerada').innerHTML = div.innerHTML;
  document.querySelector('#carta-contador').innerText = str.length;
});
