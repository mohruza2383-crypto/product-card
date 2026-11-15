export default class Form {
    constructor(id) {
        this.form = document.getElementById(id);

        if (!this.form) {
            throw new Error(`Форма с id "${id}" не найдена`);
        }

        this.addSubmitListener();
    }

    getValues() {
        return Object.fromEntries(
            new FormData(this.form).entries()
        );
    }

    isValid() {
        return this.form.checkValidity();
    }

    reset() {
        this.form.reset();
    }

    addSubmitListener() {
        this.form.addEventListener("submit", (event) => {
            event.preventDefault();

            if (!this.isValid()) {
                this.form.reportValidity();
                return;
            }

            const password = this.form.querySelector("#password");
            const repeatPassword = this.form.querySelector("#repeat-password");

            if (password.value !== repeatPassword.value) {
                alert("Пароли не совпадают!");
                return;
            }

            const formData = this.getValues();

            console.log("Данные формы:", formData);

            alert("Форма заполнена успешно!");

            this.reset();
        });
    }
}