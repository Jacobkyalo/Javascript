// JavaScript Forms Validation API
const btn = document.getElementById("btn");
btn.addEventListener("click", validate);

function validate() {
  const input = document.getElementById("input");
  if (!input.checkValidity()) {
    document.getElementById("msg").innerHTML = input.validationMessage;
  } else {
    console.log("success");
  }
}

// Web History API
//back() method
const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", goBack);

function goBack() {
  window.history.back();
}

//other methods are go() and forward()

//Web Storage API
localStorage.setItem("carName", "Ford");
localStorage.getItem("carName");

localStorage.setItem("color", "dark");
localStorage.getItem("color");
// localStorage.clear(); //clears all the fields
//localStorage.removeItem("color"); //removes the key-value pair, color-dark

sessionStorage.setItem("jacob", 30); //closes when a browser is closed
sessionStorage.getItem("jacob");

// Web Workers API
// A web worker is a JavaScript running in the background, without affecting the performance of the page
