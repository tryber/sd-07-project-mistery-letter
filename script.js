let textoDaCarta;
let textoInvalido = 'Por favor, digite o conteúdo da carta.';
// https://stackoverflow.com/a/50135988 fonte .replace()
document.getElementById("carta-texto").addEventListener("keyup", () => {
  textoDaCarta = document.getElementById("carta-texto").value.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, "$1<span class=texto>$2</span>");
});

function numeroAleatorio(){
    const numeroAleatorio = Math.floor(Math.random()*3);
    return numeroAleatorio;
}
function aplicarEstilo(){
    let grupoEstilo = ['newspaper','magazine1','magazine2'];
    let grupoRotacao = ['rotateleft','rotateleft','rotateright'];
    let grupoInclinacao = ['skewleft','skewleft','skewright'];
    let grupoTamanho = ['medium','big','reallybig']
    document.querySelectorAll('span').forEach((item) =>{
            item.classList.add(grupoEstilo[numeroAleatorio()]);
            item.classList.add(grupoTamanho[numeroAleatorio()]);
            item.classList.add(grupoRotacao[numeroAleatorio()]);
            item.classList.add(grupoInclinacao[numeroAleatorio()]);
    })
}

function gerarCartaMisteriosa() {
  let linha = document.createElement('br')
  let carta = document.createElement("span");
  carta.id = "carta-gerada";
  carta.innerHTML = textoDaCarta;
  document.getElementById("carta-gerada").appendChild(carta);
  document.getElementById('carta-gerada').appendChild(linha);
}

document.getElementById("criar-carta").addEventListener("click", () => {
  if(document.querySelector('#carta-texto').value === ""){
    return document.querySelector('#carta-gerada').innerText = 'por favor, digite o conteúdo da carta.';
  }
  if(document.getElementById('carta-gerada').innerText === 'por favor, digite o conteúdo da carta.'){
    document.getElementById('carta-gerada').innerText = "";
  }
  gerarCartaMisteriosa();
  aplicarEstilo();
  textoDaCarta = null;
});
