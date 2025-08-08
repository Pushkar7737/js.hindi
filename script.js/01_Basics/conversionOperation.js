// let age = null;

// console.log(typeof age);
// console.log(typeof (age));

// let valueInNumber = Number(age) // use for conversion
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" = 33
// "33abc" = NaN
// "true/false" = 0/1
// null = 0
// undefined = NaN

// let isLoggedIn = ""
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 = true; 0 = false;
// "" = false
// "Pushkar" = true

// let number = 44
// let stringnumber = String(number);
// console.log(stringnumber);
// console.log(typeof stringnumber);

// It is use for convert symbol into the its ascii value
// let char = '@';
// let asciiValue = char.charCodeAt(0);
// console.log(asciiValue);  // Output: 64

// ************ Operations ************
let value = 3;
let negvalue = -value;
// console.log(negvalue);
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**4);
// console.log(2/2);
// console.log(2%2);

// let str1 = "hello"
// let str2 = "Pushkar"

// let str3 = str1+str2;
// console.log(str3);

// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+(2+2)); // to merge the code we use parenthesis
// console.log(1+2+"2");

// Tricky conversion but not use them because readablity is imp.
console.log(+true);
console.log(+"");

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
console.log(num1);

// the ++ operator is overloaded for two type of operands:number and bigint
let gamecounter = 100;
++gamecounter;
console.log(gamecounter);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 
// stack (Primitive) , Heap (Non-Primitive)
let myname = "Pushkar"
let anothername = myname
anothername = "chaiorsamosa"
console.log(anothername);
console.log(myname);

let user={
    email:"user@gmail.com",
    upi:"9788@ybl",
}

let user2 = user

user2.email = "hhii@google.com"

console.log(user.email);
console.log(user2.email);

