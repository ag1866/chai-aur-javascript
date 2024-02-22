// here we learn about let var cons variable
const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Orai"
let accountState;

// accountId = 2
// accountId = 2 is not allowed because constant variable is passed only one time 


accountEmail = "hc@hc.com"
// we cannot use let variable within the same scope
var accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
prefer not to use var
bacause of issue in block scope and functional scope 
var ko isliye use nhi krte kyuki agr neeche kuch value change hoti to wo value change krleta h
jaise ki let aur cons m apn duplicate variable nhi bna skte 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])