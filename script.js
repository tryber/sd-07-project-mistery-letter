const containerCarta = document.querySelector('#carta-gerada');
const contador = document.querySelector('#carta-contador');
const novaCarta = document.querySelector('#criar-carta');
const textoInserido = document.querySelector('#carta-texto');
const tamanho = ['medium', 'big', 'reallybig'];
const estilo = ['newspaper', 'magazine1', 'magazine2'];
const rotacao = ['rotateleft', 'rotateright'];
const inclinacao = ['skewleft', 'skewright'];
let contagemFinal = 0;

// Solução p/ espaçamento em branco encontrado no seguinte link: https://bit.ly/3iGxe4F
function checarEspaco(texto) {
  let checar = texto.split(' ');
  checar.forEach((letra) => {
    if (letra === '') {
      return (texto = '');
    }
  });

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

  if (checarEspaco(caixaTexto).length !== 0) {
    const arrayTexto = caixaTexto.split(' ', caixaTexto.length);
    const contando = arrayTexto.length;
    contagemFinal += contando;

    if (containerCarta.classList.contains('aviso')) {
      containerCarta.classList.remove('aviso');
      containerCarta.innerText = '';
    }

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
      contador.innerText = contagemFinal;
    });
  } else {
    contagemFinal = 0;
    contador.innerText = '0';
    containerCarta.innerText = '';
    const aviso = 'Por favor, digite o conteúdo da carta.';
    const texto = document.createTextNode(aviso);

    containerCarta.classList.add('aviso');
    containerCarta.appendChild(texto);
  }
});
