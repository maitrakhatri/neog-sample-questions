var btn = document.querySelector("button");
var text = document.querySelector("h1");

btn.addEventListener("click", function clickHandler() {
    text.style.visibility = "hidden";
})