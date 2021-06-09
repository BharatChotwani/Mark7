var txtInput = document.querySelector("#input-txt");
var btnTranslator = document.querySelector("#btn-translate");
var txtOutput = document.querySelector("#output-txt");

var serverURL = "https://api.funtranslations.com/translate/groot.json"

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
};

function errorHandler(error){
    console.log("error occured", error);
    alert("max limit reached")
};

function clickHandler() {
    var inputText = txtInput.value;
    
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(data => {
        var textTranslate = data.contents.translated;
        txtOutput.innerText = textTranslate;
    })
    .catch (errorHandler)
};

btnTranslator.addEventListener("click", clickHandler)