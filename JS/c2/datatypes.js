// Primitive Datatypes 

// 1) Number 
// let score = 33;
// console.log(score);
// console.log(typeof score);

// let score1 = 45.45673;
// console.log(score1);
// console.log(typeof score1);  //number

// let score2 = Number(20);
// console.log(score2);
// console.log(typeof score2);

// 2) String 
// let myStr = "Yogesh";
// console.log(myStr);
// console.log(typeof myStr);
// console.log(typeof (myStr));  //Both are same

// let user1 = String("Virat");
// console.log(user1);
// console.log(typeof user1);  //string

// 3) Boolean 
// let isLoggedIn = true;
// console.log(isLoggedIn);
// console.log(typeof isLoggedIn);

// let score3 = Boolean(false);
// console.log(score3);
// console.log(typeof score3);  //boolean

// 4) null 
// let score4 = null;
// console.log(score4);
// console.log(typeof score4);  //object

// 5) undefined 
// let score5 = undefined;
// console.log(score5);
// console.log(typeof score5);  //undefined

// let score6;
// console.log(score6);  
// console.log(typeof score6); //undefined

// score6 = 100;
// console.log(score6);
// console.log(typeof score6);

// 6) bigint 
// let score7 = 322222222224567833333555555555555555555555n;
// console.log(score7);
// console.log(typeof score7);  //bigint

// 7) Symbol 
// let score8 = Symbol("Hi");
// console.log(score8);
// console.log(typeof score8);  //symbol

//unique values from Symbol
// let value1 = Symbol("Hello");
// let value2 = Symbol("Hello");
// console.log(value1, value2);
// console.log(value1 == value2); // both are different values (unique values)

// -----------------------------------------------------------------------------------------------
// Non- Primitive Datatype

// Note: Everthing in JS is an object 

// 1) Array (are variable in size and heterogenous)
// const heroes = ["superman", "batman", "spiderman"];
// const indianHeroes = ["shaktiman", "krrish", 23, null, false];
// console.log(heroes);
// console.log(indianHeroes);
// console.log(typeof heroes);   //object
// console.log(typeof indianHeroes);   //object
// console.log(heroes[1], indianHeroes[0]);
// heroes[1] = "hanuman";
// heroes[4] = "Sahil"
// console.log(heroes);
// console.log(typeof heroes);  //object
// console.log(typeof heroes[4]); //string
// console.log(typeof heroes[3]); //undefined

// 2) Object 
// {
//     key: value
// }

// const obj = {
//     firstName: "Neeraj",
//     age: 21,
//     isLoggedIn: true,
//     newObj: {
//         marks: 12
//     }
// }

// console.log(obj);
// console.log(obj.age);
// console.log(obj.firstName);
// console.log(obj.isLoggedIn);
// console.log(obj.newObj.marks);
// console.log(typeof obj);  //object

// 3) Functions 
// const myFunction = function () {
//     console.log("Hello world");
// }

// console.log(myFunction);
// console.log(typeof myFunction);  //function
// myFunction()

// -------------------------------------------------------------------------------
// Memory
// Stack (Primitive Datatypes, Immutable) Heap (Non-primitive Datatypes, Reference Datatype)

// let userName = "Vicky"
// let anotherUser = userName;
// anotherUser = "Manas";

// console.log(userName);
// console.log(anotherUser);


let obj1 = {
    name: "Gajanan",
    age: 23
}

let obj2 = obj1;

obj2.age = 12;

console.log(obj1);
console.log(obj2);