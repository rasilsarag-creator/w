function toggleMenu() {
    var menu = document.getElementById("nav-menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// 2. زر التفاعل (النقطة 1 و 4)
document.getElementById("welcomeBtn").onclick = function() {
    // إظهار رسالة ترحيب (تفاعل)
    alert("أهلاً بك في واحة الأحساء الخلابة! نتمنى لك رحلة ممتعة في موقعنا.");
    
    // تغيير لون الخلفية كتفاعل بصري بسيط
    document.body.style.backgroundColor = "#f0fff0"; 
};
