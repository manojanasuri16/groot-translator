var inputText = document.querySelector("#input-box")
var btnTranslate = document.querySelector("#translate-btn")
var outputDiv = document.querySelector("#output-div")

var url = "https://api.funtranslations.com/translate/groot.json"

function errorHandler(error) {
  console.log("ERROR "+error);
  alert("ERROR! API Limit exceeded, Please try again after 1 hour");
}

function clickHandler() {  
  var inputTxt=inputText.value
  var requiredURL = url + '?' + 'text=' + inputTxt
  fetch(requiredURL)
    .then(response => response.json())
    .then(json => {
      outputDiv.innerText = json.contents.translated;
    })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler)
