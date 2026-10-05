// Проверяем, что JavaScript подключился
console.log("Сайт ChinaStom запущен");

// Форма заявки
const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    alert("Спасибо! Ваша заявка отправлена.");

    form.reset();
});