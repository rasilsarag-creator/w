// زر القائمة (أحسن وأسلم)
function toggleMenu() {
    const menu = document.getElementById("nav-menu");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// زر التفاعل
const welcomeBtn = document.getElementById("welcomeBtn");

if (welcomeBtn) {
    welcomeBtn.addEventListener("click", function() {

        // رسالة ترحيب
        alert("أهلاً بك في واحة الأحساء الخلابة! نتمنى لك رحلة ممتعة في موقعنا.");

        // تغيير الخلفية بشكل أجمل
        document.body.style.backgroundColor = "#e8f5e9";

        // تغيير نص الزر بعد الضغط (حركة احترافية 👀)
        welcomeBtn.textContent = "تم الترحيب بك!";
    });
}
