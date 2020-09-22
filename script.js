const criarCarta = document.querySelector('#criar-carta');
const cartaTexto = document.querySelector('#carta-texto');
const cartaGerada = document.querySelector('#carta-gerada');

const est = ['newspaper', 'magazine1', 'magazine2'];
const tam = ['medium', 'big', 'reallybig'];
const rot = ['rotateleft', 'rotateright'];
const inc = ['skewleft', 'skewright'];

function geraClasses() {      
   const estilos = est[Math.round(Math.random() * (est.length - 1))];
   const tamanhos = tam[Math.round(Math.random() * (tam.length - 1))];
   const rotacao = rot[Math.round(Math.random() * (rot.length - 1))];
   const inclina = inc[Math.round(Math.random() * (inc.length - 1))];
   let classes = [estilos, tamanhos, rotacao, inclina];
   let classesRandom = classes[Math.round(Math.random() * (classes.length - 1))];
   return classesRandom;
}
console.log(geraClasses());

criarCarta.addEventListener('click', () => {
    if (cartaTexto.value === '' || !cartaTexto.value.trim()) {
        cartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
    } else {
        cartaGerada.innerText = '';
        let textoCarta = cartaTexto.value.trim().split(' ');
        console.log(textoCarta);
    for (let index = 0; index < textoCarta.length; index += 1) {
        let spans = document.createElement('span');
        spans.style.display = 'inline-block';
        spans.classList.add(geraClasses());
        spans.classList.add(geraClasses());
        spans.classList.add(geraClasses());
        spans.classList.add(geraClasses());
        if (textoCarta[index].trim()) {
            spans.innerText = textoCarta[index];
            cartaGerada.appendChild(spans);  
        }       
    }
    }
    
});
