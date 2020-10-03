const botaoGerar = document.getElementById('criar-carta');
const paragrafo = document.getElementById('carta-gerada');
const inputFrase = document.getElementById('carta-texto');

const montaCarta = (array) => {
  for (let index = 0; index < array.length; index += 1) {
    const adiconaFilho = document.createElement('span');
    adiconaFilho.innerText = `${array[index]} `;
    paragrafo.appendChild(adiconaFilho);
  }
};

botaoGerar.addEventListener('click', function () {
  const frase = inputFrase.value;
  const arrayPalavras = frase.split(' ');
  montaCarta(arrayPalavras);
});
