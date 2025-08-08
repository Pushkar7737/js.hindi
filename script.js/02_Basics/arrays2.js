const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros) // it works on existing array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// Concat return an all arrays value in new array
// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

// work same as concat but it divide values in a single values (spread)
const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);

// flat work same as concate it return to a reverse array element but we define a depth of array which we want to concate
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(3);
// console.log(real_another_array);

console.log(Array.isArray("Pushkar")); // use to check is this element is array or not
console.log(Array.from("Pushkar")); // use to make a element into array (These create an array from a iterable object)
console.log(Array.from({ name: "Pushkar" })); // return a empty array because we not convert a object in to array directly

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // of give a new array from a set of element
