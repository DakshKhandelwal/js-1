//Event Propogation

// Event Capturing/Trickling (top to bottom) and Event Bubbling (bottom to up)

// document.querySelector("#grandParent").addEventListener("click", () => {
//     console.log("grandParent clicked");
// }, false);

// // isCapture -> true (Capturing)
// // isCapture -> false (Bubbling) by default

// document.querySelector("#parent").addEventListener("click", () => {
//     console.log("parent clicked");
// }, true)

// document.querySelector("#child").addEventListener("click", () => {
//     console.log("child clicked");
// }, false)

//First event capturing takes place and then event bubbling

// parent -> child -> grandparent


// document.querySelector("#grandParent").addEventListener("click", (e) => {
//     console.log("grandParent clicked");
//     e.stopPropagation();
// }, true);

// document.querySelector("#parent").addEventListener("click", () => {
//     console.log("parent clicked");
// }, false)

// document.querySelector("#child").addEventListener("click", () => {
//     console.log("child clicked");
//     // e.stopPropagation();
// }, false)



// Event Delegation: Due to event bubbling we are able to access child elements in the parent
// which reduces the need to add event for child elements

// document.getElementById("laptop").addEventListener("click", () => {
    
// })

// document.getElementById("watches").addEventListener("click", () => {

// })

// document.getElementById("shoes").addEventListener("click", () => {

// })

// document.getElementById("books").addEventListener("click", () => {

// })

document.getElementById("categories").addEventListener("click", (e) => {
    console.log("categoruies clicked");
    console.log(e);
    console.log(e.target.id);
    window.location.href = "/" + e.target.id;
})