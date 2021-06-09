var txtInput = document.querySelector("#input-txt");
var btnTranslator = document.querySelector("#btn-translate");
var txtOutput = document.querySelector("#output-txt");

var serverURL = "https://api.funtranslations.com/translate/groot.json"

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
};

function clickHandler() {
    var inputText = txtInput.value;
    
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(data => {
        var textTranslate = console.log(data);
        txtOutput.innerText = textTranslate;
    });

};

btnTranslator.addEventListener("click", clickHandler)