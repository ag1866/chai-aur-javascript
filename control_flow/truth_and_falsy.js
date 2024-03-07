// truthy ka mtlb h jo bhi value y kuch bhi diya gya h wo shi hi hoga abhi confirm nhi h ki shi h y nhi


// falsy ka mtlb h jo bhi value y kuch bhi diya gya h wo galat hi hoga abhi confirm nhi h ki galat h y nhi


const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}



// ek do topic h jo bilkul smjh nhi aye mujhe agli bar pdna h 

// Nullish Coalescing Operator (??): null undefined

// Terniary Operator

// condition ? true : false
