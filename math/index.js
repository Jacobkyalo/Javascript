//The JavaScript Math object allows us to perform mathematical tasks on numbers.
//Math object is static, it has no constructor
//All methods and properties can be used without creating a Math object.

//Math methods
console.log(Math.round(3.7)); //returns 4
console.log(Math.ceil(3.7)); //returns 4
console.log(Math.floor(3.7)); //returns 3
console.log(Math.trunc(3.7)); //returns 3
console.log(Math.sign(0)); //returns 0
console.log(Math.pow(8, 2)); //returns 64
console.log(Math.sqrt(49)); //returns 7
console.log(Math.abs(-7.7)); //returns 7.7
console.log(Math.sin((90 * Math.PI) / 180)); //returns 1

//Math.min() and Math.max()
console.log(Math.min(1, -5, 4, 3, 6, 15));
console.log(Math.max(1, 4, 3, 6, 15));

//Math random()
console.log(Math.random());
console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 1000));

//function to generate random number btn 1 and 100
(function getRandom(maxNum, minNum) {
  console.log(Math.floor(Math.random() * (maxNum - minNum) + minNum));
})(1, 100);
