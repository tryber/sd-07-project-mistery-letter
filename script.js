let btnCreate = document.getElementById('criar-carta');
let inputText = document.getElementById('carta-texto');

function createMagic(){
  let message = inputText.value;
  let letterCreate = document.getElementById('carta-gerada');
  const errorMessage = 'Por favor, digite o conteúdo da carta.';

  if(message === '' || !message.includes(' ') ){
    letterCreate.innerText = errorMessage;
  }else{
    console.log('n ta vazio');
  }

}


btnCreate.addEventListener('click', createMagic);
