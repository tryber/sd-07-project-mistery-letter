const botaoGerar = document.getElementById('criar-carta');
const paragrafo = document.getElementById('carta-gerada');
const inputFrase = document.getElementById('carta-texto');

const montaCarta = (array) => {
  if (array[0].length > 0) {
    for (let index = 0; index < array.length; index += 1) {
      const adiconaFilho = document.createElement('span');
      adiconaFilho.innerText = `${array[index]} `;
      paragrafo.appendChild(adiconaFilho);
    }
  } else {
    paragrafo.innerText = 'Por favor, digite o conteúdo da carta.';
  }
};

botaoGerar.addEventListener('click', function () {
  const frase = inputFrase.value;
  const arrayPalavras = frase.split(' ');
  montaCarta(arrayPalavras);
});
