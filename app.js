var btnTranslate = document.querySelector("#btn-Translate");
var txtInput = document.querySelector("#text-Id");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/yoda.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text;
}

function clickEventHandler() {
    var inputText = txtInput.value; //taking input

    //calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            outputDiv.innerText = json.contents.translated; //output
        })
};

btnTranslate.addEventListener("click", clickEventHandler);