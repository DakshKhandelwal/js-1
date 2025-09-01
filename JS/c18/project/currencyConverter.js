const allCurrenciesApiUrl = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");

let fromCurr = document.querySelector(".from select");
let toCurr = document.querySelector(".to select");

let msg = document.querySelector(".msg");
const btn = document.querySelector("button");

for(let select of dropdowns) {
    for(currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode === "USD") {
            fromCurr = "USD";
            newOption.selected = "selected";
        }
        else if(select.name === "to" && currCode === "INR") {
            toCurr = "INR";
            newOption.selected = "INR"
        }
        select.append(newOption);
     }

     select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
     })
}

btn.addEventListener("click", async (event) => {
    event.preventDefault();

    let amount = document.querySelector(".amount input");
    let amountValue = amount.value;
    // console.log(amountValue);
    if(amountValue === "" || amountValue < 1) {
        amountValue = 1;
        amount.value = "1";
    }

    // console.log(amountValue);
    const URL = `${allCurrenciesApiUrl}/${fromCurr.toLowerCase()}.json`;
    // console.log(URL);
    let response = await fetch(URL);
    let data = await response.json();
    // console.log(data);
    let myResult = data[fromCurr.toLowerCase()];
    let rate = myResult[toCurr.toLowerCase()];
    
    let finalAmount = rate * amountValue;
    console.log(finalAmount);

    msg.innerText = `${amountValue} ${fromCurr} = ${finalAmount} ${toCurr}`;
})

const updateFlag = (ele) => {
    let currCode = ele.value;
    let countryCode = countryList[currCode];
    let newSrc= `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = ele.parentElement.querySelector("img");
    img.src = newSrc;
}
