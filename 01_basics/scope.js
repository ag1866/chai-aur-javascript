// {} ye curly braces ke andar ko hi scope khte h 
// var c = 300
let a = 300
 
if (true){
    let a = 10
    const b = 20
    // console.log("Inner: ", a);
}

// yaha jo bhi if(true) ke andar likhi h wo block scope  m h use apn bahar se access nhi krskte h
// aur jo let a = 300 likha wo global  scope m h use block scope ke andar access krskte h 

console.log(a);
// console.log(b);




// Nested scope

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    console.log(website)


    two()
}

one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website)
    }

    // console.log(website)
}

// console.log(username)


// ++++++++++++++++++++++++++++++interesting+++++++++++++++++++++

console.log(addone(5))


function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}


// jab apn function directly define krte h to uski value ko print chahe function ke upr kre y neeche
// farak nhi pdta


// aur jab apn function ko kisi variable m define krte h to uski value neeche hi neeche 
// define krni pdti h function ke

// isi sab ko dekhne ke liye apn javascript m hoisting use krte h 