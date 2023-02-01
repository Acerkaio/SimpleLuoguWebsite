const toggleButton = document.querySelector('#toggle-button');
const MtoggleButton = document.querySelector('#mobile-toggle-button');
let darkMode = localStorage.getItem("theme");
var x = document.getElementsByTagName("body")[0];
if (darkMode === "dark") {
    x.style.transition = "0s ease-out";
    enableDarkMode();
} else {
    x.style.transition = "0s ease-out";
    disableDarkMode();
}

toggleButton.addEventListener('click', (e) => {
    darkMode = localStorage.getItem('theme');
    if (darkMode === 'dark') {
        document.getElementById('mobile-toggle-button').style.transform = 'rotate(-180deg)';
        x.style.transition = ".1s ease-out";
        disableDarkMode();
    } else {
        document.getElementById('mobile-toggle-button').style.transform = 'rotate(0deg)';
        x.style.transition = ".1s ease-out";
        enableDarkMode();
    }
});

function MTB() {
    darkMode = localStorage.getItem('theme');
    if (darkMode === 'dark') {
        document.getElementById('mobile-toggle-button').style.transform = 'rotate(-180deg)';
        x.style.transition = ".1s ease-out";
        disableDarkMode();
    } else {
        document.getElementById('mobile-toggle-button').style.transform = 'rotate(0deg)';
        x.style.transition = ".1s ease-out";
        enableDarkMode();
    }
};

function enableDarkMode() {

    document.getElementById("toggle-button").innerHTML = '<i class="fa fa-moon-o"></i>';
    //document.getElementById("mobile-toggle-button").innerHTML = '<i class="fa fa-moon-o"></i>';
    
    setTimeout(() => {
        document.getElementById("card-stylenight").style.display = 'block';
        document.getElementById("card-stylenight").style.opacity = '1';
    }, 100);

    document.body.classList.add("dark");
    setTimeout(() => {
        document.getElementById("card-stylenight").style.animation = 'slow-out 1s ease';
    }, 500);
    setTimeout(function () { 
        document.getElementById("card-stylenight").style.animation = ''; 
        document.getElementById("card-stylenight").style.display = "none"; 
        localStorage.setItem('theme', 'dark'); 
    }, 1490);


}

function disableDarkMode() {
    document.getElementById("toggle-button").innerHTML = '<i class="fa fa-sun-o"></i>'
    //document.getElementById("mobile-toggle-button").innerHTML = '<i class="fa fa-sun-o"></i>'
    
    setTimeout(() => {
        document.getElementById("card-stylelight").style.display = 'block';
        document.getElementById("card-stylelight").style.opacity = '1';
    }, 100);

    document.body.classList.remove("dark");

    setTimeout(() => {
        document.getElementById("card-stylelight").style.animation = 'slow-out 1s ease';
    }, 500);

    
    setTimeout(function () { 
        document.getElementById("card-stylelight").style.animation = ''; 
        document.getElementById("card-stylelight").style.display = "none"; 
        localStorage.setItem('theme', 'light');
    }, 1490);
}