const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const height = Number(document.querySelector("#height").value);
    const weight = Number(document.querySelector("#weight").value);
    const result = document.querySelector("#result");
    const remark = document.querySelector("#remark");

    console.log(height, weight);
    if(height <= 0 || isNaN(height)) {
        result.innerHTML = `Please enter a valid height ${height}`;
    }
    else if(weight <= 0 || isNaN(weight)) {
        result.innerHTML = `Please enter a valid weight ${weight}`;
    }
    
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        console.log(bmi);
        result.innerHTML = `<span> <b> ${bmi} </b> </span>`;

        if(bmi < 18) {
            remark.innerHTML = `<div> Underweight </div>`;
        }
        else if( bmi > 24) {
            remark.innerHTML = `<div> Overweight </div>`;
        }
        else {
            remark.innerHTML = "<div> Healthy </div>";
        }
    }
})