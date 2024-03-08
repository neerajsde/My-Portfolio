var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0px";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

// Typing Text 
var typeData = new Typed(".role", {
    strings: [
      "Full Stack Developer",
      "Web Developer",
      "Frontend Developer",
      "Backend Developer",
      "Software Developer",
      "Coder",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
});

// Page Loader
var loader = document.getElementById("pageloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
});

// dark mode
const root = document.documentElement.style;
let darkMode = false;
const modeBtn = document.querySelector('[mode-btn]'); // Assuming mode-btn is an ID, update accordingly

modeBtn.addEventListener("click", function () {
    console.log(darkMode);
    if (darkMode == false) {
        console.log("Dark");
        darkModeProperties();
    } else {
        lightModeProperties();
        console.log("Light");
    }
});

const modeText = document.querySelector('[data-mode-txt]');
const modeIcon = document.querySelector('[data-mode-icon]');

// dark mode default
const prefersDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

if (localStorage.getItem("dark-mode")) {
    darkMode = localStorage.getItem("dark-mode") === "true"; // Convert string to boolean
    if (darkMode) {
        darkModeProperties();
    } else {
        lightModeProperties();
    }
} else {
    localStorage.setItem("dark-mode", prefersDarkMode);
    darkMode = prefersDarkMode;
    lightModeProperties(); // Assuming light mode is default
}

function darkModeProperties() {
    root.setProperty("--bgWhite", "#000");
    root.setProperty("--text-black", "#fff");
    root.setProperty("--whiteColor", "#000");
    root.setProperty("--txt-faided", "#222");
    root.setProperty("--sidebar-bg", "#000");
    root.setProperty("--input-bg", "#777");
    root.setProperty("--input-text", "#fff");
    root.setProperty("--input-text-ph", "#000");
    root.setProperty("--txt-color-2", "#366379");
    modeText.textContent = "Light";
    modeIcon.src = "./assets/light.svg";
    darkMode = true;
    localStorage.setItem("dark-mode", true);
}

function lightModeProperties() {
    root.setProperty("--bgWhite", "#fff");
    root.setProperty("--text-black", "#000");
    root.setProperty("--whiteColor", "#fff");
    root.setProperty("--txt-faided", "rgb(231,231,231)");
    root.setProperty("--sidebar-bg", "rgba(255, 255, 255, 0.183)");
    root.setProperty("--input-bg", "#fff");
    root.setProperty("--input-text", "#222");
    root.setProperty("--input-text-ph", "#999");
    root.setProperty("--txt-color-2", "#343d68");
    modeText.textContent = "Dark";
    modeIcon.src = "./assets/dark.svg";
    darkMode = false;
    localStorage.setItem("dark-mode", false);
}
