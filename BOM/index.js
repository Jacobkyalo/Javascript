// The Window Object
window.document.body.style.background = "#ccc";
console.log(window.innerHeight);
console.log(window.innerWidth);

//screen
console.log(screen.height);
console.log(screen.width);
console.log(screen.colorDepth);

// JavaScript Window Location
console.log(window.location.href);
console.log(window.location.hostname);
console.log(window.location.pathname);
console.log(window.location.protocol);
console.log(window.location.port);

window.document.getElementById("btn").addEventListener("click", () => {
  window.location.assign("https://www.google.com");
});

//navigator
console.log(navigator.cookieEnabled);
console.log(navigator.onLine);

//JavaScript Popup Boxes
//window.alert("This is a alert popup box!");
//window.confirm("Confirm?");

let name = window.prompt("enter your name");
console.log(name);

document.cookie = "we use cookies";
