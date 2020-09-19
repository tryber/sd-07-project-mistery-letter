const containerCarta = document.querySelector('#carta-gerada');
const contador = document.querySelector('#carta-contador');
const novaCarta = document.querySelector('#criar-carta');
const textoInserido = document.querySelector('#carta-texto');
const tamanho = ['medium', 'big', 'reallybig'];
const estilo = ['newspaper', 'magazine1', 'magazine2'];
const rotacao = ['rotateleft', 'rotateright'];
const inclinacao = ['skewleft', 'skewright'];

function checarEspaco(texto) {
  const checar = texto.replace(/\s/g, '');
  return checar;
}

function escolhaRandomica() {
  const novoTamanho = tamanho[Math.floor(Math.random() * tamanho.length)];
  const novoEstilo = estilo[Math.floor(Math.random() * estilo.length)];
  const novaRotacao = rotacao[Math.floor(Math.random() * rotacao.length)];
  const novaInclinacao = inclinacao[Math.floor(Math.random() * inclinacao.length)];

  return [novoTamanho, novoEstilo, novaRotacao, novaInclinacao];
}

novaCarta.addEventListener('click', () => {
  const caixaTexto = textoInserido.value.replace(/\s\s+/g, ' ').trim();
  containerCarta.innerText = '';

  if (checarEspaco(caixaTexto).length !== 0) {
    const arrayTexto = caixaTexto.split(' ', caixaTexto.length - 1);

    arrayTexto.forEach((textoSeparado) => {
      const classes = escolhaRandomica();
      const carta = document.createElement('span');
      carta.id = 'criar-carta';

      classes.forEach((item) => {
        carta.classList.add(item);
      });

      const texto = document.createTextNode(textoSeparado);
      carta.appendChild(texto);
      containerCarta.appendChild(carta);

      contador.innerText = '';
      contador.innerText = arrayTexto.length;
    });
  } else {
    contador.innerText = '0';
    containerCarta.innerText = 'Por favor, digite o conteúdo da carta.';
  }
});
