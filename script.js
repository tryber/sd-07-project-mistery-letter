const inputLetter = document.querySelector("#carta-texto");
const buttonLetter = document.querySelector("#criar-carta");
const pLetter = document.querySelector("#carta-gerada");

function createLetter() {
  buttonLetter.addEventListener("click", function () {
    const text = inputLetter.value;
    const arrayText = text.split(" ");

    pLetter.innerHTML = "";

    for (let i = 0; i < arrayText.length; i += 1) {
      let span = document.createElement("span");
      span.innerText = arrayText[i];
      pLetter.appendChild(span);
    }

    if (text === "") {
      alert("Por favor, digite o conteúdo da carta.");
    }

    for (let i = 0; i < text.length; i += 1) {
      if (text[i] !== " ") {
        break;
      } else {
        alert("Por favor, digite o conteúdo da carta.");
        break;
      }
    }

    addClassList();
  });
}

const arrayStyle = [`newspaper`, `magazine1`, `magazine2`];
const arraySize = [`medium`, `big`, `reallybig`];
const arrayRotation = [`rotateleft`, `rotateright`];
const arrayInclination = [`skewleft`, `skewright`];

function addClassList() {
  const span = document.querySelectorAll("span");
  
  for (let i = 0; i < span.length; i += 1) {
    const randomNumber1 = Math.round(Math.random() * 2);
    const randomNumber2 = Math.round(Math.random() * 1);
    console.log(randomNumber1);

    span[i].classList.add(arrayStyle[randomNumber1]);
    span[i].classList.add(arraySize[randomNumber1]);
    span[i].classList.add(arrayRotation[randomNumber2]);
    span[i].classList.add(arrayInclination[randomNumber2]);
  }
  // console.log(arrayStyle[randomNumber]);
}

window.onload = function () {
  createLetter();
};
