//loops execute a block of code several times
//For loop
//general example
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

//for loop with arrays
const fruits = ["Mango", "Apple", "Orange", "lemon", "Grape"];
for (let k = 0; k < fruits.length; k++) {
  console.log(fruits[k]);
}

//for in and arrays
for (let p in fruits) {
  console.log(fruits[p]);
}
//forEach and arrays
fruits.forEach((fruit) => {
  console.log(fruit.concat("s"));
});
//for of and arrays
for (const j of fruits) {
  console.log(j.toUpperCase());
}

//for in loop and objects
const car = {
  name: "Ford",
  weight: 1200,
  model: 264,
  hasWheels: true,
};

for (const i in car) {
  console.log(car[i]);
}

//while loop
//general example
let b = 1;
while (b <= 5) {
  console.log(b);
  b++;
}
//while loop and arrays
let f = 0;
while (f < fruits.length) {
  console.log(fruits[f]);
  f++;
}

//do while loop
let result = "";
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);

//break and continue
for (let count = 1; count <= 10; count++) {
  if (count == 5) {
    break;
  }
  console.log(count);
}

for (let count = 1; count <= 10; count++) {
  if (count == 5) {
    continue;
  }
  console.log(count);
}

console.log(fruits.constructor);
//type conversion
let date = new Date();
console.log(String(date));
console.log(Number(true));
