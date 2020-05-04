import homepage from "./homepage";
import menu from "./menu";
import contact from "./contact";

const navButton = document.querySelectorAll(".nav-item");
const homeButton = document.querySelector("#home-button");
const menuButton = document.querySelector("#menu-button");
const contactButton = document.querySelector("#contact-button");
const contentDiv = document.querySelector("#content");

const selectNavButton = (clickedButton) => {
    navButtons.forEach(button => {
        if (button == clickedButton) {
            button.classList.add("nav-item-selected");
        } else {
            button. classList.remove("nav-item-selected");
        }
    })
}

homeButton.addEventListener("click", () => {
    selectNavButton(this);
    homepage();
});

menuButton.addEventListener("click", () => {
    selectNavButton(this);
    menu();
});

contactButton.addEventListener("click", () => {
    selectNavButton(this);
    contact();
});

contactDiv. addEventListener("animationend", () => {
    this.classList.remove("down-end-active");
})

homepage();