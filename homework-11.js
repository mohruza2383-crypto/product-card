const subscribeForm = document.getElementById("subscribe-form");

if (subscribeForm) {
    subscribeForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!subscribeForm.checkValidity()) {
            subscribeForm.reportValidity();
            return;
        }

        const email = subscribeForm.querySelector("#email").value;

        console.log({
            email: email
        });

        subscribeForm.reset();
    });
}


let user = null;


const registrationForm = document.getElementById("registration-form");

if (registrationForm) {
    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!registrationForm.checkValidity()) {
            alert("Регистрация отклонена. Проверьте правильность заполнения полей.");
            registrationForm.reportValidity();
            return;
        }

        const password = registrationForm.querySelector("#password").value;
        const repeatPassword = registrationForm.querySelector("#repeat-password").value;

        if (password !== repeatPassword) {
            alert("Регистрация отклонена. Пароли не совпадают!");
            return;
        }

        const formData = new FormData(registrationForm);

        user = Object.fromEntries(formData.entries());

        delete user["repeat-password"];

        user.createdOn = new Date();

        console.log("Регистрация успешна:", user);

        alert("Регистрация прошла успешно!");

        registrationForm.reset();

        const modal = document.getElementById("registration-modal");

        if (modal) {
            modal.classList.remove("modal-showed");
        }
    });
}