//Hoisting in JS
// Trying to access the variables and functions before initialization

// console.log(x);
// getName();

// var x = 5;

// var getName = function() {
//     console.log("Hello world");
// }

// Memory              Code
// x: 5
// getName: {...}

// ------------------------------------------------------------

// let and const variables are also hoisted or not ? 
// Temporal Dead Zone 
// console.log("Hello world");
// console.log(a);
// const a = 10;

// Yes let and const variable are hoisted but they are stored in Temporal Dead Zone
// Temporal Dead Zone: Time b/w variable which are hoisted and just before their initialization


// var x = 200;
// console.log("Hello word");

// console.log(a);
// console.log(x);
// let a = 10;
// console.log("Learnig hoisting in js");

console.log("Hello");
let a = 100;
var b = 200;

const d = 400;

console.log(b);

console.log(c);

const c = 300;

console.log(d);

// var << let << const