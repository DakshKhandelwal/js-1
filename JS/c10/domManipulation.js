// DOM Manipulation 
 
// console.log(window);
// console.log(window.document);
// console.dir(window.document);

// console.log(document);
// console.dir(document);

// 1. Selection by id (if not present will return null)
let myPara = document.getElementById('myPara');
// console.log(myPara);
// console.dir(myPara);

let button = document.getElementById('myBtn123');
// console.log(button);

// 2. Selection by Class (ity returns HTML collection as o/p and if not present return empty html collection)
let headings = document.getElementsByClassName('myClass-heading123');
// console.log(headings);
// console.dir(headings);

// console.log(headings[0]);

// 3. Selection by tag (it returns html collection as o/p and if not present it will return empty html collection)
let pTags = document.getElementsByTagName('p123');
// console.log(pTags);

// Query Selectors (# -> ids, . -> class)
// 1. document.querySelector("#myPara");
let myButton = document.querySelector("#myBtn");
// console.log(myButton);

let myHeadings = document.querySelector(".myClass-heading"); //returns first element
// console.log(myHeadings);

// 2. document.querySelectorAll("");
let allHeadings = document.querySelectorAll(".myClass-heading"); //returns all matching elements in a node list
// console.log(allHeadings);


// ----------------------------------------------------------------------------------------------------------
// Properties 
// 1) tagName: returns tag for element node

let firstPara = document.querySelector("p");
// console.log(firstPara);
// console.dir(firstPara);

// console.log(firstPara.tagName);  //P

// let firstButton = document.getElementById("myBtn");
let firstButton = document.querySelector("#myBtn");

// console.log(firstButton);
// console.log(firstButton.tagName);

// 2) innerText: returns the text content of the element and all its children
let div = document.querySelector("div");
// console.log(div);
// console.dir(div);
// console.log(div.innerText);

let btn = document.querySelector("button");
// console.log(btn);
// console.log(btn.innerText);

// 3) innerHTML: retunrs the plain text or HTML content in the element and all its children
let div1 = document.querySelector("div");
// console.log(div1);
// console.log(div1.innerHTML);
// console.log(div1.innerText);

let btn2 = document.querySelector("button");
// console.log(btn2.innerHTML); 

// 4) textContent: returns the text content even for the hidden elements
let div2 = document.querySelector("div");
// console.log(div.innerText);
// console.log(div.innerHTML);
// console.log(div.textContent);

// Question: We have a heading element in our html file with text "Hello Javascript". Append "from Accio" to this string using JS

// let heading = document.querySelector("h1");
// console.log(heading);

// console.log(heading.innerText);

// heading.innerText = heading.innerText + " from Accio"; //concatenation

// Question: Create 3 divs all with common class name "box". Access them and add some unique text to each of these divs

// let divs = document.querySelectorAll(".box");
// console.log(divs);

// console.log(divs[0]);

// // divs[0].innerText = "Unique value 1";
// // divs[1].innerText = "Unique value 2";
// // divs[2].innerText = "Unique value 3";

// let index = 1;
// for(let div of divs) {
//     div.innerText = `Unique value ${index}`;
//     index++;
// }

// --------------------------------------------------------------------------

// Attributes 
// 1) getAttribute(attr)
// let h1 = document.querySelector("h1");
// console.log(h1);

// let id = h1.getAttribute("id");
// console.log(id);

// let name = document.querySelector("h1").getAttribute("name");
// console.log(name);

// 2) setAttribute(attr, value) //it will set the attr with that value
// let firstDiv = document.querySelector("div");
// firstDiv.setAttribute("id", "newID1234");
// // firstDiv.setAttribute("class", "newClass");
// firstDiv.classList.add("newClass");

// ----------------------------------------------------------------------------
// Manipulation of CSS using JS 
// Styles 
// element.styles.backgroundColor

// CSS  ->  JS in camel case 
// color -> color 
// background-color -> backgroundColor
// font-size -> fontSize


let div3 = document.querySelector("div");
console.log(div3);
div3.style.backgroundColor = "green"; 
div3.style.fontSize = "30px";
// div3.style.visibility = "hidden";

div3.innerText = "Hello JS";