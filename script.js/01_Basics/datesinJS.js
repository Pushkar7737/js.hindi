// Dates

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// let mycreatedate = new Date(2023,0,23)
// console.log(mycreatedate.toDateString());

// let mycreatedate = new Date(2023,0,23,5,3)
// console.log(mycreatedate.toLocaleString());

// let mycreatedate = new Date("2023-01-14") // yy-mm-dd formate in which month start with 01
let mycreatedate = new Date("01-14-2023"); // mm-dd-yy indian formate
// console.log(mycreatedate.toLocaleString());

// Time stamp -----
let myTimestamp = Date.now();
// these give time is milisecond
// console.log(myTimestamp);
// console.log(mycreatedate.getTime());
// console.log(Math.floor(Date.now()/1000)); // these give time in second

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// '${newDate.getDay()} and the time' use for to get the date and time both

console.log(newDate.toLocaleString('default',{weekday:"short"})) // use to customize formate 