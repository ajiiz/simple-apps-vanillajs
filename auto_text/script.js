const textElement = document.getElementById("text");
const text = "Calm Your Soul :) "
let i = 0;

const generateText = () => {
    textElement.innerHTML = text.slice(0, i);

    i++;

    if (i > text.length) {
        i = 0;
    }
}

setInterval(generateText, 250);