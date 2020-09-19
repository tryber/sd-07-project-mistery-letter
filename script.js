const containerCarta = document.querySelector('#carta-gerada');
const novaCarta = document.querySelector('#criar-carta');
const textoInserido = document.querySelector('#carta-texto');

// Solução p/ espaçamento em branco encontrado no seguinte link: https://bit.ly/3iGxe4F
function checarEspaco(texto) {
  if (/^\s/.test(texto)) {
    texto = '';
  }
  return texto;
}

novaCarta.addEventListener('click', () => {
  const caixaTexto = textoInserido.value;

  if (checarEspaco(caixaTexto).length !== 0) {
    const carta = document.createElement('span');
    carta.id = 'criar-carta';

    const texto = document.createTextNode(caixaTexto);
    carta.appendChild(texto);

    containerCarta.appendChild(carta);
  } else {
    alert('Por favor, digite o conteúdo da carta.');
  }
});
