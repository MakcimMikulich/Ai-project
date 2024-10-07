<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные из формы
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = strip_tags(trim($_POST["message"]));

    // Проверяем, что данные корректны
    if (empty($name) || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($message)) {
        // Если есть ошибки, возвращаем на форму
        header("HTTP/1.1 400 Bad Request");
        echo "Пожалуйста, заполните все поля правильно.";
        exit;
    }

    $recipient = "adoberoflit@gmail.com"; 

    // Заголовки письма
    $subject = "Новое сообщение от $name";
    $email_content = "Имя: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Сообщение:\n$message\n";

    $email_headers = "From: $name <$email>";

    // Отправляем письмо
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        // Если письмо отправлено, отправляем ответ
        header("HTTP/1.1 200 OK");
        echo "Ваше сообщение успешно отправлено.";
    } else {
        // Если не удалось отправить, отправляем ответ
        header("HTTP/1.1 500 Internal Server Error");
        echo "Извините, произошла ошибка при отправке сообщения.";
    }
} else {
    // Если метод запроса не POST, возвращаем ошибку
    header("HTTP/1.1 405 Method Not Allowed");
    echo "Неверный метод запроса.";
}
?>
