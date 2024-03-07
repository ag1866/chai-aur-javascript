// control flow m basically apn conditions ke upr kam krte h jaise kisi code ka kitna hisaa hme run krana h y nhi
// isme phir apn switch statement bhi  use krenge
// if
const isUserloggedIn = true
const temperature = 41

// if (temperature === 40){
//     console.log("less than 50")
// } else{
//     console.log("temperature is greater then 50");
// }


// console.log("Execute");


// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if(score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`)
// }

// console.log(`User power: ${power}`);

// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}


// yha false ka mtlb h ki wo galat h aur true mtlb ki wo condition shi h 

// && iska mtlb h sari condition true honi chahiye
// || iska mtlb h koi bhi ek condition true hojae

