//Loops in JS
// Loops can be used to execute a piece of code again and again 
// 1) For loop 

// for(let i=1; i<=10; i++) {
//     console.log("Hello world", i);
// }

// calculate sum from 1 to 10 
// let sum = 0;
// for(let i=1; i<=10; i++) {
//     sum += i;
// }

// console.log('sum is', sum);

// for(var i=1; i<=10; i++) {
//     console.log("i is ",i);
// }

// console.log(i);

// for(let i=1; i<=10; i++) {
//     console.log("i is ",i);
// }

// console.log(i);


// 2) Infinite loop: Loop that never ends (condition will be true always)

// for(let i=1; i>=0; i++) {
//     console.log("i is", i);
// }

// 3) While loop 

// let i = 1; 
// while(i<=5) {
//     console.log("i is", i);
//     i++;
// }

// 4) do-while loop 

// let i = 8;
// do {
//     console.log("i", i);
//     i++;
// } while( i<=10);

// 5) for-of loop: It is used to iterate over arrays or strings or Maps

// const arr = [1, 2, 3, 4, 5];

// for(const num of arr) {
//     console.log(num);
// }

// const strArr = ["Ram", "Shyam", "Dhanshyam"];

// for(const name of strArr) {
//     console.log(name);
// }

// const myString = "Hello World";
// for(const char of myString) {
//     console.log(char);
// }

// Maps: unique values in same order as inserted

// const map = new Map();
// map.set("In", "India");
// map.set("Fr", "France");
// map.set("USA", "United States of America");
// map.set("In", "India123");

// console.log(map);

// for( const [key, value] of map) {
//     console.log(key, value);
// }

// for( const item of map) {
//     console.log(item);
// }

// Destructuring of array 
// const arr = ["In", "Fr", "USA", "Th"];
// const v1 = arr[0];
// const v2 = arr[1];
// const v3 = arr[2];
// console.log(v1, v2, v3);

// const [v1, v2] = arr;
// console.log(v1, v2);

// 5) for-in loop: It is used to iterate over js objects 

// let student = {
//     user: {
//         name: "Rohit"
//     },
//     age: 29,
//     "is Logged In": true,
//     cgpa: 8.6
// }

// for(let key in student) {
//     console.log(key, student[key]);
// }

// console.log(student["age"]);
// console.log(student.age);

// console.log(student.user.name);
// console.log(student["user"]["name"]);

// console.log(student["is Logged In"])


// Note: We can't iterate over maps using for-in loop 
// const map = new Map();
// map.set("In", "India");
// map.set("Fr", "France");
// map.set("USA", "United States of America");
// map.set("In", "India123");

// console.log(map);

// for(const key in map) {
//     console.log(key);
// }

// console.log(typeof map);  //object

// Question: Print first 50 odd numbers
// for(let i=0; i<=100; i++) {
//     if(i%2 !== 0) {
//         console.log(i);
//     }
// }

// Question: Create a game where user can start with any number. User has to keep gussing the number 
// until user enters correct value

let gameNumber = 10;
let userNum = prompt("Enter a number");

while(userNum != gameNumber) {
    userNum = prompt("You entered wrong number. Guess again");
}

console.log("You guessed right number");