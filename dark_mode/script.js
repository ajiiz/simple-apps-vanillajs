const btn = document.getElementById('btn');
let isDark = false;

btn.addEventListener('click', event => {
    document.body.classList.toggle('dark');
    let text;
    if (isDark) {
        text = "DARK MODE";
        btn.classList.remove("btn-dark");
    } else {
        text = "LIGHT MODE";
        btn.classList.add("btn-dark");
    }
    event.target.innerHTML = text;
    isDark = !isDark;
});