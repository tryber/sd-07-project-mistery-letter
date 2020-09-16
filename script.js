let criarFrase = document.querySelector('#criar-carta');

criarFrase.addEventListener('click', function () {
let frase = document.querySelector('#carta-texto');
let palavra = '';
let tamanho = frase.value.length;

for (let index = 0; index < frase.value.length; index += 1) {
if (frase.value[index] != ' ' || frase.value == null) {
var naoVazio = 1;
}
}
if (naoVazio == 1) {
document.querySelector('#carta-gerada').innerHTML = '';

let contador = 0;
for (let index = 0; index <= frase.value.length; index += 1) {
if (index == tamanho || frase.value[index] == ' ') {
let nova = document.createElement('span');
nova.innerHTML = palavra;
incluirEstilos(nova);
console.log(nova.classList);
document.querySelector('#carta-gerada').appendChild(nova);
contador += 1;
palavra = '';
} else if (frase.value[index] != ' ') {
palavra = palavra + frase.value[index];
}
}
let novaLinha = document.createElement('br');
document.querySelector('#carta-gerada').appendChild(novaLinha);
document.querySelector('#carta-contador').innerHTML = contador; //Incluindo contador
} else {
document.querySelector('#carta-gerada').innerHTML = '';
let nova = document.createElement('span');
nova.innerHTML = 'Por favor, digite o conteúdo da carta.';
document.querySelector('#carta-gerada').appendChild(nova);
}
criarEventos();
});

let grupoEstilo = ['newspaper', 'magazine1', 'magazine'];
let grupoTamanho = ['medium', 'big', 'reallybig'];
let grupoNotacao = ['rotateleft', 'rotateright'];
let grupoInclinacao = ['skewleft', 'skewright'];

// INCLUIR ESTILOS

function incluirEstilos(nova) {
let x = Math.floor(Math.random() * grupoEstilo.length);
let y = Math.floor(Math.random() * grupoTamanho.length);
let z = Math.floor(Math.random() * grupoNotacao.length);
let t = Math.floor(Math.random() * grupoInclinacao.length);
console.log(x + ', ' + y + ', ' + z + ', ' + t);
nova.className =
'item ' +
grupoEstilo[x] +
' ' +
grupoTamanho[y] +
' ' +
grupoNotacao[z] +
' ' +
grupoInclinacao[t];
}

function criarEventos() {
let todaAFrase = document.querySelectorAll('.item');
for (let i = 0; i < todaAFrase.length; i += 1) {
(function (i) {
todaAFrase[i].addEventListener('click', function () {
incluirEstilos(todaAFrase[i]);
});
})(i);
}
}

