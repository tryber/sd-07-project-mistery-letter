const elementP=document.getElementById('carta-gerada');
const btn = document.getElementById('criar-carta');
btn.addEventListener('click',function(){
  const cartaTexto = document.getElementById('carta-texto').value;
  let cartaTextoSplit=cartaTexto.split(' ');


//  console.log(cartaTextoSplit.length);

  for(let index=0;index<cartaTextoSplit.length;index+=1){

    const elementSpan=document.createElement('span');
    elementSpan.innerHTML=cartaTextoSplit[index];
    elementP.appendChild(elementSpan);

  }



})

