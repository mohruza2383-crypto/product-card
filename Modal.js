export default class Modal {
    constructor(id) {
        this.modal = document.getElementById(id);

        if (!this.modal) {
            console.error("Не найдено модальное окно:", id);
            return;
        }

        this.closeButton = this.modal.querySelector(".modal__close");
        this.overlay = this.modal.querySelector(".overlay");

        this.closeButton?.addEventListener("click", () => this.close());
        this.overlay?.addEventListener("click", () => this.close());

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                this.close();
            }
        });
    }

    open() {
        this.modal?.classList.add("modal-showed");
    }

    close() {
        this.modal?.classList.remove("modal-showed");
    }
}