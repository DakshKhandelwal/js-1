const emptyObj = {};

const obj = {
    user: "Virat",
    score: 105
}

// console.log(obj);
// console.log(obj.user);
// console.log(obj.score);

// console.log(Object.keys(obj));
// console.log(Object.values(obj));


// console.log(Object.keys(emptyObj));
// if(Object.keys(emptyObj).length === 0) {
//     console.log("Obj is empty");
// }

// const myObj = {
//     name: "Virat",
//     "full Name": "Virat Kohli",
//     age: 37,
//     location: "India",
//     isLoggedIn: false,
//     loginDays: ["Monday", "Friday"],
//     score: {
//         testMatch: 105,
//         ipl: 89,
//     }
// }

// console.log(myObj);
// console.log(myObj.name);
// console.log(myObj["name"]);
// console.log(myObj["full Name"]);
// console.log(myObj.isLoggedIn);

// console.log(myObj.loginDays);
// console.log(myObj.loginDays[1]);
// console.log(myObj.score.ipl);

// Object.freeze(myObj);
// console.log(myObj);

// myObj.location = "Delhi";

// console.log(myObj);

//Insert keys in object
// myObj.email = "abcd@gmail.com";
// // console.log(myObj);

// myObj.greeting = function () {
//     console.log("Happy Independance Day");
// }
// console.log(myObj);

// //Delete some keys from the obj;
// delete myObj.email;

// console.log(myObj);

// const user = {};
// user.id = 123;
// user.name = "Vishal";
// user.isLoggedIn = true;
// console.log(user);

// const user2 = {
//     email: "abcd@gmail.com",
//     fullName: {
//         userName: {
//             firstName: "Ram",
//             lastName: "Sharma"
//         }
//     }
// }

// console.log(user2.fullName.userName);

// const obj1 = { 1: "first", 2: "second"};
// const obj2 = { 3: "third", 4: "fourth"};

// // console.log(obj1);
// // console.log(obj2);

// // obj2.obj1 = obj1;
// // console.log(obj2);

// const obj3 = {...obj1, ...obj2}; //spread operator create shallow copy 
// console.log(obj3);

// obj3["3"] = "third Modified";

// console.log(obj3);
// console.log(obj2);


// const user = [
//     {
//         id: 1,
//         email: "abc@gmail.com"
//     },
//     {
//         id: 2,
//         email: "ramdom@gmail.com"
//     }
// ]

// console.log(user[1].email);


//Shallow and Deep copy 

const obj1 = {
    id1: 123,
    username1: {
        first1: "Rohit",
        last2: "Sharma"
    }
}

const obj2 = {
    id2: 321,
    username2: {
        first2: "Virat",
        last2: "Kohli"
    }
}

// const obj3 = {...obj1, ...obj2}; //spread operator shallow copy
// console.log(obj3);
// obj3.username1.first1 = "RohitModified";

// console.log(obj3);

// console.log(obj1);

//Deep Copy
const obj3 = JSON.parse(JSON.stringify({ ...obj1, ...obj2 }));
console.log(obj3);
obj3.username1.first1 = "RohitModified";

console.log(obj3);

console.log(obj1);
