export default class Modal {
    constructor(id) {
        this.modal = document.getElementById(id);
        this.closeButton();
    }

    open() {
        this.modal.classList.add("modal-showed");
    }

    close() {
        this.modal.classList.remove("modal-showed");
    }

    isOpen() {
        return this.modal.classList.contains("modal-showed");
    }

    closeButton() {
        const button = this.modal.querySelector(".modal__close");

        button.addEventListener("click", () => {
            this.close();
        });
    }
}