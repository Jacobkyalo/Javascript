//strings define and manipulate text.
//can be defined with single or double quotes
let firstName = "John";
//length property
console.log(firstName.length);

//string methods
let str = "something good and good";
console.log(str.slice(2, 6));
console.log(str.substr(2, 6));
console.log(str.substring(2, 6));

//replace method
let newStr = str.replace("good", "else");
console.log(newStr); //returns something else

//uppercase and lowercase
let str2 = "GIVEN";
console.log(str.toUpperCase());
console.log(str2.toLowerCase());

//concat
let str3 = str2.concat(" SOMETHING");
console.log(str3);
//trim() removes whitespaces from both string sides

//string template literals
//back-tics syntax
console.log(`Hi Mom!`);
//multiline
let text = `The quick
brown fox
jumps over
the lazy dog`;
console.log(text);

//string interpolation
let age = 40;
console.log(`I am ${age} years old.`);
