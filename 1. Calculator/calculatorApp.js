var firstInput = document.querySelector("#input1");

var secondInput = document.querySelector("#input2");

var output = document.querySelector("#output");

var add = document.querySelector("#add");

var minus = document.querySelector("#minus");

var mul = document.querySelector("#mul");

var division = document.querySelector("#division");

add.addEventListener("click", function addition() {
    var i1 = Number(firstInput.value);
    var i2 = Number(secondInput.value);
    output.innerText = "Result: " + (i1+i2)
})

minus.addEventListener("click", function sub() {
    var i1 = Number(firstInput.value);
    var i2 = Number(secondInput.value);
    output.innerText = "Result: " + (i1-i2);
})

mul.addEventListener("click", function multi() {
    var i1 = Number(firstInput.value);
    var i2 = Number(secondInput.value);
    output.innerText = "Result: " + (i1*i2);
})

division.addEventListener("click", function divi() {
    var i1 = Number(firstInput.value);
    var i2 = Number(secondInput.value);
    output.innerText = "Result: " + (i1/i2);
})