const OUTPUT = document.querySelector(".cartaGerada");

const defineRandomClass = () => {};

const generateSpanElement = (word) => {
  const element = document.createElement("span");
  element.classList.add(defineRandomClass());
  element.classList.add(defineRandomClass());
  element.classList.add(defineRandomClass());
  element.innerText = word;
  OUTPUT.appendChild(element);
};

document.querySelector(".criarCarta").addEventListener("click", () => {});
