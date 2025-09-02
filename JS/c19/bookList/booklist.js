const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const isbnInput = document.querySelector("#isbn");

const submit = document.querySelector("#submit");
console.log(submit);
const bookList = document.querySelector("#book-list");

submit.addEventListener("click", function () {
    const title = titleInput.value;
    const author = authorInput.value;
    const isbn = isbnInput.value;

    console.log(title, author, isbn);

    const newRow = document.createElement("tr");
    newRow.innerHTML = `<td> ${title} </td>
                        <td> ${author} </td>
                        <td> ${isbn} </td>
                        <td> <button class="delete-btn"> Delete </button> </td>`;
    
    bookList.appendChild(newRow);

    newRow.querySelector(".delete-btn").addEventListener("click", function () {
        newRow.remove();
    })

    titleInput.value = "";
    authorInput.value = "";
    isbnInput.value = "";
})