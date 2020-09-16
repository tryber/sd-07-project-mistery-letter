let criarFrase = document.querySelector("#criar-carta");

criarFrase.addEventListener("click",function(){
    let frase = document.querySelector("#carta-texto")
    let palavra= "";
    let tamanho = frase.value.length;

    for (let index=0;index<frase.value.length;index+=1){
        if (frase.value[index]!=" "|| frase.value==null){
            var naoVazio = 1;
        }
    }
    if (naoVazio==1){

        document.querySelector("#carta-gerada").innerHTML=""
        // frase.value= frase.value + " "          // AINDA NÃO CONSEGUI RESOLVER ESSA GAMBIARRA
        let contador = 0
        for (let index=0;index<=frase.value.length;index+=1){

        // if(frase.value[index]!=" "){
        //     palavra = palavra +frase.value[index];
        // } else if (index == tamanho || frase.value[index]== " ") {
        //     let nova = document.createElement('span');
        //     nova.innerHTML = palavra;
        //     console.log(index)
        //     incluirEstilos(nova);
        //     document.querySelector("#carta-gerada").appendChild(nova)
        //     contador +=1;
        //     palavra="";
        // }
        if(index == tamanho || frase.value[index]== " "){
            let nova = document.createElement('span');
            nova.innerHTML = palavra;
            console.log(index)
            incluirEstilos(nova);
            document.querySelector("#carta-gerada").appendChild(nova)
            contador +=1;
            palavra="";
        } else if(frase.value[index]!=" "){
            palavra = palavra +frase.value[index];
        }
    } 
    // document.querySelector("#carta-texto").value[document.querySelector("#carta-texto").value.length-1] = ""; 
    document.querySelector("#carta-contador").innerHTML = contador; //Incluindo contador
    //criarEventos;
    } else{
        document.querySelector("#carta-gerada").innerHTML=""
        console.log("passou aqui")
        let nova = document.createElement('span');
        nova.innerHTML= "Por favor, digite o conteúdo da carta."
        document.querySelector("#carta-gerada").appendChild(nova)
        
    }

    criarEventos();
})

let grupoEstilo = ["newspaper", "magazine1", "magazine"];
let grupoTamanho = ["medium", "big", "reallybig"];
let grupoNotacao = ["rotateleft", "rotateright"];
let grupoInclinacao = ["skewleft", "skewright"];

// INCLUIR ESTILOS

function incluirEstilos(nova){
    console.log("incluindo estilos");
    let x= Math.floor(Math.random() * grupoEstilo.length);
        let y= Math.floor(Math.random() * grupoTamanho.length);
        let z= Math.floor(Math.random() * grupoNotacao.length);
        let t= Math.floor(Math.random() * grupoInclinacao.length);
        nova.classList = "item " + grupoEstilo[x] +" "+ grupoTamanho[y] +" "
                    + grupoNotacao[z]+ " " + grupoInclinacao[t];
    
                }

function criarEventos(){
    let todaAFrase = document.querySelectorAll(".item");
    console.log("entrou no criar eventos")
    for (let i = 0; i < todaAFrase.length; i+=1) {
        (function(i) {
        todaAFrase[i].addEventListener("click", function() {
            incluirEstilos(todaAFrase[i]);
            console.log("passou nessa parte")
         })
        })(i);
  }
  }