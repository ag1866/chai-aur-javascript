const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)

// this refers to current context

// function chai(){
//     console.log(this)
// }
// chai()


// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username)
// }
// chai()


// $$$$$$$$$$$$$$$$$$$$$$$$$ARROW FUNction $$$$$$$$$$$$$$$$$44

//   SYNTAX OF ARROW FUNCTION
// () => {}

// const  chai = () => {
//     let username = "hitesh"
//     console.log(this.username)
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3, 4));

// we can also do it as

const addTwo = (num1, num2) =>  num1 + num2

console.log(addTwo(3, 4))