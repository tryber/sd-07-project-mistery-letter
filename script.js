const inputLetter = document.querySelector("#carta-texto");
const buttonLetter = document.querySelector("#criar-carta");
const pLetter = document.querySelector("#carta-gerada");

function createLetter () {
  buttonLetter.addEventListener("click", function () {
    const text = inputLetter.value
    const arrayText = text.split(" ");

    for(let i = 0; i< arrayText.length; i+= 1) {
      let span = document.createElement("span");
      span.innerText = arrayText[i];
      pLetter.appendChild(span);
    }
    // console.log(arrayText.join(" "));
  })
}

window.onload = function () {
  createLetter();
}
