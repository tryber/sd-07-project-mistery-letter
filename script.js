const inputCartaTexto = document.getElementById('carta-texto');
const btnCriarCarta = document.getElementById('criar-carta');


const criaSpan = function (str) {
    let newSapn = document.createElement('span');
    newSapn.textContent = str;
    
    return newSapn;
}

const geraCarta = function (){
    let text = inputCartaTexto.value.split(' ');
    console.log(text);
    const elemPai = document.getElementById("carta-gerada");

    text.forEach(word => {
        const newSpan = criaSpan(word);
        elemPai.appendChild(newSpan);
    });
}

window.onload = function () {
    btnCriarCarta.addEventListener('click', geraCarta);

}