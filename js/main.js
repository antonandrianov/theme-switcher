let html = document.documentElement;
let themeButtons = document.querySelectorAll("[data-set-theme]");

// Если тема была ранее задана, присваиваем ее значение
if (localStorage.getItem("theme") != null) {
    document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")
    );
}

// Клик на одну из кнопок меняет тему
themeButtons.forEach((button) => {
    let theme = button.dataset.setTheme;

    button.addEventListener("click", () => {
        html.dataset.theme = theme;
        localStorage.setItem("theme", theme);
    });

    // Принудительная очистка локального хранилища
    // localStorage.clear();
});

// Вывод в консоль содержимого локального хранилища
console.log(localStorage);