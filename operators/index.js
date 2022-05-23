//Assignment operator(=)

let x = 33;
let y = 43;
let z = x + y;

console.log(z);

//more assignment operators
//+=, -=, *=, /=, %=, **=
let num = 10;
let num4 = 40;

console.log((num += 2)); //returns 12
console.log((num -= 2)); //returns 10
console.log((num *= 2)); //returns 20
console.log((num /= 2)); //returns 10
console.log((num %= 2)); //returns 0
console.log((num4 **= 2)); //returns 1600

//addition operator(+) used to add numbers and concatenate strings

let num1 = 30,
  num2 = 77,
  num3 = num1 + num2;
console.log(num3);
console.log("John" + " Doe");

//multiplication operator(*)
let a = 90,
  b = 30,
  c = a * b;
console.log(c);

//division operator(/)
console.log(100 / 5); //returns 20

//subtraction operator(-)
let d = 40,
  e = 20,
  f = d - e;
console.log(f);

//modulus(%) returns the remainder of arithmetic division
let x1 = 53,
  y1 = 5,
  z1 = x1 % y1;
console.log(z1);

//exponential operator(**) retuns power of number
console.log(10 ** 2); // it will return 100

//comparisons operators
let x2 = 33,
  y2 = 45,
  z2 = 33;
console.log(x2 == z2); //returns true
console.log(x2 === z2); //returns true
console.log(x2 !== z2); //returns false
console.log(x2 <= y2); //returns true
console.log(x2 >= z2); //returns true
console.log(y2 != z2); //returns true
console.log(y2 < z2); //returns false
console.log(y2 > z2); //returns true

//increment and decrement operators
let number = 5;
number++;
console.log(number); //returns 6
number--;
console.log(number); //returns 5

console.log(Math.pow(2, 4)); //the same as exponential operator
