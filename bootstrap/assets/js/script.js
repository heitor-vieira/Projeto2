var root = document.documentElement;
var btn = document.getElementById("themeToggle");

function applyTheme(theme) {
    root.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
    if (btn) {
        if (theme === "dark") {
            btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        } else {
            btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }
    }
}

var savedTheme = localStorage.getItem("theme");
if (savedTheme) { applyTheme(savedTheme); } else { applyTheme("light"); }

if (btn) {
    btn.addEventListener("click", function () {
        var currentTheme = root.getAttribute("data-bs-theme");
        if (currentTheme === "light") { applyTheme("dark"); } else { applyTheme("light"); }
    });
}