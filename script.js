let textoDaCarta;
let arrayCarta = [];
document.getElementById('carta-texto').addEventListener('change', () => {
  textoDaCarta = document.getElementById('carta-texto').value;
});

function numeroAleatorio(n) {
  const numero = Math.floor(Math.random() * n);
  return numero;
}
function aplicarEstilo() {
  const grupoEstilo = ['newspaper', 'magazine1', 'magazine2'];
  const grupoRotacao = ['rotateleft', 'rotateright'];
  const grupoInclinacao = ['skewleft', 'skewright'];
  const grupoTamanho = ['medium', 'big', 'reallybig'];
  document.querySelectorAll('span').forEach((item) => {
    item.className = '';
    item.classList.add(grupoEstilo[numeroAleatorio(3)]);
    item.classList.add(grupoTamanho[numeroAleatorio(3)]);
    item.classList.add(grupoRotacao[numeroAleatorio(2)]);
    item.classList.add(grupoInclinacao[numeroAleatorio(2)]);
  });
}

function aplicarEstiloNoClick() {
  document.querySelectorAll('span').forEach((item) => {
    item.addEventListener('click', () => {
      aplicarEstilo();
    });
  });
}

function gerarCartaMisteriosa() {
  arrayCarta = textoDaCarta.split(' ');
  for (let index = 0; index < arrayCarta.length; index += 1) {
    const texto = document.createElement('span');
    texto.innerText = arrayCarta[index];
    document.getElementById('carta-gerada').appendChild(texto);
    document.getElementById('carta-contador').innerText = index + 1;
  }
  arrayCarta = [];
}

document.getElementById('criar-carta').addEventListener('click', () => {
  const textoCarta = document.getElementById('carta-texto').value;
  if (textoCarta === '' || textoCarta.trim().length === 0) {
    const erro = document.createElement('p');
    erro.innerText = 'Por favor, digite o conteúdo da carta.';
    return document.getElementById('carta-gerada').appendChild(erro);
  }
  if (document.getElementById('carta-gerada').firstElementChild !== null) {
    if (
      document.getElementById('carta-gerada').firstChild.innerText ===
        'Por favor, digite o conteúdo da carta.' &&
      document.getElementById('carta-texto').value !== ''
    ) {
      return document.getElementById('carta-gerada').firstChild.remove();
    }
  }
  document.getElementById('carta-gerada').innerHTML = '';
  gerarCartaMisteriosa();
  aplicarEstilo();
  return aplicarEstiloNoClick();
});
