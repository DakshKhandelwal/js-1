// Strings 

// Create String 
let str1 = "Javascript";
let str2 = 'Javascript';
// console.log(str1, str2);

let str3 = new String("myString");
// console.log(str3);

// console.log(str3[0]);
// console.log(str3[30]);
// console.log(str3[-3]);

// Template Literals in JS 
// String Interpolation 
// `any text ${expression} any text`
let str4 = `This is string interpolation in ${str1}`;
// console.log(str4);
// console.log(typeof str4);

let newString = `This is a template literal ${1+2+3}`; 
// console.log(newString); //This is a template literal 6

// Escape Characters (\n, \t)
let str5 = "DakshKhandelwal";
let str6 = "Daksh\tKhandelwal";  //\t -> 1 char only
// console.log(str5.length);
// console.log(str6.length);

// Properties and Methods of String 
let myString = "Gokulraj";
//String length
// console.log(myString);
// console.log(myString.length);

// String Methods in JS 
// These are builtin methods/function in JS to manipulate a string

// console.log(myString.toUpperCase());
// console.log(myString.toLowerCase());
// console.log(myString);

let str7 = new String("Manas/Chaudhary");
// console.log(str7);
// console.log(str7);
// console.log(str7.trim());
// console.log(str7);

// console.log(str7.charAt(1));
// console.log(str7.charCodeAt(1)); //returns ascii value
// console.log(str7.indexOf('z')); //returns first matching char and if not matched returns -1

// console.log(str7.split("/"));
// console.log(str7.slice(2, -1));

// console.log(str7.substring(-1, 4));

// Question: Take fullname from the user and make a usedId like this firstName@LastNameLength
// himanshu kumar => himanshu@kumar14 

let fullName = prompt("Enter your full name");
// console.log(fullName);
fullName = fullName.trim();
console.log(fullName);

let user = fullName.split(' ');

const userId = `${user[0]}@${user[1]}${fullName.length}`;
console.log(userId);