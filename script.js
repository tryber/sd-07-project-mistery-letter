const botaoGerarCarta = document.getElementById('criar-carta');
botaoGerarCarta.addEventListener('click', function () {
  const textoDigitado = document.getElementById('carta-texto').value;
  const pSaidaTextoDigitado = document.getElementById('carta-gerada');
  const qtdLetras = document.getElementById('carta-contador');
  if (!textoDigitado.length || textoDigitado.trim() === '') {
    pSaidaTextoDigitado.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    qtdLetras.innerText = textoDigitado.length;
    pSaidaTextoDigitado.innerText = textoDigitado;
    pSaidaTextoDigitado.classList.add('magazine2');
  }
});
