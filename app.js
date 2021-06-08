var txtInput = document.querySelector("#input-txt");
var btnTranslator = document.querySelector("#btn-translate");
var txtOutput = document.querySelector("#output-txt");

var serverURL = "https://api.funtranslations.com/translate/groot.json"

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
};

function clickHandler() {
    var inputText = txtInput.value;
    inputText = txtOutput.innerText
};

btnTranslator.addEventListener("click", clickHandler)