// API: Application Programming Interface

// fetch API 
// The fetch API provides an interface for fetching (sending/receiving) data or resource
// It uses Request and Response objects
// fetch() method is used to fetch the data

// let promise = fetch(url, [optional]);

const url = "https://official-joke-api.appspot.com/random_joke123";  //API endpoint

// let data = await fetch(url);

// const getData = async () => {
//     console.log("calling api...");
//     let response = await fetch(url);
//     console.log(response);
//     console.log(response.status);
//     let data = await response.json();  //returns a js object
//     console.log(data);
//     console.log(data.setup);
//     console.log(data.punchline);
// }

// getData();

// AJAX is Asynchronous JS & XML 
// JSON is Javascript Object Notation 
// json() method: returns a promise that resolve with the result of parsing
// of the response body text as JSON

// Input: JSON 
// Output: js object

//JSON data
// {
//     "type": "general",
//     "setup": "What's the best thing about Switzerland?",
//     "punchline": "I don't know, but their flag is a big plus.",
//     "id": 426
// }

//js object

const myBtn = document.querySelector("#myBtn");
const joke = document.querySelector("#joke");

// const getData = async () => {
//     console.log("calling api...");
//     let response = await fetch(url);
//     console.log(response);
//     console.log(response.status);
//     let data = await response.json();  //returns a js object
//     console.log(data); //js object
//     joke.innerHTML = `<i> ${data.setup} </i> <strong> ${data.punchline} </strong>`;

// }

// myBtn.addEventListener("click", getData);

// complex data extraction 

// const url2 = "https://dogapi.dog/api/v2/breeds";  //API endpoint changed

// const getData = async () => {
//     console.log("calling api...");
//     let response = await fetch(url2);
//     console.log(response);
//     console.log(response.status);
//     let data = await response.json();  //returns a js object
//     let refinedData = data.data[0].attributes; 
//     console.log(refinedData);
//     joke.innerHTML = `${refinedData.name} <br> ${refinedData.description} <br> Min Life: ${refinedData.life.min} <br>
//                       Max Life: ${refinedData.life.max}`;

// }

// myBtn.addEventListener("click", getData);


// ------------------------------------------------------------------------
// Using promise chain to make API calls 

function getData() {
    fetch(url)
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((data) => {
        console.log(data);
        joke.innerHTML = `<i> ${data.setup} </i> <strong> ${data.punchline} </strong>`;
    })
}

myBtn.addEventListener("click", getData);

//Request and Reponse obj
// HTTP: Hyper Text Transfer Protocol
// HTTP Status Code 
