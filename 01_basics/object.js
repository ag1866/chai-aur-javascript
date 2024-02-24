// agr constructor se object bnega to hmesa singleton bnega
// singleton
// Object.create{}

// dusra object bnane ka tarika h object literals
// jo h abhi neeche pdrhe h

// Object literals

const mySym = Symbol("key1")



const JsUser= {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    age: 18,
    location: "jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);

JsUser.email = "hitesh@chatgpt.com" // these arre used to override the value

// Object.freeze(JsUser)  // this is used to freeze the object
// now after freezing no value in the object will be override

// JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser)





