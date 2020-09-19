const containerCarta = document.querySelector('#carta-gerada');
const novaCarta = document.querySelector('#criar-carta');
const textoInserido = document.querySelector('#carta-texto');
const tamanho = ['medium', 'big', 'reallybig'];
const estilo = ['newspaper', 'magazine1', 'magazine2'];
const rotacao = ['rotateleft', 'rotateright'];
const inclinacao = ['skewleft', 'skewright'];

// Solução p/ espaçamento em branco encontrado no seguinte link: https://bit.ly/3iGxe4F
function checarEspaco(texto) {
  if (/^\s/.test(texto)) {
    texto = '';
  }
  return texto;
}

function escolhaRandomica() {
  const novoTamanho = tamanho[Math.floor(Math.random() * tamanho.length)];
  const novoEstilo = estilo[Math.floor(Math.random() * estilo.length)];
  const novaRotacao = rotacao[Math.floor(Math.random() * rotacao.length)];
  const novaInclinacao = inclinacao[Math.floor(Math.random() * inclinacao.length)];

  return [novoTamanho, novoEstilo, novaRotacao, novaInclinacao];
}

novaCarta.addEventListener('click', () => {
  const caixaTexto = textoInserido.value;
  let carta = document.createElement('span');
  carta.id = 'criar-carta';

  if (checarEspaco(caixaTexto).length !== 0) {
    const arrayTexto = caixaTexto.split(' ', caixaTexto.length);

    if (containerCarta.classList.contains('aviso')) {
      containerCarta.classList.remove('aviso');
      containerCarta.innerText = '';
    }

    arrayTexto.forEach((textoSeparado) => {
      const classes = escolhaRandomica();
      carta = document.createElement('span');
      carta.id = 'criar-carta';

      classes.forEach((item) => {
        carta.classList.add(item);
      });

      const texto = document.createTextNode(textoSeparado);
      carta.appendChild(texto);
      containerCarta.appendChild(carta);
    });
  } else {
    containerCarta.innerText = '';
    const aviso = 'Por favor, digite o conteúdo da carta.';
    const texto = document.createTextNode(aviso);

    containerCarta.classList.add('aviso');
    containerCarta.appendChild(texto);
  }
});
