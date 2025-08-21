var a = 10;
function b() {
    var x = 10;
    this.a = 5;
    console.log(this);
    console.log(window);
    console.log(this === window);
}

b();

// console.log(window);
// console.log(this);

// console.log(window === this);

// console.log(window.a);
// console.log(this.a);
