const slide = document.getElementById("images");
const images = document.querySelectorAll("img");
const button_left = document.getElementById("btn_left");
const button_right = document.getElementById("btn_right");

let index = 0;
let direction = 0;

const slideIn = () => {
    index = (direction) ? index + 1 : index - 1;

    if (index > images.length - 1) {
        index = 0;
    } else if (index < 0) {
        index = images.length - 1;
    }

    slide.style.transform = `translateX(-${index*400}px)`;
}

button_right.addEventListener('click', () => {
    direction = 1;
    slideIn();
});

button_left.addEventListener('click', () => {
    direction = 0;
    slideIn();
});