const circles = document.querySelectorAll(".circle");
// console.log(circles); 

const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

// console.log(prevBtn, nextBtn);
const progress = document.querySelector("#progress");
// console.log(progress);

let currentActiveCircle = 1;

nextBtn.addEventListener("click", () => {
    currentActiveCircle++;
    if(currentActiveCircle > circles.length) {
        currentActiveCircle = circles.length;
    }

    addAndRemoveClass();
})

prevBtn.addEventListener("click", () => {
    currentActiveCircle--;

    if(currentActiveCircle < 1) {
        currentActiveCircle = 1;
    }

    addAndRemoveClass();
})

function addAndRemoveClass() {
    circles.forEach((circle, index) => {
        if(index < currentActiveCircle) {
            circle.classList.add("active");
        }
        else {
            circle.classList.remove("active");
        }
    })

    const actives = document.querySelectorAll(".active");
    // progress.style.width = 
    if(currentActiveCircle === 1) {
        prevBtn.disabled = true;
    }
    else if(currentActiveCircle === circles.length) {
        nextBtn.disabled = true;
    }
    else {
        prevBtn.disabled = false;
        next.disabled = false;
    }
}




