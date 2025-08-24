const clock = document.querySelector("#clock");

// let date = new Date();
// clock.innerHTML =  date.toLocaleTimeString();

// setTimeout(() => {
//  //code it will be executed after 1 second
// }, 1000)

// 1000 ms = 1sec 

// setInterval( () => {
//     //code it will be executed after every 1 second
// } , 1000);

// 1000ms = 1sec 

setInterval(() => {
    let date = new Date();
    clock.innerHTML =  date.toLocaleTimeString();
}, 1000)