// function sayMyName(){
//     console.log("A")
//     console.log("R")
//     console.log("P")
//     console.log("I")
//     console.log("T")
// }

// sayMyName()

// function addTwoNumbers(number1, number2){
//     return number1 + number2
// }
// console.log(addTwoNumbers(3, 5))

// function loginUserMessage(username = "sam"){
//     if(!username){
//         console.log("please enter a username")
//         return 
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("hitesh"))

function calculateCartPrice(val1,val2, ...num1){
    return num1, val1

}

// console.log(calculateCartPrice(200, 400, 500, 2000))

// neeche ab object bna kr krrhe h
const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);

}
// handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue([200, 400, 500, 1000]))