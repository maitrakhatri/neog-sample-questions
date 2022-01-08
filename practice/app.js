const display = document.querySelector("h1");

const url = "https://jsonplaceholder.typicode.com/todos"

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        
    })