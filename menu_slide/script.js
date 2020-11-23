const toggler = document.getElementById("toggler");
const arrowRight = document.getElementById("arrowRight");
const arrowLeft = document.getElementById("arrowLeft");
const menu = document.getElementById("menu");
let slided = false;
const menuWidth = '25vw';

toggler.addEventListener("click",() => {
    slided = !slided;
    if (slided) {
        menu.style.transform = `translateX(0)`;
        arrowLeft.style.display = "block";
        arrowRight.style.display = "none";
    } else {
        menu.style.transform = `translateX(-${menuWidth})`;
        arrowLeft.style.display = "none";
        arrowRight.style.display = "block";
    }
})