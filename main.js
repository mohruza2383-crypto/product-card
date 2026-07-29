alert("JS работает!");

const button = document.getElementById("change-color-btn");
const cards = document.querySelectorAll(".product-card");
const title = document.querySelector(".catalog__title");

let isLavender = false;


title.addEventListener("mouseenter", function () {
    console.log(title.textContent);
});

button.addEventListener("click", function () {
    cards.forEach(function (card) {
        if (isLavender) {
            card.style.backgroundColor = "#f7f7fa";
        } else {
            card.style.backgroundColor = "#E6E6FA";
        }
    });

    isLavender = !isLavender;
});