const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const img1 = document.getElementById('image1');
const img2 = document.getElementById('image2');
const img3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

//Dark or Light Images
function imageMode(color){
    img1.src = `img/undraw_proud_coder_${color}.svg`;
    img2.src = `img/undraw_feeling_proud_${color}.svg`;
    img3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

//Toggle Dark or Light Modes
function toggleDarkLightModes(isDark){
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode' ;
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    isDark? imageMode('dark') : imageMode('light');
}

//Switch Theme Dynamically
function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
        localStorage.setItem('theme', 'dark');
        toggleDarkLightModes(true);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleDarkLightModes(false);
    }
}

//Event Listener
toggleSwitch.addEventListener('change', switchTheme);

//Check Local Storage for Theme
const currentTheme = localStorage.getItem('theme');
if(currentTheme){
    document.documentElement.setAttribute('data-theme',currentTheme);

    if(currentTheme === 'dark'){
        toggleSwitch.checked = true;
        toggleDarkLightModes(true);
    }
} 