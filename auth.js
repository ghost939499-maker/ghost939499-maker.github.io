// Get users from storage
function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}

// Save users
function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

// SIGN UP
function signup() {
    const username = document.getElementById("su-username").value;
    const password = document.getElementById("su-password").value;

    if (!username || !password) {
        alert("Fill all fields");
        return;
    }

    const users = getUsers();

    if (users.find(u => u.username === username)) {
        alert("Username already exists");
        return;
    }

    users.push({ username, password });
    saveUsers(users);

    alert("Account created successfully");
    window.location.href = "login.html";
}

// LOGIN
function login() {
    const username = document.getElementById("li-username").value;
    const password = document.getElementById("li-password").value;

    const users = getUsers();
    const user = users.find(
        u => u.username === username && u.password === password
    );

    if (user) {
        localStorage.setItem("loggedInUser", username);
        window.location.href = "profile.html";
    } else {
        alert("Invalid login details");
    }
}

// CHECK LOGIN
function checkLogin() {
    const user = localStorage.getItem("loggedInUser");
    if (!user) {
        window.location.href = "login.html";
    } else {
        document.getElementById("user").textContent = user;
    }
}

// LOGOUT
function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}


