let button = document.querySelector("#criar-carta");
let texto = document.querySelector("#carta-gerada");
let input = document.querySelector("#carta-texto");

function adicionaSpam() {
  for (let i = 0; i < input.value.split(" ").length; i += 1) {
    let span = document.createElement("span");
    texto.appendChild(span);
    span.innerText = input.value.split(" ")[i] + " ";
  }
}

button.addEventListener("click", adicionaSpam);
