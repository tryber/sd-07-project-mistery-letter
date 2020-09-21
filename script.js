let botaoCriar = document.getElementById("criar-carta");
let textoAInserir = document.getElementById("carta-texto");
let textoInserido = document.getElementById("carta-gerada");

botaoCriar.addEventListener("click", function() {
    textoInserido.innerHTML = textoAInserir.value;
});