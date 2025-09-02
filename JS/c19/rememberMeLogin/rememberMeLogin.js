const form = document.querySelector("form");
const submit = document.querySelector("#submit");
const checkbox = document.getElementById("checkbox");

const userName = document.getElementById("username");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const user = userName.value.trim();
    console.log(user); 
    console.log(user.value); 
    const password = passwordInput.value.trim();

    alert(`Logged in as ${user}`);

    if(checkbox.checked) {
        localStorage.setItem("username", user);
        localStorage.setItem("passowrd", password);
    }
    else {
        localStorage.removeItem("username");
        localStorage.removeItem("passowrd");
    }
})

if(localStorage.getItem("username") && localStorage.getItem("passowrd")) {
    document.querySelector("#anotherButton").style.display = "inline";
}

document.querySelector("#anotherButton").addEventListener("click", () => {
    const getUserName = localStorage.getItem("username"); 
    alert(`Logged in as ${getUserName}`)
})