const accountId = 144553
let accountEmail= "vishal@google.com"
var accountPassword= "12345"
accountCity= "Pune"
let accountState;

// accountId=2  //not allowed

accountEmail="hc@hc.com"
accountPassword="2121212121"
accountCity="Bangaluru"

console.log(accountId);

/*
Prefer not to use 'var' 
because of issue in block scope and functional scope 
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])