window.onload = function () {

    let textOfLetter = document.querySelector("#carta-texto"); /* input */
    let createdLetter = document.querySelector("#carta-gerada"); /* p */
    let createLetterButton = document.querySelector("#criar-carta"); /* button */
    let letterSection = document.querySelector("#letterBody");
    
    createLetterButton.addEventListener("click", getLetterDone);

    function getLetterDone() {
        createdLetter.innerHTML = "";
        let inputText = textOfLetter.value;
        if (inputText !== "") {
            let eachWord = inputText.split(" ");
            for (index = 0; index < eachWord.length; index += 1) {
                let arrayWord = eachWord[index];
                if (eachWord[index] !== "") {
                    let generateSpanTag = document.createElement("span");                                                                         
                    generateSpanTag.innerHTML = arrayWord;
                    createdLetter.appendChild(generateSpanTag);
                }
            }
        } else {
            alert("Por favor, digite o conteúdo da carta.");
        }
        countingWords();
    }

    function countingWords() {
        let counterExistence = document.querySelector("#carta-contador");
        let spanTags = document.querySelectorAll("span");
        let numberOfSpan = spanTags.length;
        if (letterBody.contains(counterExistence) == true) {
            letterSection.removeChild(counterExistence);
            console.log(numberOfSpan);
            let createCounter = document.createElement("p");
            createCounter.id = "carta-contador";
            createCounter.innerText = numberOfSpan;
            letterSection.appendChild(createCounter);
        } else {
            console.log(numberOfSpan);
            let createCounter = document.createElement("p");
            createCounter.id = "carta-contador";
            createCounter.innerText = numberOfSpan;
            letterSection.appendChild(createCounter);
        }

    }

    /* Cada palavra deve aparecer dentro de uma tag `span`.
* As tags `span` devem ser adicionadas como filha do parágrafo que possui o id `carta-gerada`
} */

}