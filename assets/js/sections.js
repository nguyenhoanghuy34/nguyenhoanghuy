/* ========================================
   Load HTML Sections
======================================== */

async function loadSection(id, file) {
    try {
        const response = await fetch(`sections/${file}`);

        if (!response.ok) {
            throw new Error(`Failed to load ${file}`);
        }

        const html = await response.text();

        document.getElementById(id).innerHTML = html;

    } catch (error) {
        console.error(error);
    }
}


const sections = [
    ["about", "about.html"],
    ["research", "research.html"],
    ["projects", "projects.html"],
    ["publications", "publications.html"],
    ["experience", "experience.html"],
    ["education", "education.html"]
];


sections.forEach(([id, file]) => {
    loadSection(id, file);
});


const sections = [
    ["about", "about.html"],
    ["research", "research.html"],
    ["projects", "projects.html"],
    ["publications", "publications.html"],
    ["experience", "experience.html"],
    ["education", "education.html"],
    ["certifications", "certifications.html"],
    ["skills", "skills.html"]
];

sections.forEach(([id, file]) => {
    loadSection(id, file);
});