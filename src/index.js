// Module functions
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

// Initial page laoad
loadHome();
attachEventListeners();

// Function to grab DOM Elements and create Event Listeners
function attachEventListeners() {
const homeBtn = document.getElementById('homebtn');
const menuBtn = document.getElementById('menubtn');
const contactBtn = document.getElementById('contactbtn');
homeBtn.addEventListener('click', switchToHome);
menuBtn.addEventListener('click', switchToMenu);
contactBtn.addEventListener('click', switchToContact);
}

// Tab switching logic
function switchToHome() {
    loadHome();
    attachEventListeners();
}

function switchToMenu() {
    loadMenu();
    attachEventListeners();
}

function switchToContact() {
    loadContact();
    attachEventListeners();
}