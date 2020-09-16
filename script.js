let button = document.querySelector("#criar-carta");
let texto = document.querySelector("#carta-gerada");
let input = document.querySelector("#carta-texto");

function adicionaSpam() {
  let re = new RegExp("[0-9A-z] +[A-z0-9 ]+");
  if (input.value == "" || input.value.search(re) != 0) {
    texto.innerText = "Por favor, digite o conteúdo da carta.";
  }

  for (let i = 0; i < input.value.split(" ").length; i += 1) {
    let span = document.createElement("span");
    texto.appendChild(span);
    span.innerText = input.value.split(" ")[i] + " ";
  }
}

button.addEventListener("click", adicionaSpam);

//-------------------------------------------------------
