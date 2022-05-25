//Events and HTML DOM
//Example
const dateElement = document.getElementById("date");
const dateElementBtn = document.getElementById("btn");
let showTimeAndDate = false;

function showDate() {
  const date = new Date();
  if (!showTimeAndDate) {
    dateElement.innerHTML = date;
    showTimeAndDate = true;
  } else {
    dateElement.innerHTML = "";
    showTimeAndDate = false;
  }
}

//using addEventListener
//same as above
dateElementBtn.addEventListener("click", function showDate() {
  const date = new Date();
  if (!showTimeAndDate) {
    dateElement.innerHTML = date;
    showTimeAndDate = true;
  } else {
    dateElement.innerHTML = "";
    showTimeAndDate = false;
  }
});

const date2 = document.getElementById("date2");
console.log(date2.innerHTML);

//looping througn elements with the same id selector
const pee = document.querySelectorAll("#p");
pee.forEach((pee2) => {
  pee2.innerHTML = "one";
});

//accessing forms in a document
let form = document.forms["form1"];
for (let i = 0; i < form.length; i++) {
  console.log(form.elements[i]);
}
//form validation
function validate() {
  let formInput = form["name"].value;
  if (formInput == "") {
    alert("Name is needed");
    return false;
  }
}
form.addEventListener("submit", validate);

//increment project
const incrementBtn = document.querySelectorAll("#incrementBtn");
const numberInc = document.getElementById("numberInc");

incrementBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    numberInc.innerHTML++;
  });
});

//set attributes to HTML Elements
const image = document.getElementById("image");
image.src = "iphone.jpg";
image.setAttribute("src", "iphone.jpg"); //same as above

//nodes
const nodes = document.getElementById("nodes");
const h1 = document.createElement("h1");
const h1Node = document.createTextNode("My Heading!");
h1.appendChild(h1Node);
nodes.appendChild(h1);

//HTML Collection of div nodes
let divs = document.querySelectorAll("div");
console.log(divs);
console.log(divs[3]); //access specific div

//loop through a collection
for (let i = 0; i < divs.length; i++) {
  divs[i].style.backgroundColor = "red";
}
