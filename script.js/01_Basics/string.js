 const name = "Pushkar"
 const repo = 1

//  console.log(name + repo + "Value");

console.log('Hello my name is ${name} and my repo count is ${repo}')
 
const gameName = new String(' hitesh-hc ')

// console.log(gameName[0]); // we are acces its keyvalue pair

// object
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(2)); // for know to character at this position
// console.log(gameName.indexOf('c')); // for know to at index which character


// console.log(eval(gameName));
// console.log(eval(gameName.valueOf()));

// It is use to convert a substring
const newString = gameName.substring(0,4)
console.log(newString);

// It is use give the negative index calculate
const anotherString = gameName.slice(-8,4)
console.log(anotherString);

// Trime is use to remove the white space character
const newString1 = "  Pushkar  "
console.log(newString1);
console.log(newString1.trim());

// replace is use for repplace the word in string 
const url = "https://Pushkar.com/Pushkar%20"
console.log(url.replace('%20','-'));
// include is use to include the word in string
console.log(url.includes('sundar'));

// split word is use to split the string and store into array 
console.log(gameName.split('h'));

// repeat the string
console.log(gameName.repeat(3));








