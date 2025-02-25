const introText = "Welcome to the empire...\n> Assembling the greeters...\n> Gates opening!";
let i = 0;
const speed = 50; 

function typeEffect() {
    if (i < introText.length) {
        let char = introText.charAt(i);

        if (char === "\n") {
            document.getElementById("intro-text").innerHTML += "<br>"; // Handle line breaks
        } else {
            document.getElementById("intro-text").innerHTML += char;
        }

        i++;
        setTimeout(typeEffect, speed);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);