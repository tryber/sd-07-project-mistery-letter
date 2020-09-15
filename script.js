// Grupos das classes

// `newspaper`, `magazine1`, `magazine2` (Grupo estilo)
// - `medium`, `big`, `reallybig` (Grupo tamanho)
// - `rotateleft`, `rotateright` (Grupo rotação)
// - `skewleft`, `skewright` (Grupo inclinação)


let criarFrase = document.querySelector("#criar-carta");

criarFrase.addEventListener("click",function(){
    let frase =document.querySelector("#carta-texto")
    console.log(frase.value);
    let palavra= "";
    for (let index=0;index<frase.value.length;index+=1){
        if (frase.value[index]!=" "|| frase.value==null){
            var naoVazio = 1;
        }
    }
    if (naoVazio==1){

        document.querySelector("#carta-gerada").innerHTML=""
        frase.value= frase.value + " "          // AINDA NÃO CONSEGUI RESOLVER ESSA GAMBIARRA
    for (let index=0;index<frase.value.length;index+=1){

        if(frase.value[index]!=" "){
            palavra = palavra +frase.value[index];
        } else if (index == frase.value.length-1 || frase.value[index]== " ") {
            let nova = document.createElement('span');
            nova.innerHTML = palavra;
            incluirEstilos(nova);
            document.querySelector("#carta-gerada").appendChild(nova)

            palavra="";
        }
    } 
    //criarEventos;
    } else{
        document.querySelector("#carta-gerada").innerHTML=""
        console.log("passou aqui")
        let nova = document.createElement('span');
        nova.innerHTML= "Por favor, digite o conteúdo da carta."
        document.querySelector("#carta-gerada").appendChild(nova)
        
    }
})

let grupoEstilo = ["newspaper", "magazine1", "magazine"];
let grupoTamanho = ["medium", "big", "reallybig"];
let grupoNotacao = ["rotateleft", "rotateright"];
let grupoInclinacao = ["skewleft", "skewright"];

// INCLUIR ESTILOS

function incluirEstilos(nova){
    let x= Math.floor(Math.random() * grupoEstilo.length);
        let y= Math.floor(Math.random() * grupoTamanho.length);
        let z= Math.floor(Math.random() * grupoNotacao.length);
        let t= Math.floor(Math.random() * grupoInclinacao.length);
        console.log(x +y+z+t)
        nova.classList = "item " + grupoEstilo[x] +" "+ grupoTamanho[y] +" "
                    + grupoNotacao[z]+ " " + grupoInclinacao[t];
    
                }

// function criarEventos(){
//     let todaAFrase = document.querySelectorAll(".")
//     for (let i = 0; i < todaAFrase.length; i+=1) {
//         (function(i) {
//         todaAFrase[i].addEventListener("click", function() {
//             incluirEstilos(todaAFrase[i]);
//             console.log("passou nessa parte")
//          })
//         })(i);
//   }
//   }