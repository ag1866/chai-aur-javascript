const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(1))

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4))

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))


// +++++++++++++++++++++++++++++++++++++++  Maths +++++++++++++++++++++++++++++=

// math is library in javascript

// console.log(Math)
// console.log(Math.abs(-4)) // isse -ve value +ve hojati h 
// console.log(Math.round(4.3))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.2))
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8))

console.log(Math.random()) // isse value hmesa 0 aur 1 ke beech m ati h 
console.log((Math.random()*10) + 1)
console.log(Math.floor(Math.random()*10) + 1)
