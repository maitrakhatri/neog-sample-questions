var text = document.querySelector("#giventext");
var btns = document.querySelectorAll("button");
var output = document.querySelector("#output");

btns[3].addEventListener("click", function clcikHandler() {
    output.innerHTML = text.value;
});

var computedStyle = window.getComputedStyle(output, null).getPropertyValue('color');

btns[0].addEventListener("click", function redFont() {
    output.style.color = 'red'
});

btns[1].addEventListener("click", function greenFont() {
    output.style.color = 'green'
});

btns[2].addEventListener("click", function blueFont() {
    output.style.color = 'blue'
});