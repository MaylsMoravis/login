let users = [];

// JSON fayldan foydalanuvchilarni yuklash
fetch("users.json")
    .then(response => response.json())
    .then(data => users = data);

// ✅ Sign Up (Ro‘yxatdan o‘tish)
function checkSignup() {
    let id = document.getElementById("id").value;
    let password = document.getElementById("password").value;

    let userExists = users.find(user => user.id === id);

    if (userExists) {
        alert("Siz allaqachon ro‘yxatdan o‘tgansiz! Login sahifasiga o‘ting.");
    } else {
        users.push({ id, password });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Ro‘yxatdan o‘tdingiz! Endi kirishingiz mumkin.");
        window.location.href = "index.html";
    }
}

// ✅ Login (Kirish)
function checkLogin() {
    let id = document.getElementById("loginId").value;
    let password = document.getElementById("loginPassword").value;

    let user = users.find(user => user.id === id && user.password === password);

    if (user) {
        alert("Xush kelibsiz!");
        window.location.href = "index.html";
    } else {
        alert("ID yoki parol noto‘g‘ri!");
    }
}
