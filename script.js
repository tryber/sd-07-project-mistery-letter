function contaPalavras(frase) {
  let cont = 0;
  for (let index = 0; index < frase.length; index += 1) {
    if (frase[index] === ' ') {
      cont += 1;
    }
  }
  return cont + 1;
}
const botaoGerarCarta = document.getElementById('criar-carta');
botaoGerarCarta.addEventListener('click', function () {
  const textoDigitado = document.getElementById('carta-texto').value;
  const pSaidaTextoDigitado = document.getElementById('carta-gerada');
  const qtdPalavras = document.getElementById('carta-contador');
  if (!textoDigitado.length || textoDigitado.trim() === '') {
    pSaidaTextoDigitado.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    qtdPalavras.innerText = contaPalavras(textoDigitado);
    pSaidaTextoDigitado.innerHTML = '<span>' + textoDigitado + '</span>';
    pSaidaTextoDigitado.classList.add('magazine2');
  }
});
