var textcontent = document.querySelector("#textcontent");
var btns = document.querySelectorAll("button");
var output = document.querySelector("#output");

btns[0].addEventListener("click", function h1() {
    output.innerHTML= "<h1> " + textcontent.value + "</h1>";
});

btns[1].addEventListener("click", function h2() {
    output.innerHTML= "<h2> " + textcontent.value + "</h2>";
});

btns[2].addEventListener("click", function h3() {
    output.innerHTML= "<h3> " + textcontent.value + "</h3>";
});