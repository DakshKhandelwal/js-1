const colorSelect = document.querySelector("#colorSelect");
const button = document.querySelector("input[type=button]");
// console.log(button);

button.addEventListener("click", function () {
    const selectedIndex = colorSelect.selectedIndex;
    colorSelect.remove(selectedIndex);
})