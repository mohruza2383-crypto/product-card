import Modal from "./Modal.js";
import Form from "./Form.js";

alert("JS работает!");

const modal = new Modal("registration-modal");
const form = new Form("registration-form");

const changeColorBtn = document.getElementById("change-color-btn");
const googleBtn = document.getElementById("google-btn");
const registrationBtn = document.getElementById("registration-btn");

const cards = document.querySelectorAll(".product-card");
const title = document.querySelector(".catalog__title");

let isLavender = false;

title.addEventListener("mouseenter", function () {
    console.log(title.textContent);
});

changeColorBtn.addEventListener("click", function () {
    const newColor = isLavender ? "#f7f7fa" : "#E6E6FA";
    cards.forEach(card => card.style.backgroundColor = newColor);
    isLavender = !isLavender;

    this.textContent = isLavender
        ? "Вернуть исходный цвет"
        : "Изменить цвет карточек";
});

googleBtn.addEventListener("click", function () {
    window.open("https://www.google.com", "_blank");
});

registrationBtn.addEventListener("click", function () {
    modal.open();
});