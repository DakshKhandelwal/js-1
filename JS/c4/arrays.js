// Arrays 
// let marks = [45, 67, 89, 94, 92, 1200]; //0 based index
// console.log(marks);
// console.log(marks[0]);
// console.log(marks[1]);
// console.log(marks[2]);
// console.log(marks[3]);
// console.log(marks[30]);  //undefined
// console.log(marks[-1]);  //undefined
// console.log(typeof marks);  //object

// for(let i = 0; i < marks.length; i++) {
//     console.log(marks[i]);
// }

//for-of
// for(let ele of marks) {
//     console.log(ele);
// }

// const strArr = new Array("Hello", "World", "Array");
// console.log(strArr);

//Properties and Methods of array
// console.log(strArr.length);

// strArr.push("Strings", "Objects", "Numbers");  //O(1)
// console.log(strArr);

// strArr.pop();  // O(1)
// console.log(strArr);

// strArr.unshift("New Type");  //O(n)
// console.log(strArr);

// strArr.shift(); //O(n)
// console.log(strArr);

// console.log(strArr.includes("World"));
// console.log(strArr.indexOf("Arrays"));
// console.log(strArr.join(" "))

// slice and splice method 
// const newArr = [0, 1, 2, 3, 4, 5];
// const myArr = newArr.slice(1, 3);  //[1, 2] //Original array is same. and it do not includes last element.
// console.log("Original array", newArr);
// console.log("Slice array (1,3)",myArr);

// const myArr2 = newArr.splice(1, 3);  //Delete the original array also. and it includes last element also.
// console.log("Splice array (1,3)", myArr2);
// console.log("Original array", newArr);

// const heroes = ["thor", "batman", "hulk"];
// const indianHeroes = ["krrish", "shaktiman"];

// heroes.push(indianHeroes);
// console.log(heroes);
// console.log(heroes[3]);
//["thor", "batman", "hulk", "krrish", "shaktiman"]

// const allHeroes = [...heroes, ...indianHeroes];  //spread operator
// console.log(allHeroes);

// const myArr = [1, 2, [3, 4, 5], 6, [7, 8], 9, [4, 5, [11, 13]]];
// const newArr = myArr.flat(Infinity);
// console.log(newArr);


// const newArr = ["Ram", "Shyam"];
// console.log(Array.isArray(newArr));

// console.log(Array.from("Sahil Thakur"));
// console.log(Array.from({name: "Manoj"}));

let val1 = 100;
let val2 = 200;
let val3 = 300;
console.log(Array.of(val1, val2, val3));