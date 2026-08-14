/* ========================================
   Load HTML Sections
======================================== */

async function loadSection(id, file) {
    try {
        const response = await fetch(`./sections/${file}`);

        if (!response.ok) {
            throw new Error(`Failed to load ${file}: ${response.status}`);
        }

        const html = await response.text();

        const element = document.getElementById(id);

        if (element) {
            element.innerHTML = html;
        }

    } catch (error) {
        console.error(error);
    }
}


/* ========================================
   Portfolio Sections
======================================== */

const sectionList = [
    ["about", "about.html"],
    ["research", "research.html"],
    ["projects", "projects.html"],
    ["publications", "publications.html"],
    ["experience", "experience.html"],
    ["education", "education.html"]
];


/* ========================================
   Initialize
======================================== */

document.addEventListener("DOMContentLoaded", () => {

    sectionList.forEach(([id, file]) => {
        loadSection(id, file);
    });

});