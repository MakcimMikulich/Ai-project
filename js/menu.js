const burger = document.getElementById("wrapper__icon");
const openBtn = document.getElementById("secondBtn");
const closeBtn = document.getElementById("wrapper__close");
const menu = document.querySelector(".menu__body");
const header = document.querySelector(".header");
const fixedHeader = document.querySelector(".fixed__header");
const container = document.querySelector(".modal__container");

function openBurger() {
    menu.classList.add("active");
    document.body.classList.add("lock");
}

function closeBurger() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        document.body.classList.remove("lock");
    }
}

const anchors = document.querySelectorAll(".anchors");

for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        menu.classList.remove("active");
        document.body.classList.remove("lock");

        const blockID = anchor.getAttribute("href").slice(1);
        let block = "start";

        document.getElementById(blockID).scrollIntoView({
            behavior: "smooth",
            block,
        });
    });
}

openBtn.addEventListener("click", openBurger);
burger.addEventListener("click", openBurger);
closeBtn.addEventListener("click", closeBurger);

document.addEventListener("click", function (event) {
    if (
        !container.contains(event.target) &&
        !header.contains(event.target) &&
        !fixedHeader.contains(event.target)
    ) {
        closeBurger();
    }
});

window.addEventListener("scroll", function () {
    if (window.scrollY > 144) {
        fixedHeader.classList.add("active"); // Добавляем класс, если скролл больше 80px
    } else {
        fixedHeader.classList.remove("active"); // Удаляем класс, если вернулись к началу
    }
});
