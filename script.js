let button = document.querySelector("#criar-carta");
let texto = document.querySelector("#carta-gerada");
let input = document.querySelector("#carta-texto");

function adicionaSpam() {
  let re = new RegExp("[ ]+");
  if (input.value == "" || input.value.search(re) == 0) {
    texto.innerText = "Por favor, digite o conteúdo da carta.";
  }

  for (let i = 0; i < input.value.split(" ").length; i += 1) {
    let span = document.createElement("span");
    texto.appendChild(span);
    span.style.display = "inline-block";
    span.style.margin = "5px";
    span.classList.add(aleatorio1());
    span.classList.add(aleatorio2());
    span.classList.add(aleatorio3());
    span.classList.add(aleatorio4());
    span.innerText = input.value.split(" ")[i];
  }
}

button.addEventListener("click", adicionaSpam);

//-------------------------------------------------------

function aleatorio1() {
  let grupo1 = ["newspaper", "magazine1", "magazine2"];
  let random = Math.round(Math.random() * 2);
  return grupo1[random];
}

function aleatorio2() {
  let grupo2 = ["medium", "big", "reallybig"];
  let random = Math.round(Math.random() * 2);
  return grupo2[random];
}

function aleatorio3() {
  let grupo3 = ["rotateleft", "rotateright"];
  let random = Math.round(Math.random() * 1);
  return grupo3[random];
}

function aleatorio4() {
  let grupo4 = ["skewleft", "skewright"];
  let random = Math.round(Math.random() * 1);
  return grupo4[random];
}
