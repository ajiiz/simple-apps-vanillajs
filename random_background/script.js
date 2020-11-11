const btn = document.getElementById("btn");
const paragraph = document.getElementById("hsl");

btn.addEventListener("click", () => {
    const h = Math.floor(Math.random()* 356).toString();
    const s = (Math.floor(Math.random()* 100) + 1).toString();
    const l = (Math.floor(Math.random()* 100) + 1).toString();
    let hsl = "hsl(" + h + "," + s + "%," + l + "%)";

    if (l > 70) {
        document.body.style.color = "#232B32";
    } else {
        document.body.style.color = "#fff";
    }

    document.body.style.backgroundColor = hsl;
    paragraph.innerHTML = hsl;
})