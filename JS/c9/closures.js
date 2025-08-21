// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     return y;
// }

// var z = x();
// console.log(z);
// z();

// Closure: It is a function bind together with its lexical environment

// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     a = 100;
//     return y;
// }

// var z = x();
// console.log(z);
// z();

function z() {
    var b = 100;
    function x() {
        var a = 200;
        function y() {
            console.log(a, b);
        }
        y();
    }
    x();
}

z();