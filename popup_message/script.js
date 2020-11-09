const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener('click', event => {
    createElement();
});

const createElement = () => {
    const elem = document.createElement('div');
    elem.classList.add('msg');
    elem.innerHTML = "Dr Pepper Est.1885"
    container.appendChild(elem);


    setTimeout(() => {
        elem.remove();
    }, 4000);
}