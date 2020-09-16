let textoDaCarta = '';
document.getElementById('carta-texto').addEventListener('keyup', () =>{
    textoDaCarta = document.getElementById('carta-texto').value;
});

function gerarCartaMisteriosa (){
    let carta = document.createElement('span');
    carta.innerText = textoDaCarta;
    document.getElementById('carta-gerada').appendChild(carta);
}

document.getElementById('criar-carta').addEventListener('click', gerarCartaMisteriosa);