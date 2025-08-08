//ARRAYS ----

//It makes shallow or deep copy of array
// Array making types
const myArr = [0, 1, 2, 3, 4, 5]; // it is object and store all element in one variable
const myHeros = ["Shaktiman", "Doremon"];
const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[0]);

// Array methods ---->

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) // use to shift all array elements but it is not optimise
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));

// const newArr3 = myArr.join(); // These convert array into string
// console.log(newArr3);

// console.log(myArr);

// slice , splice ---->
console.log("A", myArr);
// slice only give a section value that I was want
const myn1 = myArr.slice(1, 3); // give a section of array

console.log(myn1);
console.log("B", myArr);

// Baiscally splice is manipulated the original array and give to a section that we want
const myn2 = myArr.splice(1, 3);
console.log("C", myArr);
console.log(myn2);
