// Инициализация EmailJS
(function () {
    emailjs.init("jPfH0jfij_4uokIaV"); // Замените на ваш user_id
})();

const success = document.getElementById("success");
const base = document.getElementById("base");

export function changeModal() {
    success.classList.add("active");
    base.classList.add("unactive");
}

export function restartModal() {
    success.classList.remove("active");
    base.classList.remove("unactive");
}

document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
        event.preventDefault(); // Предотвращаем стандартное поведение формы

        const formData = new FormData(this);

        emailjs.sendForm("service_t1lxdw5", "template_afwbhqx", this).then(
            function (response) {
                // showResponseMessage("Email sent successfully!", "green");
                console.log("Ok");
                changeModal();
            },
            function (error) {
                // showResponseMessage("Failed to send email.", "red");
                console.log("error");
            }
        );
    });
