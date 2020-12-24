let button = document.getElementById("printButton");
let body = document.querySelector("body");
// let ignore = document.getElementById("ignore");
let header = document.querySelector("header");
let footer = document.querySelector("footer")

function cleanUp() {

header.classList.add("ignore");
footer.classList.add("ignore");
console.log("cleanup");

};

window.addEventListener("beforeprint", cleanUp);


function print2PDF() {

window.print();

};

button.addEventListener("click", print2PDF);

function restore() {

  header.classList.remove("ignore");
  footer.classList.remove("ignore");

};

window.addEventListener("afterprint", restore);