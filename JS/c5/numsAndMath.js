// const score = 100;
// console.log(score);

// const balance = 100.238567;
// console.log(balance);

// console.log(balance.toFixed(2));
// console.log(typeof balance.toFixed(2));

// console.log(Number(balance.toFixed(2)));
// console.log(typeof Number(balance.toFixed(2)));

// console.log(balance.toString());
// console.log(typeof balance.toString());

// console.log(balance.toString().length);
// console.log(typeof balance.toString());

// const newNumber = 10000000000;
// console.log(newNumber.toLocaleString());

// --------------------------------------------------------------------------------------------

// Math 
// console.log(Math);
// console.log(Math.PI);
// console.log(Math.abs(-4));
// console.log(Math.round(4.64999));

// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.9999));

// console.log(Math.min(4, 3, 45, 50, 1, -10));
// console.log(Math.max(4, 3, 45, 50, 1, -10));

// console.log(Math.random());

const min = 10;
const max = 20;

//min and max => [10, 20]

// console.log(Math.random());  //0 to 1 not equal to 1
// console.log(Math.random() * 10);  //0 to 10 not equal to 10
// console.log(Math.floor(Math.random() * 10)); // only integer values b/w 0 to 10 not equal to 10
// console.log(Math.floor(Math.random() * 10) + 1); // only integer values b/w 1 to 10 equal to 10

console.log(Math.floor(Math.random() * (max - min + 1)) + min);  //random value b/w 10 and 20
