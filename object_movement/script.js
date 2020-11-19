const obj = document.getElementById("object");

obj.onmousemove = (e) => {
    let x  = e.clientX;
    let y = e.clientY;

    obj.style.position = "absolute";
    obj.style.top = `${y - 25}px`;
    obj.style.left = `${x - 25}px`;
};