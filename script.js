const criarCarta = document.querySelector('#criar-carta');
const cartaTexto = document.querySelector('#carta-texto');
const cartaGerada = document.querySelector('#carta-gerada');

const est = ['newspaper', 'magazine', 'magazine2'];
const tam = ['medium', 'big', 'reallybig'];
const rot = ['rotateleft', 'rotateright'];
const inc = ['skewleft', 'skewright'];

function validaTexto(texto) {
    if (texto.value === '' || !texto.value.trim()) {
        alert('Por favor, digite o conteúdo da carta.');
    }
}

function geraClasses() {      
   const estilos = est[Math.round(Math.random() * (est.length - 1))];
   const tamanhos = tam[Math.round(Math.random() * (tam.length - 1))];
   const rotacao = rot[Math.round(Math.random() * (rot.length - 1))];
   const inclina = inc[Math.round(Math.random() * (inc.length - 1))];
   let classes = [estilos, tamanhos, rotacao, inclina];
   return classes;
}
console.log(geraClasses());

criarCarta.addEventListener('click', () => {
    validaTexto(cartaTexto);
    let textoCarta = cartaTexto.value.split(' ');
    for (let index = 0; index < textoCarta.length; index += 1) {
        let spans = document.createElement('span');
        spans.classList.add(geraClasses()[1]);
        spans.classList.add(geraClasses()[3]);
        spans.classList.add(geraClasses()[0]);
        spans.innerText = textoCarta[index];
        cartaGerada.appendChild(spans);        
    }
});
