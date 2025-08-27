// let myObj = {
//     "name": "Virat",
//     "country": "India",
//     "role": "Batsman"
// }

// delete myObj["role"];

// console.log(myObj);

// ---------------------------------------

let myJSONObj = [ 
  {
    "title": "sampleTitle1",
    "author": "sampleAuthor1",
    "readingStatus": false
  },
  {
    "title": "sampleTitle2",
    "author": "sampleAuthor2",
    "readingStatus": true
  },
  {
    "title": "sampleTitle3",
    "author": "sampleAuthor3",
    "readingStatus": false
  }
]

// let fiteredArray = [];

// const filteredJSONObj = myJSONObj.forEach((item) => {
//     // console.log(item);
//     if(item.readingStatus === false) {
//         fiteredArray.push(item);
//     }
// })

// console.log(fiteredArray);

const filteredArray = myJSONObj.filter(obj => !obj.readingStatus);

// console.log(filteredArray);
filteredArray.forEach((obj) => {
    console.log(obj.title);
    console.log(obj.author);
})