let html = document.documentElement;
let themeButtons = document.querySelectorAll("[data-set-theme]");

// Назначаем тему странице
if (localStorage.getItem("theme") == null) {
    // Если первый раз на сайте, то ставим по-умолчанию авто
    document.documentElement.setAttribute("data-theme", "auto");
}
else {
    // Иначе запоминаем выбранную тему в локальное хранилище
    document.documentElement.setAttribute("data-theme", localStorage.getItem("theme"));
}

// Клик на одну из кнопок меняет тему
themeButtons.forEach((button) => {
    let theme = button.dataset.setTheme;
    button.addEventListener("click", () => {
        html.dataset.theme = theme;
        localStorage.setItem("theme", theme);
    });
});

// Принудительная очистка локального хранилища
// localStorage.clear();

// Вывод в консоль содержимого локального хранилища
console.log(localStorage);