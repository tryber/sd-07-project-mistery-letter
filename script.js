function contaPalavras (frase) {
    let cont = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === ' ') {
            cont++;
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
    pSaidaTextoDigitado.innerText = textoDigitado;
    pSaidaTextoDigitado.classList.add('magazine2');
  }
});
