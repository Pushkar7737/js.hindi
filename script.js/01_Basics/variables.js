const accountId = 15444
let accountEmail = "pushkarbindal978@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur" // In js we also create variable without its type 
let accountstate;
// accountId = 2 // not allow

accountEmail = "hc@hc.com"
accountPassword = "22222"
accountCity = "benglaur"
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and  functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountstate])
