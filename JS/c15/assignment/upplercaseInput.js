const user = document.querySelector("#fname");
console.dir(user);
console.log(user);

user.addEventListener("blur", (event) =>  {
    console.log(event);
    console.dir(event);
    console.log(event.target.value.toUpperCase());
    // console.log(event.target.value);
})

