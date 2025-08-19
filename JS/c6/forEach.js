//for each loop
// arr.forEach(callback function) 

// CallBack function: A function passed as an argument to another function 

// let arr = [2, 4, 6, 8];

// arr.push();

// arr.forEach(function (val) {
//     console.log(val);
// })

// arr.forEach((val) => {
//     console.log(val);
// })

// let newArray = ["pune", "mumbai", "delhi"];

// newArray.forEach(function (city) {
//     console.log(city);
// })
// newArray.forEach( (city) => console.log(city));

// newArray.forEach((item) => {
//     console.log(item);
// })

//forEach is a Higher Order Function (HOF)

let num = [1, 2, 3, 4];

let calcSquare = function (num) {
    console.log(num* num);
}

num.forEach(calcSquare);