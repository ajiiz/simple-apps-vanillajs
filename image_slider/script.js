const slide = document.getElementById("images");
const images = document.querySelectorAll("img");

let index = 0;

const slideIn = () => {
    index++;
    if (index > images.length - 1) {
        index = 0;
    }
    slide.style.transform = `translateX(-${index*400}px)`;
}

setInterval(slideIn, 5000);