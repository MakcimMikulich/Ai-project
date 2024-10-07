const modal = document.getElementById("modal");
const buttons = document.querySelectorAll(".open__modal");
const btnClose = document.querySelector(".modal__close");
const container = document.querySelector(".modal__container");

console.log(btnClose);

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
btnClose.addEventListener("click", closeModal);

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
