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

function escolhaRandomica(valor) {
  return Math.floor(Math.random() * valor);
}

novaCarta.addEventListener('click', () => {
  const caixaTexto = textoInserido.value;

  if (checarEspaco(caixaTexto).length !== 0) {
    const arrayTexto = caixaTexto.split(' ', caixaTexto.length);

    arrayTexto.forEach((textoSeparado) => {
      const novoTamanho = tamanho[escolhaRandomica(tamanho.length)];
      const novoEstilo = estilo[escolhaRandomica(estilo.length)];
      const novaRotacao = rotacao[escolhaRandomica(rotacao.length)];
      const novaInclinacao = inclinacao[escolhaRandomica(inclinacao.length)];
      const classes = [novoTamanho, novoEstilo, novaRotacao, novaInclinacao];
      const carta = document.createElement('p');
      const tirarAviso = document.querySelectorAll('.aviso');
      tirarAviso.forEach((remover) => {
        containerCarta.removeChild(remover);
      });

      carta.id = 'criar-carta';

      classes.forEach((item) => {
        carta.classList.add(item);
      });

      const texto = document.createTextNode(textoSeparado);
      carta.appendChild(texto);

      containerCarta.appendChild(carta);
    });
  } else {
    const carta = document.createElement('p');
    const texto = document.createTextNode(
      'Por favor, digite o conteúdo da carta.'
    );

    carta.classList.add('aviso');
    carta.appendChild(texto);
    containerCarta.appendChild(carta);
  }
});
