document.addEventListener('DOMContentLoaded', () => {

const titleText = "BETTYE'S BACKROOM";
const subtitleText = "WELCOME TO THE BACKROOMS OF MY ENGINEERING JOURNEY";


const titleElement = document.getElementById('title');
const subtitleElement = document.getElementById('subtitle');

let titleIndex = 0;
let subtitleIndex = 0;

titleElement.classList.add('cursor');

function typeTitle() { 
    if (titleIndex < titleText.length) {



        titleElement.textContent += titleText.charAt(titleIndex);
        titleIndex++;
        setTimeout(typeTitle, 90); // SPEED OF TYPING
    } else {
        titleElement.classList.remove('cursor');

        subtitleElement.classList.add('cursor');


        setTimeout(typeSubtitle, 400); // DELAY BEFORE SUBTITLE STARTS

    }

}

function typeSubtitle() {
    if (subtitleIndex < subtitleText.length) {
        subtitleElement.textContent += subtitleText.charAt(subtitleIndex);
        subtitleIndex++;
        setTimeout(typeSubtitle, 35); // SPEED OF TYPING
    } else {
        subtitleElement.classList.remove('cursor');
    }
}



// START TYPING EFFECT
setTimeout(typeTitle, 500); // DELAY BEFORE TITLE STARTS

const cursor = document.getElementById("custom-cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});

}); 