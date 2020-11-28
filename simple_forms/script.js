const textTrigger = document.getElementById("register");
const signup = document.getElementById("signup");
const signin = document.getElementById("signin");
let elementsArray = document.querySelectorAll("span");
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