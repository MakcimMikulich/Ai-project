const dropdownButton = document.querySelector(".dropdown-button");
const dropdownMenu = document.querySelector(".dropdown-menu");

// Функция для открытия меню с анимацией
function openDropdown() {
	dropdownButton.classList.add("active");
	dropdownMenu.style.display = "block"; // Делаем меню видимым
	anime({
		targets: dropdownMenu,
		opacity: [0, 1],
		translateY: [-20, 0],
		duration: 300,
		easing: "easeOutQuad",
	});
}

// Функция для закрытия меню с анимацией
function closeDropdown() {
	dropdownButton.classList.remove("active");

	anime({
		targets: dropdownMenu,
		opacity: [1, 0],
		translateY: [0, -20],
		duration: 300,
		easing: "easeInQuad",
		complete: () => {
			dropdownMenu.style.display = "none"; // Скрываем меню после анимации
		},
	});
}

// Переключение состояния меню по клику на кнопку
dropdownButton.addEventListener("click", (event) => {
	event.stopPropagation(); // Предотвращаем всплытие события на документ
	const isVisible = dropdownMenu.style.display === "block";
	if (!isVisible) {
		openDropdown();
	} else {
		closeDropdown();
	}
});

// Закрытие меню при клике вне
document.addEventListener("click", (event) => {
	if (
		!dropdownMenu.contains(event.target) &&
		!dropdownButton.contains(event.target)
	) {
		closeDropdown();
	}
});
