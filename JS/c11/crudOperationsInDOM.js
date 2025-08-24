// CRUD operations for DOM (Create, Read, Update, Delete)

// Insert and Delete elements in DOM using js 
// let ele = document.createElement("div");

// 1. node.append(ele): It adds the element at the end of the node (inside that node)

// let newBtn = document.createElement("button");

// newBtn.innerText = "Click me!";
// // console.log(newBtn);

// let div = document.querySelector("div");

// div.append(newBtn);

// 2. node.prepend(ele): Adds element at the start of the node (inside);

// div.prepend(newBtn);

// 3. node.before(ele): Adds element before the node (outside)
// div.before(newBtn);

// 4. node.after(ele): Add element after the node (outside)
// div.after(newBtn);

// ---------------------------------------------------------------------------
// Delete Elements 

// node.remove() //remove that node from the DOM

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i> Hello JS </i>"

// document.querySelector("body").prepend(newHeading);

// document.querySelector(".para").remove();

// document.querySelector("#myHeading").remove();


// Question: Create a <p> tag in HTML and give it a class. Now create a new class in css
// and try to append this new class to the <p> element.

//Hard coded way to solve
// let p = document.createElement("p");
// p.innerHTML = "<p class='para newClass'>This is a p tag </p>";
// document.querySelector(".para").remove();

// document.querySelector("body").prepend(p);

let p = document.querySelector("p");

//setAttribute("class", "newClass");
// p.setAttribute("class", "newClass");
p.classList.add("newClass");
