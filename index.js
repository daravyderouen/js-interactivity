console.log('hello world');
/*
function addMovie (event) {
let inputField = document.querySelector("input");
console.log(inputField)
let movie = document.querySelector('movie')

const li =document.createElement('li')

movie.appendChild(li);

let movieTitle = inputField

movie.appendChild(movieTitle);


}    

addMovie()

*/

let addMovie = event => {
event.preventDefault();
let inputField = document.querySelector("input");

//console.log(inputField);
let movie = document.createElement("li");

let movieTitle = document.createElement('span')

let addButton = document.querySelector("#add");

//console.log(movieTitle);
movieTitle.textContent =inputField.value;

movie.appendChild(movieTitle);

let deleteButton = document.createElement("remove");
deleteButton.textContent=inputField.value("x");

let list = document.querySelector("ul");
//console.log(list)

list.appendChild(movie);

inputField.value = "";

};

//addMovie();

let form = document.querySelector("form");
//console.log(form);
form.addEventListener("submit", addMovie);

deleteButton.addEventListener("click", 'delete');



