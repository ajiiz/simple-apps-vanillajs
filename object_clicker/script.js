const WIDTH = document.body.clientWidth - 30;
const HEIGHT = document.body.clientHeight - 30;
const btn = document.getElementById("btn");
const counter = document.getElementById("counter");

let count = 1;
let start = false;
let interval;

btn.addEventListener("click",() => {
    start = !start;
    if (start) {
        interval = setInterval(createBubble, 1000);
        btn.innerHTML = "End the game";
    } else {
        clearInterval(interval);
        btn.innerHTML = "Play once again";
        count = 1;
    }

});

const createBubble = () => {
    const elem = document.createElement("div");
    elem.classList.add("object");
    elem.style.left = (Math.floor(Math.random() * WIDTH)).toString() + "px";
    elem.style.top = (Math.floor(Math.random() * HEIGHT)).toString() + "px";
    document.body.appendChild(elem);

    elem.addEventListener('click', () => {
        counter.innerHTML = count;
        count++;
        elem.remove();
    })
}