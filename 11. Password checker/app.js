var pass = document.querySelector("input");
var butn = document.querySelector("button");
var output = document.querySelector(".output");
var dbtn = document.querySelector("#d");

butn.addEventListener("click", function clcikHandler() {
    
    var passLenght = pass.value.length;

    if(passLenght < 10) {
        output.innerText = "Error !! Password must be longer than 10 characters";
        pass.style.borderColor = 'red';
        dbtn.disabled = true;
    }

    else {
        output.innerText = "Success";
        pass.style.borderColor = 'green';
        dbtn.disabled = false;
    }
})