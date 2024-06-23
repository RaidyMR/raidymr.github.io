import { generateAboutPage } from '../../pages/about.js';
import { generateProjectsPage } from '../../pages/projects.js';
import { generateCertificatesPage } from '../../pages/certificates.js';

import { renderPage, toggleDarkMode, showDarkMode } from './utils.js';

document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.querySelector(".theme-switch__checkbox")
    const aboutButton = document.querySelector("#about");
    const projectsButton = document.querySelector("#projects");
    const certificatesButton = document.querySelector("#certificates"); 

    darkModeToggle.addEventListener("change", () => {
        toggleDarkMode();
    });
    
    aboutButton.addEventListener("click", () => {
        renderPage(generateAboutPage());
    });
    
    projectsButton.addEventListener("click", () => {
        renderPage(generateProjectsPage());
    });

    certificatesButton.addEventListener("click", () => {
        renderPage(generateCertificatesPage());
    });
    
    renderPage(generateAboutPage());
    showDarkMode();
    }
);