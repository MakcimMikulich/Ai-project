// Получаем ссылку на кнопку отправки
const submitBtn = document.getElementById("submitBtn");

// Получаем все поля
const nameInput = document.querySelector(".form__name");
const emailInput = document.querySelector(".form__email");
const messageInput = document.querySelector(".form__message");

// Функция для валидации имени
function validateName() {
    const namePattern = /^[A-Za-zА-Яа-яЁё\s]+$/; // Регулярное выражение для проверки только букв (включая кириллицу и пробелы)

    if (nameInput.value.trim() === "" || !namePattern.test(nameInput.value)) {
        nameInput.classList.add("false"); // Добавляем класс false
        nameInput.classList.remove("true"); // Убираем класс true
    } else {
        nameInput.classList.add("true"); // Добавляем класс true
        nameInput.classList.remove("false"); // Убираем класс false
        return true;
    }
}

// Функция для валидации email
function validateEmail() {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(String(emailInput.value).toLowerCase())) {
        emailInput.classList.add("false");
        emailInput.classList.remove("true");
    } else {
        emailInput.classList.add("true");
        emailInput.classList.remove("false");
        return true;
    }
}

// Функция для валидации сообщения
function validateMessage() {
    if (messageInput.value.trim() === "") {
        messageInput.classList.add("false");
        messageInput.classList.remove("true");
    } else {
        messageInput.classList.add("true");
        messageInput.classList.remove("false");
        return true;
    }
}

// Добавляем обработчики на событие focusout (потеря фокуса)
nameInput.addEventListener("focusout", validateName);
emailInput.addEventListener("focusout", validateEmail);
messageInput.addEventListener("focusout", validateMessage);

// // Добавляем обработчик на кнопку отправки
// submitBtn.addEventListener("click", function (event) {
//     event.preventDefault(); // Предотвращаем отправку формы

//     // Выполняем валидацию на нажатии кнопки
//     if (validateName() && validateEmail() && validateMessage()) {
//         sendData();
//     }
// });
