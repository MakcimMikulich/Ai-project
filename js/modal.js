import { restartModal } from "./sendData.js";

const modal = document.getElementById("modal");
const buttons = document.querySelectorAll(".open__modal");
const btnsClose = document.querySelectorAll(".modal__close");
const container = document.querySelector(".modal__container");
const ok = document.querySelector(".ok");

function openModal() {
    modal.classList.add("active");
    document.body.classList.add("lock");
}
function closeModal() {
    modal.classList.remove("active");
    document.body.classList.remove("lock");
}

buttons.forEach((button) => {
    button.addEventListener("click", openModal);
});

btnsClose.forEach((btn) => {
    btn.addEventListener("click", closeModal);
    restartModal();
});

ok.addEventListener("click", () => {
    closeModal();
    restartModal();
});

document.addEventListener("click", function (event) {
    if (
        !container.contains(event.target) &&
        !buttons[0].contains(event.target) &&
        !buttons[1].contains(event.target) &&
        !buttons[2].contains(event.target)
    ) {
        closeModal();
    }
});
