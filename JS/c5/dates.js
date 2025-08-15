// let date = new Date();
// console.dir(date);  //dir method to print js object
// console.dir(date.toString()); 
// console.log(date.toDateString());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleDateString('en-GB'));
// console.log(date.getMonth()); // 0-based index
// console.log(date.getDay()); // 0-based index
// console.log(date.getFullYear()); // 0-based index

// console.log(typeof date);

// const myNewDate = new Date("01-14-2025");
// console.log(myNewDate);

const start = Date.now();
let num = 500;
//doSomeLongCalculation();
console.log(findNthPrimeNumber(num));
console.log(`Time elapsed: ${Date.now() - start} ms`);

function findNthPrimeNumber(num) {
    let result = 1;
    let count = 0;
    while(count < num) {
        result++;
        if(isPrime(result)) {
            count++;
        }
    }
    return result;
}

function isPrime(result) {
    if(result <= 1) return false;

    for(let i=2; i<=Math.sqrt(result); i++) {
        if(result % i === 0) {
            return false;
        }
    }
    return true;
}