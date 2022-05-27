//Comparison and Logical operators are used to test for true or false.
//comparison operators are ==, ===, !=, !==, <, >, <=, >=
//comparison operators are used with conditionals to compare values and take actions depending on the result
//e.g
const age = 20;
if (age > 18) {
  console.log("You are an adult");
} else {
  console.log("You are a child");
}

//logical operators
//They determine the logic between variables or values
//they include &&, ||, !
//e.g
let number = 30;
if (number > 10 && number < 40) {
  console.log(`${number} is between 10 and 40`);
} else {
  console.log("Error!");
}

if (number >= 20 || number > 80) {
  console.log(`${number} is between 20 and 80`);
} else {
  console.log("Error!");
}

//ternary operator
//same as if..else
let vehicles = 200;
let res =
  vehicles > 100
    ? "Vehicles count is above 100"
    : "Vehicle count is less than 100";
console.log(res);

let age2 = Number("18");
if (isNaN(age)) {
  console.log("Error in input");
} else {
  console.log(age >= 18 ? "vote" : "do not vote");
}
console.log(typeof age2);

//conditionals
//they  perform actions based on certain conditions
//if
let total = 300;
if (total > 200) {
  console.log(`${total} is greater than 200`);
}

//else
if (total > 500) {
  console.log(`${total} is greater than 200`);
} else {
  console.log(`${total} is less than 500`);
}

//else if
if (total > 500) {
  console.log(`${total} is greater than 200`);
} else if (total <= 600) {
  console.log(`${total} is less than or equal to 600`);
} else {
  console.log(`${total} is less than 500`);
}

//switch statement
switch (new Date().getDay()) {
  case 0:
    console.log("It's Sunday");
    break;
  case 1:
    console.log("It's Monday");
    break;
  case 2:
    console.log("It's Tuesday");
    break;
  case 3:
    console.log("It's Wednesday");
    break;
  case 4:
    console.log("It's Thursday");
    break;
  case 5:
    console.log("It's Friday");
    break;
  case 6:
    console.log("It's Saturday");
    break;

  default:
    console.log("Invalid day of the week!");
    break;
}

//switch small project
let favourite = ["lemonJuice", "orangeJuice", "mangoJuice"];
switch (favourite[0]) {
  case favourite[0]:
    console.log(`You love ${favourite[0]}!`);
    break;
  case favourite[1]:
    console.log(`You love ${favourite[1]}!`);
    break;
  case favourite[2]:
    console.log(`You love ${favourite[2]}!`);
    break;

  default:
    console.log(`Invalid favourite juice!`);
    break;
}
