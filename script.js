window.onload = function () {

    let textOfLetter = document.querySelector("#carta-texto"); /* input */
    let createdLetter = document.querySelector("#carta-gerada"); /* p */
    let createLetterButton = document.querySelector("#criar-carta"); /* button */

    createLetterButton.addEventListener("click", getLetterDone);

    function getLetterDone() {
        let inputText = textOfLetter.value;
        if (inputText !== "") {
            let eachWord = inputText.split(" ");
            for (index = 0; index < eachWord.length; index += 1) {
                let arrayWord = eachWord[index];
                if (eachWord[index] !== "") {
                    let generateSpanTag = document.createElement("span");                                                                         
                    generateSpanTag.innerHTML = arrayWord;
                    createdLetter.appendChild(generateSpanTag);
                    console.log(generateSpanTag);
                }
            }
        } else {
            alert("Por favor, digite o conteúdo da carta.");
        }
        
    }
    /* Cada palavra deve aparecer dentro de uma tag `span`.
* As tags `span` devem ser adicionadas como filha do parágrafo que possui o id `carta-gerada`
} */

}