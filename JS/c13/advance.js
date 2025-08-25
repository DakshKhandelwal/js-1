// Synchronous JS and Asynchronous JS

// console.log("one");
// console.log("two");
// console.log("three");

// Sync in JS 
// Synchronous: The code runs in a particular sequence of instructions given in the program.
// Each instruction waits for the previous instruction to complete its execution.

// Asynchronous 
// Due to sychronous programming, some important instructions gets blocked due to prevoius
// instructions, which causes delay in UI.
// Asynchronous code execution allows to execute instructions immediately and does not block the flow.

// console.log("10");
// console.log("11");

// function hello() {
//     console.log("hello");
// }

// setTimeout(hello, 2000); // execute hello function after 2 seconds 

// console.log("one");
// console.log("two");

// setTimeout(() => {

// }, 4000);  //4 sec

// 1000 ms = 1 sec 

// console.log("1");

// setTimeout(() => {
//     console.log("Hello world");
// }, 0)

// console.log("2");

// for(let i= 0; i<100; i++) {
//     console.log(`Hello ${i}`);
// }

// console.log("3");

// --------------------------------------------------------------------------------------

// Callbacks
// A callback function is a function passed as an argument to another function 

// function calculator(a, b, sumCallback) {
//     sumCallback(a,b)
// }

// calculator(1, 2, (a,b) => {
//     console.log(a+b);
// })

// const hello = () => {
//     console.log("hello");
// }

// setTimeout(hello, 2000);

// ----------------------------------------------------------------------

// Callback hell 
// Callback hell: Nested callbacks stacked below one another forming a pyramid structure

// let age = 19;
// if(age > 18) {
//     if(age >= 60) {
//         console.log("senior");
//     }
//     else {
//         console.log("adult");
//     }
// }
// else {
//     console.log("child");
// }

// for(let i=0; i<5; i++) {
//     for(let j=0; j<5; j++) {
//         console.log(i,j);
//     }
// }


function getData(dataId) {
    setTimeout(() => {
        console.log("data", dataId);
    }, 4000);
}

// getData(1);  //2sec
// getData(2);  //2sec
// getData(3);  //2sec

// data 1
// data 2
// date 3



function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId);
        if(getNextData) {
            getNextData();
        }
    }, 4000)
}

getData(1, () => {
    console.log("getting data 2...");

    getData(2, () => {
        console.log("getting data 3...");

        getData(3, () => {
            console.log("getting data 4...");
        
            getData(4);
        });
    })
})

//This style pf programming is very difficult to understand and manage 

// ---------------------------------------------------------------------------

// Promises: It is for eventual completion of a task. It is a js object.
// It is solution to callback hell

// let promise = new Promise((resolve, reject) => {
//     console.log("this is a promise");
//     // console.log(resolve);
//     // console.log(reject);
//     resolve("success");
//     // reject("error");
// });

// console.log(promise);

// resolve and reject are 2 function handlers provided by js. They are callback functions.

// 3 states in promise 
// 1) pending: the result is undefined.
// 2) fulfilled (resolved): the result is a value      resolve("success");
// 3) rejected: the result is error   reject("error");


// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//         }, 4000)
//     })
// }

// Promises 
// .then()  if promise is fulfilled
// .catch() if promise is rejected

// Promise.then((res) => {

// })  

// Promise.catch((err) => {

// }) 

// const getPromise = () => {
//     return new Promise ((resolve, reject) => {
//         console.log("this is a promise");
//         reject("success 123456");
//     })
// }

// let promise = getPromise();  //API call that returns a promise

// console.log(promise);

// promise.then((res) => {
//     console.log("Promise is fulfilled", res);
// })

// promise.catch((err) => {
//     console.log("Promise is rejected", err);
// })


// function asyncFunction() {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data");
//             resolve("success - 200")
//         }, 3000)

//     })
// }

// console.log("getting data 1...");

// asyncFunction().then((res) => {
//     console.log(res);
// })

// console.log("getting data 2....");

// asyncFunction().then((res) => {
//     console.log(res);
// })


function getData(dataId) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 3000)
    })
}

getData(1).then(() => {
    console.log("getting data 2...");
    getData(2).then(() => {
        console.log("getting data 3...");
        getData(3). then(() => {
            console.log("getting data 4...");
            getData(4);
        })
    })
})

// Promise Chaining 

getData(1)
    .then((res) => {
        console.log(res);
        return getData(2);
    })
    .then((res) => {
        console.log(res);
        return getData(3);
    })
    .then((res) => {
        console.log(res);
    })

