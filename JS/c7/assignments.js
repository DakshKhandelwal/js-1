function firstWord(str) {
    let trimStr = str.trim();
    // console.log(trimStr);
    let words = trimStr.split(" ");
    // console.log(words); 
    return words[0];
}

// console.log(firstWord("    see and stop  "));
// console.log(firstWord("     Hello World!  "));
// console.log(firstWord("    12345  "));
// console.log(firstWord("    "));

// ---------------------------------------------------------------------

function chunkStr(str, size) {
    let chunks = [];
    for(let i = 0; i < str.length; i = i + size) {
        let subStr = str.slice(i, i + size);
        chunks.push(subStr);
    }

    return chunks;
}

// console.log(chunkStr("1234567890", 4));

// ----------------------------------------------------------------------------------

function firstNonRepeatingChar (str) {
    let charCount = {};

    for(let char of str) {
        charCount[char] = 1 + (charCount[char] || 0);

    }
    
    for(let char of str) {
        if(charCount[char] === 1) {
            return char;
        }
    }
    return null;
}

// firstNonRepeatingChar("aabbcdd");

// -------------------------------------------------------------------

const symbol = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
]

let num = 798;
// 700 + 98
// 500 + 100 + 100 + 90 + 5 + 1 + 1 + 1
//DCCXCVIII

// let result = "";
// symbol.forEach((item) => {
//     // console.log(item);
//     // let val1 = item[0];
//     // let val2 = item[1];
//     // console.log(val1, val2);
//     const [key, val] = item;  //destructuring of array
//     // console.log(key, val);

//     while( num >= val) {
//         num -= val;
//         result += key;
//     }
// })

// console.log(result);

// // 6 = 5 + 1 = VI
// //18 = 10 + 8 = 10 + 5 + 1 + 1 + 1 = XVIII 
// let num = 18;
// // val = 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1
  

// let result = "";
//   18 > 10
//    8 > 5
//    3 > 1
//    2 > 1 
//    1 >= 1
// if(num >= val) {
//     num = num - val;
//     result = result + val;
// }

// XVIII 


// ---------------------------------------------------------------------------

function indexOfIgnoreCase(str, subStr) {
    str = str.toLowerCase();
    subStr = subStr.toLowerCase();

    return str.indexOf(subStr);
}

console.log(indexOfIgnoreCase("Hello World", "world"));
console.log(indexOfIgnoreCase("apple", "Ple"));
console.log(indexOfIgnoreCase("test", "aaa"));
