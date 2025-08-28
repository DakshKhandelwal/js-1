// Local Storage, Session Storage, Cookies

// Local Storage: It can store upto 5MB data. Data is stored in the browser, even if you refresh
// your page or if we close the browser or close the tab.

// localStorage.setItem("car", "BMW");

// console.log(localStorage.getItem("car"));

// localStorage.setItem("hello", "Javascript");

// // localStorage.removeItem("hello");
// localStorage.setItem("course", "js");

// // localStorage.clear();

// const user = { isLoggedIn: false }

// localStorage.setItem("loginDetails", JSON.stringify(user));

// let userDetails = localStorage.getItem("loginDetails");

// console.log(JSON.parse(userDetails));
// console.log(JSON.parse(userDetails).isLoggedIn);


// SessionStorage: It stores data for a particular seesion/tab. IF we close or chnage the tab our data is lost.
sessionStorage.setItem("animal", "tiger");


// Cookies: It can store data upto 4KB.

// Same Origin 
// 1) Protocol (http/https)
// 2) host/domain (flipkart.com/localhost)
// 3) port (8080/ 8000/ 3000)