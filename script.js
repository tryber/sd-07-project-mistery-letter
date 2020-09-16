let btnCreate = document.getElementById('criar-carta');
let inputText = document.getElementById('carta-texto');

const styleGroup =  ['newspaper', 'magazine1', 'magazine2'];
const sizeGroup =  ['medium', 'big', 'reallybig'];
const rotationGroup = [ 'rotateleft', 'rotateright'];
const degreeGroup = ['skewleft', 'skewright'];


function getNumber(number){
  return  Math.floor( Math.random() * Math.floor(number));
}

function cardClick(){
  console.log('oin');
}

function createMagic(){
  let message = inputText.value;
  let letterCreate = document.getElementById('carta-gerada');
  const errorMessage = 'Por favor, digite o conteúdo da carta.';

  if(message === '' || message.trim() === '' ){
    letterCreate.innerText = errorMessage;
  }else{
    let cards = message.split(' ');

    letterCreate.innerText = '';

    for(let i=0; i < cards.length; i += 1){
      let card = document.createElement('span');

      card.innerText = cards[i];

      card.classList.add(styleGroup[getNumber(styleGroup.length)]);
      card.classList.add(sizeGroup[getNumber(sizeGroup.length)]);
      card.classList.add(rotationGroup[getNumber(rotationGroup.length)]);
      card.classList.add(degreeGroup[getNumber(degreeGroup.length)]);

      card.addEventListener('click', cardClick);

      letterCreate.appendChild(card);
    }

  }

}


btnCreate.addEventListener('click', createMagic);
