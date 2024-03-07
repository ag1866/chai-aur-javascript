// Immediately Invoked Function Expression(iife)

// global scope ke pollution se bachne ke liye iife ka use krte h jaise kabhi kabhi global scope ke
// variable interfere krte h to unhi se bachne ke liye iife ka use hota h 

(function chai(){
    console.log(`DB CONNECTED`)
})();


// (function aurcode()  {
//     console.log(`DB CONNECTED TWO`);
// } )()

// ( () =>  {
//     console.log(`DB CONNECTED TWO`);
// } )()

( (name) =>  {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

