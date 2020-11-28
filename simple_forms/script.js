const textTrigger = document.getElementById("register");
let elementsArray = document.querySelectorAll(".trigger");
let changedType = false;

elementsArray.forEach(elem => elem.addEventListener("click", () => {
        changedType = !changedType;

        if (changedType) {
            signup.style.display = "none";
            signin.style.display = "flex";
        } else {
            signup.style.display = "flex";
            signin.style.display = "none";
        }
}));