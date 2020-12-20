function random(num) {
  return (Math.floor(Math.random() * num));
}

function classes() {
  const estilo = ['newspaper', 'magazine1', 'magazine2'];
  const tamanho = ['medium', 'big', 'reallybig'];
  const rotacao = ['rotateleft', 'rotateright'];
  const inclinacao = ['skewleft', 'skewright'];
  const allClasses = [];
  allClasses.push(estilo[random(7)]);
  allClasses.push(tamanho[random(3)]);
  allClasses.push(rotacao[random(2)]);
  allClasses.push(inclinacao[random(2)]);
  return allClasses;
}
console.log(classes());
const btCarta = document.getElementById('criar-carta');

btCarta.addEventListener('click', () => {
  const inputTexto = document.getElementById('carta-texto');
  const pContador = document.querySelector('#carta-contador');
  const pCarta = document.querySelector('#carta-gerada');
  inputTexto.value = inputTexto.value.trim();
  if (inputTexto.value) {
    pCarta.innerText = ' ';
    const textoCarta = (inputTexto.value).trim().split(' ');
    for (let i = 0; i < textoCarta.length; i += 1) {
      const allClasses = classes();
      const span = document.createElement('span');
      span.innerText = textoCarta[i];
      allClasses.forEach((item) => {
        span.className = `${span.className} ${item}`;
      });
      span.id = `${span.innerText}${i}`;
      pCarta.appendChild(span);
    }
    const span = document.getElementsByTagName('span');
    pContador.innerText = span.length;
  } else if (!pCarta.innerText) {
    pCarta.innerText = 'Por favor, digite o conteúdo da carta.';
    pContador.innerText = '';
  }
});
// FALTA TORNAR O SPAN CLICAVEL - Já tenho id
