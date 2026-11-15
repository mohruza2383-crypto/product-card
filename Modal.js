export default class Modal {
    constructor(id) {
        this.modal = document.getElementById(id);

        if (!this.modal) {
            console.error("Модальное окно не найдено");
            return;
        }

        this.addCloseListener();
        this.addOverlayListener();
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

    addCloseListener() {
        const button = this.modal.querySelector(".modal__close");

        if (button) {
            button.addEventListener("click", () => {
                this.close();
            });
        }
    }

    addOverlayListener() {
        const overlay = this.modal.querySelector(".overlay");

        if (overlay) {
            overlay.addEventListener("click", () => {
                this.close();
            });
        }
    }
}