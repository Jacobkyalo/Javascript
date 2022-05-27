class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

let myCar1 = new Car("Ford", 2000);
console.log(myCar1.year);
console.log(myCar1.age());

//inheritance
//defined using the extends keyword

class Model extends Car {
  constructor(name, year, model) {
    super(name, year);
    this.model = model;
  }
  show() {
    return this.age() + ", it is a " + this.model;
  }
}

let myCar2 = new Model("Ford", 2020, "Mustang");
console.log(myCar2.age());
console.log(myCar2.show());

//class person

class Person {
  constructor(first, last, birthYear, course) {
    this.firstName = first;
    this.lastName = last;
    this.birthyear = birthYear;
    this.course = course;
  }
  getFullName() {
    return this.firstName + " " + this.lastName;
  }
  getYearsOld() {
    let date = new Date().getFullYear();
    return "I am " + (date - this.birthyear);
  }
  getCourse() {
    return `${this.course}`;
  }
}

let person1 = new Person("John", "Doe", 2002, "Computer Science");
console.log(person1.getFullName());
console.log(person1.getYearsOld());
console.log(person1.getCourse());

class ChildPerson extends Person {
  constructor(first, last, birthYear, course, eyecolor) {
    super(first, last, birthYear, course);
    this.eyecolor = eyecolor;
  }

  getEyeColorAndAge() {
    return this.getYearsOld() + " I have a " + this.eyecolor + " eyecolor";
  }
}

let person2 = new ChildPerson(
  "Joseph",
  "Smith",
  2000,
  "Information Technology",
  "blue"
);
console.log(person2.getEyeColorAndAge());
console.log(person2.getCourse());
console.log(person2.getFullName());

//getters and setters
class University {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set name(x) {
    this._name = x;
  }
}

let myUniversity = new University("California");
myUniversity.name = "Michigan"; //change the name of university using setter
console.log(myUniversity.name);

//static methods
class Dog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  static bark() {
    return this.name + " barks loudly!";
  }
  static objectBark(dogname) {
    return dogname.name + " barks loudly!";
  }
}

console.log(Dog.bark()); //works
let dog1 = new Dog("Kona", 2);
console.log(dog1.objectBark()); //error
console.log(Dog.objectBark(dog1)); //works
