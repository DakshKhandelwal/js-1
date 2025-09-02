const size = document.querySelector("#size");
const color = document.querySelector("#color");

const submit = document.querySelector("#submit");

const savedFontSize = getCookie("fontSize");
const savedFontColor = getCookie("fontColor");

if(savedFontColor && savedFontSize) {
    document.documentElement.style.setProperty(`--fontsize`, `${savedFontSize}px`)
    size.value = fontSize;

    document.documentElement.style.setProperty(`--fontcolor`, `${savedFontColor}`)
    color.value = fontColor;
}

submit.addEventListener("click", (e) => {
    e.preventDefault();

    const fontSize = size.value ;
    const fontColor = color.value ;

    console.log(fontColor, fontSize);

    // document.cookie = `fontSize=${fontSize}`;
    // document.cookie = `fontColor=${fontColor}`;

    setCookie("fontSize", fontSize, 2);
    setCookie("fontColor", fontColor, 2);

     document.documentElement.style.setProperty(`--fontsize`, `${fontSize}px`);
     document.documentElement.style.setProperty(`--fontcolor`,`${fontColor}`);
})

function getCookie(name) {
    const cookie = document.cookie;
    cookieArray = cookie.split(";");
    console.log(cookie);
    console.log(cookieArray);
}

function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = `${name}=${value};${expires};path=/`
}