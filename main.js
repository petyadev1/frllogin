const loginbtn = document.getElementById("login");

let app = loginbtn.getAttribute("app");
let redirect = loginbtn.getAttribute('uri');

let authpage = "http://followrel.ga/auth.php?app=";
let authuri = "&uri=";

const geturl = authpage + app + authuri + redirect;

function onLoginClick() {
window.location.href = geturl;
}
