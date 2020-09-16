const carta = document.querySelector('#carta-gerada')

const grupoEstilo = ['newspaper', 'magazine1', 'magazine2']
const grupoTamanho = ['medium', 'big', 'reallybig']
const grupoRotacao = ['rotateleft', 'rotateright',]
const grupoInclinacao = ['skewright', 'skewleft']

function setRandomStyles(word) {
  function setRandom(array) {return Math.floor(Math.random()* array.length)}
  word.classList.add(grupoEstilo[setRandom(grupoEstilo)])
  word.classList.add(grupoTamanho[setRandom(grupoTamanho)])
  word.classList.add(grupoRotacao[setRandom(grupoRotacao)])
  word.classList.add(grupoInclinacao[setRandom(grupoInclinacao)])
}

function criarFraseFeia() {
  const fraseUsuario = document.querySelector('#carta-texto')
  if (fraseUsuario.value.length == 0){
    carta.innerHTML = 'Por favor, digite o conteúdo da carta.'
  } else {
      const arrayWords = fraseUsuario.value.split(" ")
      contador.innerHTML = arrayWords.length
      carta.innerHTML = ''
      for (let i = 0; i < arrayWords.length; i += 1) {
        const word = document.createElement('span')
        word.innerHTML = arrayWords[i]
        setRandomStyles(word)
        carta.appendChild(word)
        carta.innerHTML += ' '
      }
    }
}

const contador = document.querySelector('#carta-contador')

const btn = document.querySelector('#criar-carta')
btn.addEventListener('click', criarFraseFeia)

/* console.log(fraseUsuario.value.length) */