//JS async are
// callbacks
//asynchronous
//promises
//async-await

//A callback is a function passed as an argument to another function

const btn = document.getElementById("btn");

//displayGreet is a callback function
btn.addEventListener("click", displayGreet);

function displayGreet() {
  console.log("Hi Mom!");
}

//Functions running in parallel with other functions are called asynchronous
//e.g

setTimeout(() => console.log("Hi Mom!"), 2000); //displays Hi Mom! after 2 seconds

//setInterval(() => console.log(new Date()), 1000); //displays date and time after every 1s,,, commented due to memory issues

//Promises
let promise1 = new Promise((req, res) => {
  setTimeout(() => req("I love JS"), 2000);
});
promise1.then((value) => {
  document.getElementById("democ").innerHTML = value;
  (error) => {
    console.log(error);
  };
});
