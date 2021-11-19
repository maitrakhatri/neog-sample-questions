var text = document.querySelector("input");
var output = document.querySelector(".output");
var btn = document.querySelector("button");

var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var link = url + "?text=" + text.value;

btn.addEventListener("click", function clickHandler() {
    
    fetch(link)
    .then(response => response.json())
    .then(json => {
        var reqOutput = json.contents.translation;
        output.innerText = reqOutput;
    })
})