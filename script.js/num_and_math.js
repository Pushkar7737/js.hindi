const score = 400;
// console.log(score);

// here we define a number manually
const balance = new Number(100);
// console.log(balance);
// console.log(score.toExponential(5)); // use for convert a number in exponential

// console.log(balance.toString());
// console.log(balance.toFixed(2));
// console.log(typeof balance);

const otherNumber = 233.833;
// console.log(otherNumber.toPrecision(3)); // it is use to precise the value and return in string form

const hundreads = 1000000;
// console.log(hundreads.toLocaleString('en-IN'));

const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
// British English uses day-month-year order and 24-hour time without AM/PM
// console.log(event.toLocaleString("en-GB", { timeZone: "UTC" }));

// ++++++++++++++++++ Maths ++++++++++++++++++

// It is come with JS bydefault
// console.log(Math);
// console.log(Math.abs(-33)); // use to convert negative to positive
// console.log(Math.round(4.6)); // use to roundoff number
// console.log(Math.ceil(4.2)); // use to choose top value
// console.log(Math.floor(4.9)); // use to choose lower value
// console.log(Math.pow(4,3)); // use for power of number
// console.log(Math.min(3,5,2,1)); // use to choose min value in array
// console.log(Math.max(33,4,12,3)); // use to choose max value in array


// It is most importent thing for math
console.log(Math.random()); //choose the random value between 0 to 1
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20
console.log((Math.floor(Math.random()*(max-min+1)))+min);


