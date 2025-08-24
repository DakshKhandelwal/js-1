const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
    // console.log(button);
    button.addEventListener('click', (e) => {
        // console.log(e);
        console.log(e.target);
        console.dir(e.target);
        console.log(e.target.id);
        console.log(e.target.value);
        body.style.backgroundColor = e.target.id; 
    })
})
