//objects have name-value pairs
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  displayNames: function () {
    return this.firstName + " " + this.lastName;
  },
};
//accessing object properties
console.log(person.eyeColor);
console.log(person["age"]);

console.log(person.firstName + " is " + person.age + " years old");
console.log(person.displayNames()); ///same as above
//looping through an object
//for...in loop
for (x in person) {
  console.log(person[x]);
}

//adding object properties
person.sibling = "Jack";
console.log(person);

//deleting object properties
delete person.lastName;
console.log(person);

//nested objects

const schools = {
  name: "Bidii School",
  size: 1000,
  meanGrade: 9.45,
  juniorSchools: {
    school1: "Junior Academy",
    school2: "Furaha Academy",
    school3: "Springs Academy",
  },
};
console.log(schools);
console.log(schools.juniorSchools.school3);
console.log(schools["juniorSchools"]["school2"]);

//built in functions
let greetings = "Hello There";

console.log(greetings.toUpperCase());
console.log(greetings.startsWith("H")); //returns true
console.log(greetings.endsWith("e")); //returns true
console.log(greetings.substring(0, 4)); //returns 'Hell'
console.log(greetings.concat(" one")); //adds 'one' to string
console.log(greetings.includes("ll")); //returns true
console.log(greetings.length); //returns length of string

const objectDemo = document.getElementById("object-demo");
objectDemo.innerHTML = Object.values(person);
objectDemo.innerHTML = JSON.stringify(person);

//converting objects in JSON data

const programmer = {
  name: "Bob",
  skills: "Frontend Dev",
  favouriteLanguage: "JS",
  age: 35,
};
let jsonData = JSON.stringify(programmer);
console.log(jsonData);

//Object destructuring

let car = {
  name: "Ford",
  model: 333,
  isNew: true,
};
let { name, model, isNew } = car;
console.log(name); //Ford
console.log(model); //333
console.log(isNew); //true
