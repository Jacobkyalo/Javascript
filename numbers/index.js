//JS numbers can be with or without decimals
let x = (0.2 * 10 + 0.1 * 10) / 10;
let y = 35.55;
let z = 34.45;
console.log(y);
console.log(z + y);
console.log(x);

//numbers as strings
let a = "400";
let b = "200";
console.log(a + b); //returns 400200
console.log(a * b); //returns 80000
console.log(a / b); // returns 2
console.log(a - b); // returns 200

//number methods
let aa = 9.656;
let bb = aa.toExponential();
console.log(bb);

let dd = 444.377;
let cc = dd.toFixed(2);
console.log(cc);

//number conversion
let numstr = "33.33";
console.log(Number(numstr));
console.log(parseInt("20.33")); //returns 20
console.log(parseFloat("20.33")); //returns 20.33

//number properties
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);
console.log(z.MAX_VALUE); //returns undefined
