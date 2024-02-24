const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Arpit",
            lastname: "Gupta"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)


const obj3 = {...obj1, ...obj2} // this is used to spread the value
// console.log(obj3)


const users = [
    {
        id: 1,
        email:  "a@gmail.com"
    },
    {
        id: 1,
        email:  "a@gmail.com"
    },
    {
        id: 1,
        email:  "a@gmail.com"
    },
]

users[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))



// ****************************Object Destructuring*********************
// object destructuring mtlb hota h jab object m kisi value ko nikalna 

const course = {
    coursename: "js in hindi",
    price: "999",
    courseFac: "arpit"
}

const {courseFac} = course

console.log(courseFac)

// *************************API**************************
// api ka seedha seedha mtlb hota h ki apna kam kisi aur ke sar pe thop dena

