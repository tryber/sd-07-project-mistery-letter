const OUTPUT = document.querySelector(".cartaGerada");
const INPUT = document.querySelector(".texto");

const defineRandomClass = (type) => {
  let choosen = 0;
  let arrayValues = [];
  switch (type) {
    case 1:
      choosen = Math.floor(Math.random() * 3);
      arrayValues = ["newspaper", "magazine1", "magazine2"];
      break;
    case 2:
      choosen = Math.floor(Math.random() * 3);
      arrayValues = ["medium", "big", "reallybig"];
      break;
    case 3:
      choosen = Math.floor(Math.random() * 2);
      arrayValues = ["rotateleft", "rotateright"];
      break;
    case 4:
      choosen = Math.floor(Math.random() * 2);
      arrayValues = ["skewleft", "skewright"];
      break;
  }
  return arrayValues[choosen];
};

const generateSpanElement = (word) => {
  const element = document.createElement("span");
  element.classList.add(defineRandomClass(1));
  element.classList.add(defineRandomClass(2));
  element.classList.add(defineRandomClass(3));
  element.classList.add(defineRandomClass(4));
  element.innerText = word;
  OUTPUT.appendChild(element);
};

document.querySelector(".criarCarta").addEventListener("click", () => {
  const arrayWords = INPUT.value.split(" ");
  for (let i = 0; i < arrayWords.length; i += 1) {
    generateSpanElement(arrayWords[i]);
  }
});
