const conv = document.getElementById("conv");
const result = document.getElementById("result");
let elementsArray = document.querySelectorAll("input");

conv.addEventListener("click",(e) => {
    result.style.opacity = "0";
    let celsius = elementsArray[0].value;
    let fah = celsius*1.8000 + 32.00;
    if (celsius === "") {
        fah = "Insert a temperature in Celsius";
    } else {
        fah = "In Fahrenheit: " + fah + "F";
    }
    result.innerHTML = fah;
    result.style.opacity = "1";
    e.preventDefault();
})