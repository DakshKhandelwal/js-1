// {
//     console.log("Hello world");
//     let a = 100;
//     console.log(a);
// }

//block is used to club multiple statements into single statement

// if(true) {
//     console.log("Hello world");
//     let a = 100;
//     console.log(a);
// }

// for(let i=0; i<n; i++) {

// }

// Lexical Environment 
var x = 1;
function a() {
    var b = 100;
    c();
    function c() {
        console.log(b);
        console.log(x);
    }
}

console.log(b);
a();