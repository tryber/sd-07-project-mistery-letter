let textoDaCarta;
let arrayCarta = [];
// https://stackoverflow.com/a/50135988 fonte .replace()
document.getElementById('carta-texto').addEventListener('keydown', () => {
  textoDaCarta = document.getElementById('carta-texto').value.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span>$2</span>');
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

function aplicarEstiloNoClick(){
  document.querySelectorAll('span').forEach((item) => {
    item.addEventListener('click', () => {
      aplicarEstilo();
    })
  })
}

function gerarCartaMisteriosa() {
  const linha = document.createElement('br');
  const carta = document.createElement('span');
  carta.innerHTML = textoDaCarta;
  document.getElementById('carta-gerada').appendChild(carta);
  document.getElementById('carta-gerada').appendChild(linha);
}

document.getElementById('criar-carta').addEventListener('click', () => {
  if (document.querySelector('#carta-texto').value === '') {
    let erro = document.createElement('p');
    erro.innerText = "Por favor, digite o conteúdo da carta."
    return (document.getElementById('carta-gerada').appendChild(erro));
  }
  if (document.getElementById('carta-gerada').firstElementChild !== null){
  if (
    document.getElementById('carta-gerada').firstChild.innerText === 'Por favor, digite o conteúdo da carta.' && document.getElementById('carta-texto').value !== ''
  ) {
    return (document.getElementById('carta-gerada').firstChild.remove());
  }}
  gerarCartaMisteriosa();
  aplicarEstilo();
  aplicarEstiloNoClick();
});
