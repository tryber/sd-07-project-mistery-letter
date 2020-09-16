let textoDaCarta;
// https://stackoverflow.com/a/50135988 fonte .replace()
document.getElementById('carta-texto').addEventListener('keyup', () => {
  textoDaCarta = document
    .getElementById('carta-texto')
    .value.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class=texto>$2</span>');
});

function numeroAleatorio() {
  const numero = Math.floor(Math.random() * 3);
  return numero;
}
function aplicarEstilo() {
  const grupoEstilo = ['newspaper', 'magazine1', 'magazine2'];
  const grupoRotacao = ['rotateleft', 'rotateleft', 'rotateright'];
  const grupoInclinacao = ['skewleft', 'skewleft', 'skewright'];
  const grupoTamanho = ['medium', 'big', 'reallybig'];
  document.querySelectorAll('span').forEach((item) => {
    item.classList.add(grupoEstilo[numeroAleatorio()]);
    item.classList.add(grupoTamanho[numeroAleatorio()]);
    item.classList.add(grupoRotacao[numeroAleatorio()]);
    item.classList.add(grupoInclinacao[numeroAleatorio()]);
  });
}

function gerarCartaMisteriosa() {
  const linha = document.createElement('br');
  const carta = document.createElement('span');
  carta.id = 'carta-gerada';
  carta.innerHTML = textoDaCarta;
  document.getElementById('carta-gerada').appendChild(carta);
  document.getElementById('carta-gerada').appendChild(linha);
}

document.getElementById('criar-carta').addEventListener('click', () => {
  if (document.querySelector('#carta-texto').value === '') {
    return (document.querySelector('#carta-gerada').innerText =
      'por favor, digite o conteúdo da carta.');
  }
  if (
    document.getElementById('carta-gerada').innerText ===
    'por favor, digite o conteúdo da carta.'
  ) {
    return (document.getElementById('carta-gerada').innerText = '');
  }
  gerarCartaMisteriosa();
  aplicarEstilo();
  return textoDaCarta = null;
});
