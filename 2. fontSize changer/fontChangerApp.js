var incbtn = document.querySelector("#inc");
var decbtn = document.querySelector("#dec");
var text = document.querySelector("#inputtext");
var computedStyle = window.getComputedStyle(text, null).getPropertyValue('font-size');
var fontSize = parseFloat(computedStyle);

incbtn.addEventListener("click", function incClickHandler() {
    text.style.fontSize = (fontSize + 2) + 'px';
    
});

decbtn.addEventListener("click", function decClickHandler() {
    text.style.fontSize = (fontSize - 2) + 'px';
});