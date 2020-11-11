const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    let h = Math.floor(Math.random()* 356).toString();
    const s = "75";
    const l = "42";
    let hsl = "hsl(" + h + "," + s + "%," + l + "%)";
    document.body.style.backgroundColor = hsl;
})