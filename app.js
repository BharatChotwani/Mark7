var txtInput = document.querySelector("#input-txt");
var btnTranslator = document.querySelector("#btn-translate");
var txtOutput = document.querySelector("#output-txt");

function clickHandler() {
    var inputText = txtInput.value;
    inputText = txtOutput.innerText
};

btnTranslator.addEventListener("click", clickHandler)