const d = new Date().toDateString();
console.log(d);

const x = new Date().toISOString();
console.log(x);

const y = new Date("2022-04-24");
console.log(y);

const c = new Date("02/20/2022");
console.log(c);

const a = new Date("Feb 22 2021");
console.log(a);

let msec = Date.parse("March 21, 2012");
const msec2 = new Date(msec);
console.log(msec2);

//date methods
const todayDate = new Date();
console.log(todayDate.getFullYear());
console.log(todayDate.getMonth());
console.log(todayDate.getDate());
console.log(todayDate.getHours());
console.log(todayDate.getMinutes());
console.log(todayDate.getSeconds());
console.log(todayDate.getMilliseconds());
console.log(todayDate.getTime());
console.log(todayDate.getDay());
console.log(Date.now());

const date = new Date();
date.setFullYear(2020);
console.log(date);
