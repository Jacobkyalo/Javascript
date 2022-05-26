const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);
console.log(cars[2]);
cars[0] = "Ford"; //changing Saab to Ford
console.log(cars);

//length
console.log(cars.length);

//accessing the element in an array
console.log(cars[cars.length - 1]);

//looping thro' an array using for loop
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}
//forEach
cars.forEach((car) => {
  console.log(car);
});
//adding new array elements
cars.push("Rover");
console.log(cars);
//removing array elements
cars.pop();
console.log(cars);

//checking whether is an array
console.log(Array.isArray(cars));
console.log(cars instanceof Array);

//Array methods
console.log(cars.toString());
console.log(cars.join("~"));

//removing the first array element
cars.shift();
console.log(cars);
//adding array element to the beginning
cars.unshift("Subaru");
console.log(cars);

//concatenating arrays
const bikes = ["TVS", "Boxer", "YAMAHA", "Honda"];
const carsBikes = cars.concat(bikes);
console.log(carsBikes);

//sorting arrays
carsBikes.sort();
console.log(carsBikes);

//reverse array
cars.reverse();
console.log(cars);

//sorting number array
const marks = [40, 100, 10, 53, 25, 60];
marks.sort(); //this cannot work
console.log(marks);
//use compare function
marks.sort(function (x, y) {
  return x - y;
});
console.log(marks); //this works

//max and min values of an array
console.log(Math.max.apply(null, marks));
console.log(Math.min.apply(null, marks));

//array iteration with high order array methods
//Array forEach()
const names = ["John", "Jacob", "Mary", "Joseph", "Monica"];
names.forEach((name) => {
  console.log(name);
});

//Array map()
names.map((value) => {
  console.log(value.toUpperCase());
});

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.map((number) => {
  console.log(number ** 2);
});

//Array filter()
const squares = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
const ans = squares.filter((square) => {
  return square > 30;
});
console.log(ans);

//Array reduce()
const numsAdd = [12, 34, 65, 77, 35, 77];
const res = numsAdd.reduce((total, nums) => {
  return total + nums;
});
console.log(res);

//reduceRight()
const res2 = numsAdd.reduceRight((total2, nums2) => {
  return total2 + nums2;
});
console.log(res2);

//Array every()

const gradeMarks = [34, 67, 45, 78, 93];
gradeMarks.every((mark) => {
  console.log(mark > 20); //returns true
});

//Array some()
gradeMarks.some((mark2) => {
  console.log(mark2 < 50); //returns true
});

//Array indexOf()
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple");
console.log(position);

//Array lastIndexOf()
let position2 = fruits.lastIndexOf("Apple");
console.log(position2);

//Array find()
const vehicleCount = [2, 4, 5, 7, 9, 3];
const res3 = vehicleCount.find((count) => {
  return count > 8;
});
console.log(res3);

// Array includes()
console.log(vehicleCount.includes(9));
