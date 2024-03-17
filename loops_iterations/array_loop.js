// for of

// ["", "", ""] these are string inside array
// [{}, {}, {}] these are object inside array

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     // console.log(num);
    
// }

// const greetings = "Hello world!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
    
// }

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

// for (const key of map) {
//     console.log(key);
// }
// ab kewal key likhne se to ye array ke form m agaya to ab apn ko array ko destructure krna h 

for (const [key, value] of map) {
    // console.log(key, ':-', value);
    
}

// ab apn object pe for of loop lgake dekhenge

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }

// yha se apn smjh gye ki object pe to for of loop lgega nhi

// ab hm for in loop use krenge
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

for (const key in myObject) {
    // console.log(key + " : " + myObject[key])
}

const arr = [1, 2, 3, 4, 5]
for (const key in arr) {
    // console.log(key); isse kewal index value arhi h
    console.log(arr[key]);
}



