
const validUser = "saramaldonado@miusaic.com"
const validPassword = "maldonado123"

let currentUser = "";
let currentPassword = "";

const LogIn = () => {
    if (validUser.toLowerCase() != currentUser.toLowerCase() || validPassword != currentPassword) {
        alert("Credenciales incorrectas");
        return;
    }
    window.location = "./../pages/Dashboard.html"

}

const SetUser = (user) => {

    currentUser = user;
}

const SetPassword = (password) => {


    currentPassword = password;
}