const typingElement = document.getElementById("typing");

const texts = [
    "Data Scientist",
    "Machine Learning Engineer",
    "Agentic AI Engineer",
    "Deep Learning Researcher"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {

    if (!typingElement) return;

    const current = texts[textIndex];

    if (!deleting) {

        typingElement.textContent =
            current.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === current.length) {

            deleting = true;

            setTimeout(typingEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            current.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            textIndex++;

            if (textIndex >= texts.length) {

                textIndex = 0;

            }

        }

    }

    setTimeout(
        typingEffect,
        deleting ? 45 : 90
    );

}

typingEffect();