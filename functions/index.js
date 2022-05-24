// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).
// defined with function keyword followed by name and parentheses()
//code to be executed is placed inside curly brackets ({})

function printName(name) {
  console.log("My name is", name);
  console.log(arguments.length); //returns the number of arguments passed to the function
}

printName("Jacob");

//return statement
function ADD_NUMS(num1, num2) {
  result = num1 + num2;
  return result;
}

let answer = ADD_NUMS(23, 34);
console.log(answer);

function WEIGHT_CONVERTER(kgs) {
  const TO_POUNDS = 2.2046;
  weightInPounds = kgs * TO_POUNDS;
  return "Your weight in pound is " + weightInPounds;
}
let weight = WEIGHT_CONVERTER(60);
console.log(weight);

//assigning WEIGHT_CONVERTER to a DOM element
const paragraph = (document.getElementById("paragraph").innerHTML =
  WEIGHT_CONVERTER(60));

//function like a variable (anonymous function)
let SUBTRACT_NUMS = function (a, b) {
  return a - b;
};
let ans = SUBTRACT_NUMS(10, 8);
console.log(ans);

//function constructor,,,not recommended
let b = new Function("x", "y", "console.log(x+y)");
b(22, 33);

//function hoisting
GREETING();
function GREETING() {
  console.log("Hi Mom!");
}

//self-invoking function, they don't need to be called

(function SELF_INVOKING() {
  console.log("I am a self-invoking function!");
})();

//typeof
console.log(typeof WEIGHT_CONVERTER); //returns function

//ARROW FUNCTIONS
//Arrow functions allows a short syntax for writing function expressions.
//no use of function and return keywords

const MULTIPLY_NUMS = (x, y) => x * y;
console.log(MULTIPLY_NUMS(2, 2)); //returns 4

(function ADD(a, b) {
  if (b == undefined) {
    b = 3; //use 3 if b is not passed
  }
  console.log(a + b);
})(2);

//function with default parameters
(function MODULUS(a = 65, b = 3) {
  console.log(a % b);
})();

//function to add arguments
function addAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

let ans2 = addAll(1, 2, 3, 45, 55);
console.log(ans2);

//function as an object method

const person = {
  name: "John Doe",
  age: 30,
  dispalyInfo: function () {
    return "My name is " + this.name + " and i am " + this.age + " years old";
  },
};

//call() function
console.log(person.dispalyInfo());

const one = {
  full: function (year, another) {
    return this.model + " " + this.name + " " + year;
  },
};
const car = {
  name: "Rover",
  model: "WWW-234",
};

console.log(one.full.call(car, 2002));

//bind() function
const dog = {
  name: "Gift",
  age: 2,
  color: "black",
  displayDog: function () {
    return this.name + " " + this.age + " " + this.color;
  },
};

const dog2 = {
  name: "Bola",
  age: 3,
  color: "white",
};

let res = dog.displayDog.bind(dog2);
console.log(res);

//closures
const add = (function () {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})();
console.log(add());
console.log(add());
console.log(add());
