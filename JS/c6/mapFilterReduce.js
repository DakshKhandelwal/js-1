//Array methods
// 1) Map 
// Creates a new array with results of some operation. 

// let arr = [1, 2, 3, 4];

// let newArr = arr.map(function (val) {
//     return val*2;
// })

// console.log(arr);
// console.log(newArr);

// let calcSquare = (val) => {
//     return val*val;
// }

// let squareArr = arr.map(calcSquare);

// console.log(arr);
// console.log(squareArr);

// 2) Filter 
// Create a new Array of elements based on the condition

// let newArr = arr.filter((val) => {
//     return val%2 !== 0
// })

// console.log(newArr);

// 3) Reduce 
// Performs some operations and reduce the array to a single value. It returns that value

// let arr = [1, 2, 3, 4];

// let sum = arr.reduce(function(prev, curr) {
//     return prev + curr;
// })

// console.log(sum);

// let arr2 = [46, 25, 56, 91, 97, 73];

// const max = arr2.reduce((prev, curr) => {
//     return prev > curr ? prev: curr;
// })

// console.log(max);

// Question: Find out marks of student which are 90+

// let marks = [46, 25, 56, 91, 97, 73];

// let filteredArray = marks.filter((val) => {
//     return val > 90;
// })
// console.log(filteredArray);


// -----------------------------------------------------------------------
// Chain the methods => Method Chaining 
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// const result = arr.filter((val)=> val%2 === 0)
//                   .map((val) => val*10)
//                   .filter((val) => val > 50)
//                   .reduce((prev, curr) => prev + curr);


// console.log(result);

// Question: Take a number n input from user. Create an array from 1 to n. Then use reduce method 
// to calculate sum of all numbers in the array.
//Then calculate product of all numbers in the array.

// let n = prompt("Enter a number");
let n = 5;

let arr = [];

for(let i=1; i<=n; i++) {
    arr[i-1] = i;
}

console.log(arr);

let sum = arr.reduce((prev, curr) => {
    return prev + curr;
})

console.log(sum);

let factorial = arr.reduce((prev, curr) => {
    return prev * curr;
})

console.log(factorial);