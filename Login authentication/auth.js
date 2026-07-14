const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const user = {
            username: username,
            email: email,
            password: password
        };

        localStorage.setItem(email, JSON.stringify(user));

        alert("Account Created Successfully!");

        window.location.href = "index.html";

    });

}
// LOGIN

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        const user = JSON.parse(localStorage.getItem(email));

        if (user === null) {

            alert("User Not Found!");

            return;

        }

        if (user.password === password) {

            localStorage.setItem("loggedInUser", email);

            alert("Login Successful!");

            window.location.href = "dashboard.html";

        } else {

            alert("Wrong Password!");

        }

    });

}