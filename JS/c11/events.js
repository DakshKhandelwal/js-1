// Events 
// The change in the state of an object is known as event 
// Events are fired to notify code of "interesting changes" that may affect the code

// Mouse events (click, double click etc)
// Keyboard events (keypress, keyup, keydown)
// Form event (submit etc)

// In-line event handling 
//  ondblclick="console.log('This is a double click event');"

// Event Handling using JS 
// node.event = () => {
    //code 
// } 

// btn.onclick = () => {

// }

// let btn = document.querySelector("button");

// btn.onclick = (e) => {
//     console.log("button was clicked");
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX, e.clientY);
// }

// btn.onclick = () => {
//     console.log("Second click event");
// }

// btn.onclick = () => {
//     console.log("Third click event");
// }

//Note: if we have 2 events with same name js will keep the last event.
//Note: if we have inline event and js events only js event will be executed (html event will not be executed)

// let div = document.querySelector("div");

// div.onmouseover = () => {
//     console.log("Inside this div");
// }

// div.onmouseleave = () => {
//     console.log("On mouse leave event");
// }

// Event Object 
// It is a special object  which has details about the event

// node.event = (e) => {
//    code 
// }

// Event Listeners 
// node.addEventListener(event, callback)

// let btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//     console.log("Button was clicked");
// })

// btn.addEventListener("click", () => {
//     console.log("Second handler");
// })

// const handler3 = () => {
//     console.log("Third handler");
// }

// btn.addEventListener("click", handler3);

// btn.addEventListener("click", () => {
//     console.log("Fourth handler");
// })


// node.removeEventListener(event, callback)
// Pass the same function reference while removing the event 

// btn.removeEventListener("click", handler3)

// ------------------------------------------------------------------------------------------

// Question: Create a toggle button that toggles screen b/w light and dark mode

let button = document.querySelector("button");
let body = document.querySelector("body");

let currMode = "light";

button.addEventListener("click", () => {
    if(currMode === "light") {
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
})
