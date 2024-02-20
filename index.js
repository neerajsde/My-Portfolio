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