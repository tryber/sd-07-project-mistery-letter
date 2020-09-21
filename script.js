let botaoCriar = document.getElementById("criar-carta");
let textoAInserir = document.getElementById("carta-texto");
let textoInserido = document.getElementById("carta-gerada");

botaoCriar.addEventListener("click", function() {
    textoInserido.innerHTML = textoAInserir.value.split(" ");
    textoInserido.classList.add("magazine1");
});

//for (i = 0; i < textoInserido.innerHTML.length; i++);