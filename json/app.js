//JSON stands for JavaScript Object Notation
//JSON is a text format for storing and transporting data
//JSON is "self-describing" and easy to understand
//JSON data is written as name/value pairs
//e.g
'{"name":"Jacob", "age":20, "city":"Nairobi"}';

//JSON.parse() converts string data from a web server to a JS object
//JSON.stringfy() converts JS object to a JSON String

person = {
  firstName: "Jacob",
  lastName: "Kyalo",
  age: 20,
};

let convertedJSON = JSON.stringify(person);
console.log(convertedJSON);
console.log(typeof convertedJSON); //string

//to convert back use JSON.Parse()
let converted = JSON.parse(convertedJSON);
console.log(converted);
console.log(typeof converted); //object

const div = document.getElementById("parent");
const h1 = document.createElement("h1");
const h1node = document.createTextNode(converted.firstName); //returns Jacob
//const h1node = document.createTextNode(convertedJSON.firstName); //returns undefined
h1.appendChild(h1node);
div.appendChild(h1);

const text = '["Ford", "BMW", "Audi", "Fiat"]';
const res = JSON.parse(text); //returns JS ARRAY
console.log(res);

const names = ["John", "Mary", "Joseph", "Smith", "Jones", "Rowe", "Doe"];
const convertedNames = JSON.stringify(names);
console.log(convertedNames);
console.log(typeof convertedNames); //String

// Storing data:
const myObj = { name: "John", age: 31, city: "New York" };
const myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

// Retrieving data:
let text2 = localStorage.getItem("testJSON");
let obj = JSON.parse(text2);
console.log(obj.name);

const obj2 = {
  name: "John",
  age: function () {
    return 30;
  },
  city: "New York",
};
obj2.age = obj2.age.toString();
const myJSON2 = JSON.stringify(obj2);
console.log(myJSON2);
