// Function in JS 
// Block of code that performs a specific task and can be invoked whenever required

// console.log("Hello");

// "abc".toUpperCase();

// [1, 2, 3, 4].push(5);

// function functionName() {
//     //code
// }

// functionName();

// console.log("Javascript");
// console.log("We are learning functions");

// console.log("Javascript");
// console.log("We are learning functions");

// console.log("Javascript");
// console.log("We are learning functions");

// function myFunction() {
//     console.log("Javascript");
//     console.log("We are learning functions");
// }

// myFunction();
// myFunction();
// myFunction();

// function functionName( param1, param2) {
//     //code
// }

// function myFunction(msg) {  //parameter
//     console.log(msg);
// }

// myFunction("I am learning functions 12345");   //argument

// function sum(x, y) {
//     //x and y are local variables can't be accessed outside block
//     let res = x + y;
//     return res;
// }

// let result = sum(2,3);
// console.log(result);

// const sumFunction = function (x,y) {
//     return x+y;
// }

// console.log(sumFunction(2,3));


// Arrow functions 
// Compact way to write a function 

// const storeFunction = (param1, param2) => {
//     //code
// }

// let sum = (a,b) => {
//     return a+b;
// }

// console.log(sum(3,4));

// let myFunction = () => {
//     console.log("Hello world");
// }

// console.log(myFunction);

// myFunction = "JS";
// console.log(myFunction);

// Question: Write a function using function keyword which takes
// string as an argument and returns no. of vowels in that string.

// "HELLO" -> 2 

// function countVowel (str) {
//     let count = 0;
//     str = str.toLowerCase();
//     //for, while, 
//     for(const char of str) {
//         // console.log(char);
//         if(char === 'a' || char === 'e' || char === 'i' || char ==='o' || char === 'u') {
//             count++;
//         }
//     }
//     return count;
// }

// // let result = countVowel("HELLO"); //2
// let result = countVowel("Javascript"); //3
// console.log(result); 

// Passing default values as a Param
// function loginMessage(userName = "student", user2 = "Pratibha") {
//     if(!userName) {
//         console.log("Please enter username", userName, user2);
//         return;
//     }
//     console.log(`${userName} loggedIn and ${user2}`);
// }

// loginMessage("Sahil", "Neeraj");


// //Rest operator: ... it spreads the argument and returns it in array 
// function calculateCartPrice(val1, val2, val3, ...num) {
//     console.log(val1, val2, val3);
//     console.log(num);
// }

// calculateCartPrice(10, 20);

// Immediately Invoked Function Expressions (IIFE) 
// (function myFunction() {
//     console.log("Call it immediately");
// })()

// methods and functions 
// Whenever we attach function to a specific objects like arrays or strings 
// we call those functions as methods

// [1, 2, 3].pop();

// [1, 2, 3].toUpperCase();

// "abc".toUpperCase();

// Higher Order Functions (HOF): Methods or functions which takes function as
// a parameter or returns a function is called HOF.

// forEach loop is a HOF
