const changeColorBtn = document.getElementById("change-color-btn");
const googleBtn = document.getElementById("google-btn");
const registrationBtn = document.getElementById("registration-btn");

let isLavender = false;

if (changeColorBtn) {
    changeColorBtn.addEventListener("click", () => {
        document.querySelectorAll(".product-card").forEach(card => {
            card.style.backgroundColor = isLavender ? "#f7f7fa" : "#E6E6FA";
        });

        isLavender = !isLavender;
    });
}

if (googleBtn) {
    googleBtn.addEventListener("click", () => {
        window.open("https://www.google.com", "_blank");
    });
}

if (registrationBtn) {
    registrationBtn.addEventListener("click", () => {
        const modal = document.getElementById("registration-modal");
        if (modal) modal.classList.add("modal-showed");
    });
}