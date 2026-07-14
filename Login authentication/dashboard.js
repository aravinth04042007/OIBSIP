const email = localStorage.getItem("loggedInUser");

if (email === null) {

    window.location.href = "signin.html";

}

const user = JSON.parse(localStorage.getItem(email));

document.getElementById("welcome").innerHTML =
    "Welcome " + user.username;

function logout() {

    localStorage.removeItem("loggedInUser");

    alert("Logged Out Successfully!");

    window.location.href = "index.html";

}